// One dad joke, one line, best told during a storm.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "I'm writing a book about hurricanes. It's only a rough draft.";
const limit = 140;

if ([...joke].length > limit) throw new Error("joke is over 140 characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke);
