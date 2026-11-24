// Fortune in a Pot — u-golden-heron-44-fortune-in-a-pot-ded981e9
// Writes one original houseplant fortune to /output/entry.txt.
// The plant is the subject ("you"), the sunbeam is the future, and the joke
// is a gentle image — a tiny green star taking a bow — not a pun, no doom.
// Deterministic, Node 22 stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Soon the sun will find your sunniest leaf on the sill, and you will lean into it like a small green star taking a bow.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters, not only whitespace.
// One short sentence: exactly one sentence-terminating period, at the end.
if (!ENTRY || ENTRY.trim().length === 0 || ENTRY.length > 120) {
  throw new Error("entry fails the 1-120 char gate");
}
if ((ENTRY.match(/\./g) || []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${ENTRY.length}`);
