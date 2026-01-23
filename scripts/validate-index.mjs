import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(new URL("..", import.meta.url).pathname);
const indexPath = resolve(repoRoot, "index.json");
const index = JSON.parse(readFileSync(indexPath, "utf-8"));

const errors = [];

for (const unit of index.units ?? []) {
  for (const lesson of unit.lessons ?? []) {
    const lessonPath = resolve(repoRoot, lesson.path);
    let content = "";
    try {
      content = readFileSync(lessonPath, "utf-8");
    } catch (error) {
      errors.push(`Missing file: ${lesson.path}`);
      continue;
    }

    const titleLine = content.split(/\r?\n/).find((line) => line.startsWith("# "));
    const title = titleLine?.replace(/^#\s+/, "");
    if (!title || title !== lesson.title) {
      errors.push(`Title mismatch: ${lesson.path} (index: ${lesson.title}, file: ${title ?? "(missing)"})`);
    }
  }
}

if (errors.length > 0) {
  console.error("Validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Validation passed.");
