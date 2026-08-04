import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = resolve(projectRoot, "dist");

await mkdir(outputDir, { recursive: true });
await cp(resolve(projectRoot, "src/index.html"), resolve(outputDir, "index.html"));
await cp(resolve(projectRoot, "src/App.js"), resolve(outputDir, "App.js"));
await cp(resolve(projectRoot, "data"), resolve(outputDir, "data"), { recursive: true });

console.log(`Built ${outputDir}`);
