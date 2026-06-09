import { IMG } from "./assets";

/**
 * Local logistics videos (in /public/videos, served at /videos/*).
 *
 * Only the 3 clips <= 18 MB are used, so every file stays under Cloudflare's
 * 25 MiB per-asset limit and deploys cleanly. (The 30 MB and 96 MB source
 * clips are kept out of /public — see /assets-raw — so they aren't bundled.)
 * Each slot carries a poster so sections look premium before the clip plays.
 */
export interface VideoSlot {
  src: string;
  poster: string;
  portrait?: boolean;
}

const V = "/videos";
const CLIP = {
  hd: `${V}/10472376-hd_1920_1080_25fps.mp4`, // 3.1 MB · 1080p landscape
  ocean: `${V}/13422071-uhd_3840_2160_30fps.mp4`, // 8.1 MB
  warehouse: `${V}/6079421-uhd_3840_2160_24fps.mp4`, // 18 MB
};

export const VID = {
  hero: { src: CLIP.hd, poster: IMG.portCranesDusk },
  logistics: { src: CLIP.ocean, poster: IMG.cargoShipSea },
  warehouse: { src: CLIP.warehouse, poster: IMG.warehouseAisle },
  shipping: { src: CLIP.ocean, poster: IMG.parcelsPile },
  footer: { src: CLIP.hd, poster: IMG.portNight },
} satisfies Record<string, VideoSlot>;

/** Cards for the "See BlackPalm In Motion" video carousel. */
export const MOTION_CLIPS: Array<VideoSlot & { title: string; tag: string }> = [
  { src: CLIP.hd, poster: IMG.portCranesDusk, title: "Port Operations", tag: "Miami Gateway" },
  { src: CLIP.ocean, poster: IMG.cargoShipSea, title: "Ocean Freight", tag: "Global Lanes" },
  { src: CLIP.warehouse, poster: IMG.warehouseAisle, title: "Warehouse & 3PL", tag: "Fort Lauderdale" },
  { src: CLIP.ocean, poster: IMG.parcelsPile, title: "Package Processing", tag: "Sort & Consolidate" },
  { src: CLIP.warehouse, poster: IMG.distributionCenter, title: "Distribution", tag: "On the Floor" },
];
