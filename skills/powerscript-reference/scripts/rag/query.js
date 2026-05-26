// query.ts
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { createRequire } from "module";
import { pathToFileURL } from "url";

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// query.ts
var EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";
var DEFAULT_TOP_K = 5;
function scriptDir() {
  return path.dirname(process.argv[1]);
}
function ensureDependencies(localModules) {
  if (fs.existsSync(path.join(localModules, "node_modules", "better-sqlite3"))) return;
  fs.mkdirSync(localModules, { recursive: true });
  execSync("npm install better-sqlite3 sqlite-vec @xenova/transformers", { cwd: localModules, stdio: "inherit" });
}
async function queryEmbeddings(question, dbPath, topK) {
  const localModules = path.join(scriptDir(), "query_modules");
  ensureDependencies(localModules);
  const localRequire = createRequire(pathToFileURL(path.join(localModules, "node_modules", "better-sqlite3", "package.json")));
  const Database = localRequire("better-sqlite3");
  const sqliteVec = localRequire("sqlite-vec");
  const localXenova = pathToFileURL(path.join(localModules, "node_modules", "@xenova", "transformers", "src", "transformers.js")).href;
  const { pipeline } = await import(localXenova);
  const extractor = await pipeline("feature-extraction", EMBEDDING_MODEL);
  const output = await extractor(question, { pooling: "mean", normalize: true });
  const embedding = new Float32Array(output.data);
  const db = new Database(dbPath, { readonly: true });
  sqliteVec.load(db);
  const rows = db.prepare(`
    SELECT chunk_path
    FROM vec_chunks
    WHERE embedding MATCH ?
    ORDER BY distance
    LIMIT ?
  `).all(embedding, topK);
  db.close();
  return rows.map((r) => r.chunk_path);
}
function outputMarkdown(chunkPaths, dbPath) {
  const baseDir = path.dirname(path.resolve(dbPath));
  const sections = chunkPaths.map((chunkPath) => {
    const absPath = path.join(baseDir, chunkPath);
    return fs.existsSync(absPath) ? fs.readFileSync(absPath, "utf8").trim() : `# ${chunkPath}

*(file not found)*`;
  });
  console.log(sections.join("\n\n---\n\n"));
}
async function main() {
  const args = process.argv.slice(2);
  const question = argValue(args, "--question");
  const dbPath = argValue(args, "--embeddings");
  invariant(question, "--question is required");
  invariant(dbPath, "--embeddings is required");
  const topKRaw = argValue(args, "--top");
  const topK = topKRaw ? parseInt(topKRaw, 10) : DEFAULT_TOP_K;
  const markdown = args.includes("--markdown");
  const results = await queryEmbeddings(question, dbPath, topK);
  if (markdown) outputMarkdown(results, dbPath);
  else console.log(JSON.stringify(results, null, 2));
}
function argValue(args, flag) {
  const idx = args.indexOf(flag);
  if (idx === -1 || idx + 1 >= args.length) return void 0;
  return args[idx + 1];
}
main().catch((err) => {
  console.error("Query failed:", err);
  process.exit(1);
});
