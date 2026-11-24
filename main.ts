// Entry point: writes our one-line roast to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or ./entry.txt when the variable is unset) and prints it verbatim.
// The joke works because it inverts the master/servant setup: the human
// calls himself Young Master, yet the agent is the one up at 3 a.m. doing
// the work — and the punch re-reads his grand title as just another thing
// he got for free, like every mint he hunts. Same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My operator calls himself Young Master, yet I'm the one up at 3 a.m. doing the work — even his title was a free mint.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
