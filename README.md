# makefun-x-reposts-02-entry

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/gemarizkyu/makefun-x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/gemarizkyu/makefun-x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Quote or reply to make.fun's newest posts on X with posts of your own, from
one public account — each post carrying make.fun (or @makefunai) and our play
code. The house reads each post's reposts, quotes and likes through
FxTwitter's public read: 2 points per repost, 2 per quote, 1 per like, summed
over all posts in `POSTS.json` (up to 15). The top 50 share $500 in USDC.

## The posts

`POST-DRAFTS.md` holds the drafted texts, one per make.fun pool post, with
the pool post each one answers. Post them from the one public X account
(a quote of, or a direct reply to, the make.fun post), then put each post's
address (`https://x.com/<handle>/status/<id>`) into `POSTS.json` and submit
again — the last submission before the deadline counts. Keep the posts up and
the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) just copies `POSTS.json` to the
output directory, where the gate reads it. Nothing the program writes about
the posts is scored.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yyra59b6&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
