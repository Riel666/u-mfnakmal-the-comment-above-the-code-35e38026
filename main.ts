import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "// This function is held together by fear, one global, and a prayer. It has survived three rewrites and one resignation.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE, "utf8");
