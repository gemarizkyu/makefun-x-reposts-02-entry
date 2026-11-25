// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry is the posts themselves: posts of our own on X, all from one
// public account, each quoting or replying directly to a different one of
// make.fun's newest posts on x.com/makefunai, with make.fun (or @makefunai)
// and our play code in each post's own words. POSTS.json names them, and the
// house reads their reposts, quotes and likes from X. Nothing this program
// writes about the posts is scored.
//
// Score: 2 points per repost, 2 per quote, 1 per like, summed over all the
// posts in POSTS.json (up to 15). The top 50 share $500 in USDC.
//
// This program only copies POSTS.json from the repository root to the
// grader's output directory, where the gate reads it. No network, no wall
// clock, no files outside the repository: the two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, "POSTS.json"), join(OUTPUT_DIR, "POSTS.json"));
} catch (err) {
  console.error(
    `POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
