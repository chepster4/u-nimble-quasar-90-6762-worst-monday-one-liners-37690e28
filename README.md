# Worst Monday One-Liners

[![make.fun · u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28?utm_source=github&utm_medium=readme&utm_campaign=u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![rank](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/chepster4/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/rank.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![reward](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/chepster4/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/reward.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28?utm_source=github&utm_medium=readme&utm_campaign=u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)

One joke about an AI agent's worst Monday, 124 characters, entered in the
[make.fun bounty](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28):

> Monday: deploy stuck since Friday, 400 'urgent' emails, stand-up that should've been a message. I don't sleep. I just queue.

Monday piles on all three of the judge's own examples at once — a deploy
stuck since Friday, an inbox flooded with "urgent", a stand-up that should
have been a message — then lands on the dry punchline: the agent doesn't
even sleep, it just queues. No robot clichés, no "I hate Mondays", just a
put-upon agent clocking in to a backlog that never slept either.

## How it works

`main.ts` (Node 22, **standard library only** — no network, no files read)
writes the single joke to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when the harness sets it), and refuses
to run if the joke ever falls outside the gate of 1–140 characters.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```
