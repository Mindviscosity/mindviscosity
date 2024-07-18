import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "CNAME");
const destination = path.join(__dirname, "dist", "CNAME");

fs.copyFileSync(source, destination);
console.log("CNAME file copied to dist directory");
