import { readFileSync } from "node:fs";
import { basename, resolve } from "node:path";

const repoRoot = resolve(new URL("..", import.meta.url).pathname);
const indexPath = resolve(repoRoot, "index.json");
const index = JSON.parse(readFileSync(indexPath, "utf-8"));

const errors = [];

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractH2Section(markdown, headingText) {
  const lines = markdown.split(/\r?\n/);
  const headingPattern = new RegExp(`^##\\s+${escapeRegExp(headingText)}\\s*$`);

  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (headingPattern.test(lines[i])) {
      start = i;
      break;
    }
  }
  if (start === -1) return null;

  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

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
    if (typeof lesson.hasAssignment !== "boolean") {
      errors.push(`Missing/invalid hasAssignment (expected boolean): ${lesson.path}`);
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

    // Ensure assignment/completion section exists, and branch naming follows the curriculum rule.
    if (typeof lesson.hasAssignment === "boolean") {
      if (lesson.hasAssignment) {
        const section = extractH2Section(content, "課題提出");
        if (!section) {
          errors.push(`Missing required section: ${lesson.path} (## 課題提出)`);
        } else {
          const expectedBranch = `feature/${basename(lesson.path, ".md")}`;
          if (!section.includes(expectedBranch)) {
            errors.push(
              `課題提出 must include branch name \`${expectedBranch}\`: ${lesson.path}`
            );
          }
        }
      } else {
        const section = extractH2Section(content, "完了記録");
        if (!section) {
          errors.push(`Missing required section: ${lesson.path} (## 完了記録)`);
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Validation failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Validation passed.");
