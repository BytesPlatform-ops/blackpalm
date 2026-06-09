# BlackPalm — Local Video Assets

These clips are bundled and served at `/videos/*`. They power the homepage and
footer video sections. Each autoplays (muted, looping, inline) via `<LazyVideo>`
with a poster image fallback, lazy-loaded on scroll (the hero loads eagerly).

## Deployed videos (all under Cloudflare's 25 MiB/file limit)

| File                                  | Size   | Used for                                  |
|---------------------------------------|--------|-------------------------------------------|
| `10472376-hd_1920_1080_25fps.mp4`     | 3.1 MB | Hero background + footer background        |
| `13422071-uhd_3840_2160_30fps.mp4`    | 8.1 MB | Global-network band + "In Motion" carousel |
| `6079421-uhd_3840_2160_24fps.mp4`     | 18 MB  | Warehouse showcase + "In Motion" carousel  |

Slot → file mapping lives in [`src/lib/videos.ts`](../../src/lib/videos.ts).

## Excluded from the build

Two source clips exceed Cloudflare's 25 MiB per-file limit and are kept in
`/assets-raw/oversized-videos/` (gitignored, not bundled):

- `15187012-uhd_3840_2160_30fps.mp4` — 30 MB
- `15969742_2160_3840_30fps.mp4` — 96 MB (vertical)

To use them: compress to < 25 MB (e.g. `ffmpeg -i in.mp4 -vf scale=1920:-2 -crf 28 out.mp4`)
and drop the result here, **or** host them on Cloudflare R2 and reference the URL
in `src/lib/videos.ts`.
