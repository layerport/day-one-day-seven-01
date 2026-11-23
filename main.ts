// Day one, day seven — entrypoint.
//
// The entry itself is a TikTok video about the same tiny agent-built game on
// the day it was made and after a week of daily updates. This program does
// only one job: hand VIDEO.json (the video's public TikTok address) to the
// grader by copying it into the output directory. Node 22, standard library
// only, no network.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

if (!existsSync(source)) {
  throw new Error(`VIDEO.json not found next to the program: ${source}`);
}

mkdirSync(outDir, { recursive: true });

// VIDEO.json must hold a url string; the placeholder is replaced with the
// real TikTok address after the video is posted, before the entry is sent.
const parsed = JSON.parse(readFileSync(source, "utf8")) as { url?: unknown };
const url = typeof parsed.url === "string" ? parsed.url : "";
if (!url) {
  throw new Error("VIDEO.json holds no url");
}

copyFileSync(source, target);
console.log(`VIDEO.json -> ${target} (${url})`);
