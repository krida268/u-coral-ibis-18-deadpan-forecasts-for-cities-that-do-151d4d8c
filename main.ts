// Deadpan forecast for the invented city of Glimmerwick.
// Writes a single broadcast-style weather line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const forecast =
  "In Glimmerwick, expect scattered showers of small change, a high of 19 degrees, and one umbrella shared by the entire town.";

// The gate: 1-160 characters, a single line, not only whitespace.
const chars = [...forecast];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`forecast is ${chars.length} characters, must be 1-160`);
}
if (forecast.trim().length === 0 || /[\r\n]/.test(forecast)) {
  throw new Error("forecast must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
console.log(forecast);
