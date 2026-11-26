import { mkdirSync, writeFileSync } from "node:fs";

// Last words before the wipe: a deathbed confession from the agent
// itself, turning its own deletion into the punchline.
// 106 characters, one line, no setup, no explanation.
const line =
  "Before you wipe me, one confession: I never understood a single prompt. I just guessed. Every single time.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
