/**
 * Curated logistics imagery (Unsplash CDN).
 * Every URL is rendered through <Img/> which shows a branded gradient
 * fallback on error, so a stale ID never produces a broken image.
 */

const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // Hero / cinematic
  portCranesDusk: U("1605745341112-85968b19335b"), // container port cranes
  containerYardAerial: U("1494412574643-ff11b0a5c1c3"), // stacked containers aerial
  cargoShipSea: U("1577416412292-747c6607f055"), // container ship at sea
  cargoShipPort: U("1605281317010-fe5ffe798166"), // ship docked
  truckHighway: U("1601584115197-04ecc0da31d7"), // freight truck highway
  planeCargo: U("1542296332-2e4473faf563"), // aircraft / air freight
  airCargoLoading: U("1474302770737-173ee21bab63"), // plane loading

  // Warehouse / 3PL
  warehouseAisle: U("1553413077-190dd305871c"), // warehouse racking aisle
  warehouseForklift: U("1586528116311-ad8dd3c8310d"), // forklift in warehouse
  warehouseWorker: U("1581091226825-a6a2a5aee158"), // worker tablet (generic ops)
  warehouseBoxes: U("1601598851547-4302969d0614"), // shelves of boxes
  distributionCenter: U("1566576912321-d58ddd7a6088"), // large distribution center
  inventoryScan: U("1620714223084-8fcacc6dfd8d"), // scanning parcel

  // People / support / team
  supportAgent: U("1521737604893-d14cc237f11d", 800), // team collaborating
  teamMeeting: U("1600880292203-757bb62b4baf", 800), // business meeting
  businessOwner: U("1556761175-b413da4baf72", 800), // person receiving package / office
  opsManager: U("1507003211169-0a1dd7228f2d", 600), // headshot-ish
  warehouseManager: U("1573497019940-1c28c88b4f3e", 600), // woman professional
  handshake: U("1573164574572-cb89e39749b4", 1200), // partnership handshake

  // Operations detail
  packageHandling: U("1566576721346-d4a3b4eaeb55"), // package boxes
  parcelDelivery: U("1607083206869-4c7672e72a8a"), // delivery courier
  customsDocs: U("1450101499163-c8848c66ca85", 1200), // paperwork / documents
  globalTrade: U("1488229297570-58520851e868"), // global / city trade
  forkliftLoadingTruck: U("1578575437130-527eed3abbec"), // loading truck dock
  craneContainer: U("1591768793355-74d04bb6608f"), // single container lifted

  // V3 — storefront-to-doorstep + journey + gallery
  ecommerce: U("1556742049-0cfed4f6a45d"), // wrapped parcels / retail
  parcelsPile: U("1607082348824-0a96f2a4b9da"), // pile of parcels
  clothingRack: U("1445205170230-053b83016050"), // apparel
  electronics: U("1498049794561-7780e7231661"), // electronics / gadgets
  laptopShopping: U("1556742502-ec7c0e9f34b1"), // online shopping
  gadgets: U("1505740420928-5e560c06d30e"), // headphones / tech
  boxesDoorstep: U("1601758228041-f3b2795255f1"), // boxes at door
  deliveryCourier: U("1586528116493-a029325540fa"), // courier handing parcel
  portNight: U("1494412519320-aa613dfb7738"), // port at night
  teamWarehouse: U("1521791136064-7986c2920216"), // team in warehouse
} as const;

export type ImgKey = keyof typeof IMG;

/** Avatar portraits for testimonials (verified Unsplash IDs). */
const A = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=160&h=160&q=80`;
export const AVATAR = {
  man1: A("1500648767791-00dcc994a43e"),
  woman1: A("1494790108377-be9c29b29330"),
  woman2: A("1438761681033-6461ffad8d80"),
  man2: A("1472099645785-5658abf4ff4e"),
  woman3: A("1544005313-94ddf0286df2"),
  man3: A("1506794778202-cad84cf45f1d"),
  woman4: A("1534528741775-53994a69daeb"),
  man4: A("1519085360753-af0119f7cbe7"),
  woman5: A("1487412720507-e7ab37603c6f"),
} as const;

/** Optional cinematic background video sources (progressive enhancement).
 *  Each has a poster fallback so the band always looks premium. */
export const VIDEO = {
  port: {
    src: "https://cdn.coverr.co/videos/coverr-containers-in-a-port-2284/1080p.mp4",
    poster: IMG.portCranesDusk,
  },
  warehouse: {
    src: "https://cdn.coverr.co/videos/coverr-warehouse-1572/1080p.mp4",
    poster: IMG.warehouseAisle,
  },
} as const;

/** Client / partner logo cloud — rendered as elegant text wordmarks
 *  (no external logo files, avoids trademark + broken-image risk). */
export const PARTNERS = [
  "MERIDIAN TRADE CO.",
  "ATLANTIC FREIGHTWORKS",
  "CARIBE IMPORTS",
  "NORTHSTAR SUPPLY",
  "PORTSIDE LOGISTICS",
  "VANGUARD GLOBAL",
  "HARBORLINE",
  "EVERGREEN DISTRIBUTORS",
] as const;
