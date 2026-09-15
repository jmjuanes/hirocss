import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { bundle } from "lightningcss";

const ENTRY = join(process.cwd(), "index.css");
const OUTPUT = join(process.cwd(), "hiro.css");

const { code } = bundle({
    filename: ENTRY,
    minify: true,
    sourceMap: false,
    targets: {},
});

writeFileSync(OUTPUT, code);

console.log(`✓ built ${OUTPUT} (${code.length} bytes)`);
