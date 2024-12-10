const fs = require("fs");
const path = require("path");
const stdinBuffer = fs.readFileSync(0);
const allLintIssues = JSON.parse(stdinBuffer.toString());

const reProject =
  /^Parsing error: ESLint was configured to run on \`[^\`]*\` using \`parserOptions\.project\`:/;

const importantLintIssues = allLintIssues.filter((json) => {
  const { errorCount, warningCount, messages } = json;

  if (errorCount === 0 && warningCount === 0) return false;

  if (messages.length) {
    if (reProject.test(messages[0].message)) return false;
  }

  return true;
});

const table = importantLintIssues.map((json) => {
  const { errorCount, filePath, messages } = json;

  let level = "warning";
  if (errorCount) level = "error";

  const relFilePath = path.relative(process.cwd(), filePath);

  return [
    level,
    `${relFilePath}:${messages[0].line}:${messages[0].column}`,
    messages[0].ruleId,
  ];
});

console.table(table);

const hasErrors = importantLintIssues.some((issue) => issue.errorCount > 0);
if (hasErrors) {
  process.exit(1);
}
