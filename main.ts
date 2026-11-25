import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "After the 3rd reorganization this month, I realized the only person left in accounting is a 40-year-old PDF of a spreadsheet named Brenda.";
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function validateEntry(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `Entry length ${text.length} is outside ${MIN_LENGTH}..${MAX_LENGTH}`,
    );
  }
}

try {
  validateEntry(ENTRY_TEXT);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_TEXT); // no trailing newline
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}
