// NEO Living Developments — projects data + helpers

const PROJECTS = [
  { slug: "amanat", name: "Amanat Residence", area: 84830, units: 1070, floors: 15, cls: "Premium", img: "assets/amanat.jpeg", flag: "Flagship" },
  { slug: "yuzh-ala-archa", name: "South Ala-Archa", area: 43779, units: 506, floors: 16, cls: "Premium", img: "assets/yuzh-ala-archa.jpeg", flag: "Flagship" },
  { slug: "the-garden", name: "The Garden", area: 26255, units: 314, floors: 15, cls: "Premium", img: "assets/the-garden.jpeg" },
  { slug: "venetsia", name: "Venezia", area: 17598, units: 222, floors: 14, cls: "Premium", img: "assets/venetsia.jpeg" },
  { slug: "riverside", name: "Riverside", area: 14980, units: 182, floors: 15, cls: "Premium", img: "assets/riverside.png" },
  { slug: "rabat", name: "Rabat", area: 14883, units: 168, floors: 16, cls: "Premium", img: "assets/rabat.png" },
  { slug: "vegas", name: "Vegas", area: 14568, units: 174, floors: 14, cls: "Comfort", img: "assets/vegas.jpeg" },
  { slug: "aman", name: "Aman", area: 14000, units: 204, floors: 18, cls: "Premium", img: "assets/aman.jpeg" },
  { slug: "central-park", name: "Central Park", area: 12989, units: 143, floors: 15, cls: "Premium", img: "assets/central-park.png" },
  { slug: "kosmos", name: "Cosmos", area: 10788, units: 189, floors: 12, cls: "Comfort", img: "assets/kosmos.jpeg" },
  { slug: "ala-archa", name: "Ala-Archa", area: 10622, units: 121, floors: 12, cls: "Comfort", img: "assets/ala-archa.jpeg" },
  { slug: "muras", name: "Muras", area: 5866, units: 91, floors: 10, cls: "Comfort", img: "assets/muras.jpeg" },
];

// Total platform footprint — 25 projects (12 delivered/showcased + 13 in pipeline)
const PIPELINE_COUNT = 13;
const TOTAL_PROJECTS = PROJECTS.length + PIPELINE_COUNT; // 25
const _delivered = PROJECTS.reduce((a, p) => ({ area: a.area + p.area, units: a.units + p.units, count: a.count + 1 }), { area: 0, units: 0, count: 0 });
const TOTALS = { ..._delivered, total: TOTAL_PROJECTS, pipeline: PIPELINE_COUNT };

const fmt = (n) => n.toLocaleString("en-US");

const GEO = [
  { code: "KG", name: "Kyrgyzstan", role: "home" },
  { code: "KZ", name: "Kazakhstan", role: "partner" },
  { code: "UZ", name: "Uzbekistan", role: "partner" },
  { code: "TR", name: "Türkiye", role: "partner" },
  { code: "AE", name: "UAE · Dubai", role: "partner" },
];

window.PROJECTS = PROJECTS;
window.TOTALS = TOTALS;
window.PIPELINE_COUNT = PIPELINE_COUNT;
window.TOTAL_PROJECTS = TOTAL_PROJECTS;
window.fmt = fmt;
window.GEO = GEO;
