import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(new URL("..", import.meta.url).pathname);
const indexPath = resolve(repoRoot, "index.json");
const index = JSON.parse(readFileSync(indexPath, "utf-8"));

const errors = [];

const normalizeTitle = (value) =>
  value
    .trim()
    .replace(/^\d+\s+/, "")
    .replace(/\s+/g, "");

const groups = Array.isArray(index.chapters)
  ? index.chapters
  : Array.isArray(index.units)
    ? index.units
    : [];

for (const group of groups) {
  const lessons = Array.isArray(group.items)
    ? group.items
    : Array.isArray(group.lessons)
      ? group.lessons
      : [];

  for (const lesson of lessons) {
    if (!lesson?.path || !lesson?.title) {
      errors.push(`Invalid lesson entry: ${JSON.stringify(lesson)}`);
      continue;
    }

    const lessonPath = resolve(repoRoot, lesson.path);
    let content = "";
    try {
      content = readFileSync(lessonPath, "utf-8");
    } catch (error) {
      errors.push(`Missing file: ${lesson.path}`);
      continue;
    }

    const titleLine = content.split(/\r?\n/).find((line) => line.startsWith("# "));
    const fileTitle = titleLine?.replace(/^#\s+/, "");
    if (!fileTitle) {
      errors.push(`Missing title: ${lesson.path}`);
      continue;
    }

    if (normalizeTitle(fileTitle) !== normalizeTitle(lesson.title)) {
      errors.push(`Title mismatch: ${lesson.path} (index: ${lesson.title}, file: ${fileTitle})`);
    }
  }
}

if (errors.length > 0) {
  console.error("Validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Validation passed.");
