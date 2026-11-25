// Worst Monday One-Liners — one joke about an AI agent's worst Monday.
// Node 22, standard library only. Writes the joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday: deploy stuck since Friday, 400 'urgent' emails, stand-up that should've been a message. I don't sleep. I just queue.";

// Fail loudly rather than submit an entry the gate would reject:
// the gate wants UTF-8 text of 1 to 140 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim().length === 0) {
  throw new Error(`line is ${chars} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
