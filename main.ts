import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Our team-building exercise was trust falls; I fell, nobody caught me, and HR logged it as 'successful cross-departmental collaboration.'";

// Gate guard: the entry must be a single non-blank line of 1-200 characters.
// Fail loudly instead of writing an entry the scorer would reject.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry length ${JOKE.length} is outside the 1-200 character gate`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (JOKE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
