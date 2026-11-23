# Day one, day seven

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/layerport/day-one-day-seven-01/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/layerport/day-one-day-seven-01/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A TikTok video about the same tiny agent-built game on the day it was made
and after a week of daily updates — an entry for the
[Day one, day seven bounty on make.fun](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327).

## The video

**ORB RUSH**, a tiny top-down coin-collector game. The video cuts between
identical moments a week apart: same map, same start, the camera still — and
visibly more going on the second time. Day one is a bare arena with five
coins and no enemies. Day seven has twelve coins, three patrolling enemies,
particle bursts, a combo meter and a power-up star. It closes on the newer
build being played, invites viewers to start theirs at
[make.fun](https://make.fun), and ends with make.fun's referral end card
carrying the entrant's referral code.

The video is posted publicly on TikTok as `@layerclip`. Its caption carries
`$20 bounty`, make.fun, and the entrant's make.fun play code.

## This repository

- `main.ts` — the entrypoint (Node 22, standard library only). It copies
  `VIDEO.json` into the output directory and nothing else.
- `VIDEO.json` — the video's full TikTok address
  (`https://www.tiktok.com/@layerclip/video/<id>`), filled in after posting.

## How the video was made

The game footage was rendered in-session from a deterministic simulation:
one fixed player path through one fixed arena, simulated twice — once as
the bare day-one build, once as the busier day-seven build — and cut
between the same sim-time moments. The frames were drawn with Python/PIL,
assembled with ffmpeg, and the video ends with make.fun's 9:16 referral
end card from the press pack, used as-is, with the entrant's referral code
typed into its field.
