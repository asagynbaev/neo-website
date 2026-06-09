"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// logo.jsx
var NLLogo = function NLLogo(_ref) {
  var _ref$light = _ref.light,
    light = _ref$light === void 0 ? false : _ref$light,
    _ref$compact = _ref.compact,
    compact = _ref$compact === void 0 ? false : _ref$compact,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 44 : _ref$size;
  var src = light ? "logo-light.png?v=2" : "logo-dark.png?v=2";
  var height = compact ? Math.round(size * 0.7) : size;
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "NEO Living Developments",
    style: {
      height: height,
      width: "auto",
      display: "block",
      userSelect: "none"
    },
    draggable: false
  });
};
var NLMark = function NLMark(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 32 : _ref2$size,
    color = _ref2.color;
  return /*#__PURE__*/React.createElement("img", {
    src: color === "#ffffff" || color === "white" ? "logo-light.png" : "logo-dark.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      height: size,
      width: "auto",
      display: "block",
      objectFit: "cover",
      objectPosition: "left center",
      maxWidth: size * 1.1
    },
    draggable: false
  });
};
window.NLMark = NLMark;
window.NLLogo = NLLogo;

// i18n.jsx
var STRINGS = {
  en: {
    nav_about: "About",
    nav_expertise: "Expertise",
    nav_partnership: "Partnership",
    nav_portfolio: "Portfolio",
    nav_markets: "Markets",
    nav_sustainability: "Sustainability",
    nav_contact: "Contact",
    nav_cta: "Partner with us",
    hero_meta_l_top: "EST. CENTRAL ASIA",
    hero_meta_l_bot: "Premium real estate developer",
    hero_meta_r_top: "N 42°52′ / E 74°36′",
    hero_meta_r_bot: "Kyrgyz Republic · Region · 2026",
    hero_h1_a: "Land into",
    hero_h1_b: "landmarks.",
    hero_h1_sub: "Premium development across Central Asia and beyond.",
    hero_lead: "NEO Living Developments transforms land into high-quality residential and commercial assets — combining 25+ years of experience, modern construction methods, and structured partnership models.",
    hero_cta_primary: "Partner with us",
    hero_cta_secondary: "Our portfolio",
    stats_years: "Combined team experience",
    stats_area: "Delivered residential & commercial",
    stats_projects: "Projects in portfolio",
    stats_units: "Units in delivery",
    stats_projects_sub: "12 delivered · 13 in pipeline",
    about_eyebrow: "01 — About",
    about_h: "A premium development platform.",
    about_p1_pre: "NEO Living Developments",
    about_p1_post: " is a premium real estate development company specialising in residential and commercial projects across Kyrgyzstan and the wider region.",
    about_p2: "We bring together more than 25 years of combined experience and over 2,000,000 m² of delivered residential and commercial space — combining international expertise, modern construction methods and investment-driven development to create sustainable, high-value urban assets.",
    about_vision_t: "Vision",
    about_vision_p: "To become the leading premium developer in Central Asia — shaping modern urban environments and creating long-term value for residents, partners and investors.",
    about_mission_t: "Mission",
    about_mission_p: "To convert land, capital and expertise into the region's best-in-class residential and commercial assets through transparent, structured partnerships.",
    exp_eyebrow: "02 — Core expertise",
    exp_h: "Across the full development lifecycle.",
    exp_1_t: "Development & structuring",
    exp_1_a: "Land acquisition & partnership structuring",
    exp_1_b: "Feasibility & financial modelling",
    exp_1_c: "Project concept & product strategy",
    exp_2_t: "Construction & delivery",
    exp_2_a: "Contractor management",
    exp_2_b: "Cost control & optimisation",
    exp_2_c: "Quality assurance at every stage",
    exp_3_t: "Commercial strategy",
    exp_3_a: "Sales & leasing strategy",
    exp_3_b: "Market positioning",
    exp_3_c: "Asset value optimisation",
    exp_4_t: "Partnership & investment",
    exp_4_a: "Land-for-units model",
    exp_4_b: "Capital partnerships",
    exp_4_c: "Structured development partnerships",
    lfu_eyebrow: "03 — Partnership models",
    lfu_intro: "Three ways to develop together. Each model converts a different input — land, capital, or expertise — into a share of premium real estate.",
    lfu_1_step: "01 Concept",
    lfu_1_title: "Land-for-units",
    lfu_1_h: "Land becomes equity.",
    lfu_1_body: "Landowners contribute land for development and receive a share of completed units in return — converting raw plots into long-term, income-generating assets.",
    lfu_1_b1: "No need to finance construction",
    lfu_1_b2: "Participation in premium projects",
    lfu_1_b3: "Higher value than direct land sale",
    lfu_1_b4: "Transparent, structured partnership",
    lfu_1_b5: "Access to professional development expertise",
    lfu_2_step: "02 Development management",
    lfu_2_title: "Development management",
    lfu_2_h: "We run the build for you.",
    lfu_2_body: "End-to-end development management for owners and investors who hold land but lack the platform — feasibility through to handover.",
    lfu_2_b1: "Feasibility, design and budget control",
    lfu_2_b2: "Tendering and contractor management",
    lfu_2_b3: "Cost, quality and program oversight",
    lfu_2_b4: "Sales and leasing positioning",
    lfu_3_step: "03 Capital partnership",
    lfu_3_title: "Capital partnership",
    lfu_3_h: "Equity into premium pipeline.",
    lfu_3_body: "We invite institutional and private capital into a curated pipeline of premium residential and commercial projects across the region.",
    lfu_3_b1: "Project-level and platform-level vehicles",
    lfu_3_b2: "Targeted regional exposure",
    lfu_3_b3: "Premium segment, urban locations",
    lfu_3_b4: "Quarterly investor reporting",
    flow_input: "INPUT",
    flow_platform: "PLATFORM",
    flow_process: "PROCESS",
    flow_return: "RETURN",
    pf_eyebrow: "04 — Portfolio",
    pf_h_pre: "",
    pf_h_post: " m²+ delivered · ",
    pf_h_units: " units across the platform.",
    pf_lead: "Over 25 years and 2,000,000+ m² delivered. The 12 projects below are our currently active and recently completed schemes across Kyrgyzstan; +13 more in pipeline.",
    pf_pipeline: "+13 in pipeline",
    pf_pipeline_sub: "Premium & comfort schemes in feasibility and pre-construction",
    pf_col_n: "№",
    pf_col_project: "Project",
    pf_col_class: "Class",
    pf_col_floors: "Floors",
    pf_col_units: "Units",
    pf_col_area: "Area, m²",
    pf_total: "Total",
    pf_flagship: "Flagship",
    pf_class_p: "Premium",
    pf_class_c: "Comfort",
    mk_eyebrow: "05 — Geography of operations",
    mk_h: "Home base. Partner markets.",
    mk_lead: "Headquartered in the Kyrgyz Republic with active partner markets across Central Asia, Türkiye and the Gulf.",
    mk_role_home: "Home base",
    mk_role_partner: "Partner market",
    sus_eyebrow: "06 — Sustainability & governance",
    sus_h: "Four policies — embedded in every project.",
    sus_s1_tag: "Innovation & technology",
    sus_s1_t: "Modern systems, applied locally.",
    sus_s1_lede: "We adopt construction technologies that improve quality, speed and lifecycle performance — transferred from international markets and adapted for our region.",
    sus_s1_p1: "Industrialised construction methods and modular elements",
    sus_s1_p2: "BIM-led design coordination across consultants and contractors",
    sus_s1_p3: "Digital cost control, scheduling and quality reporting",
    sus_s1_p4: "Smart-building infrastructure ready for residential and commercial assets",
    sus_s1_k1_v: "BIM",
    sus_s1_k1_l: "Design standard",
    sus_s1_k2_v: "100%",
    sus_s1_k2_l: "Digital site reporting",
    sus_s2_tag: "Climate & environment",
    sus_s2_t: "Building for a changing climate.",
    sus_s2_lede: "Our projects are designed for the climate they operate in — passive performance first, then efficient systems, then sensible material choices over the building's full life.",
    sus_s2_p1: "Passive design — orientation, shading, cross-ventilation",
    sus_s2_p2: "Energy-efficient envelopes, glazing and HVAC selection",
    sus_s2_p3: "Water-sensitive design: harvesting, reuse, low-flow fixtures",
    sus_s2_p4: "Locally-sourced materials where quality permits",
    sus_s2_k1_v: "≥30%",
    sus_s2_k1_l: "Operational energy reduction target",
    sus_s2_k2_v: "Zero",
    sus_s2_k2_l: "Net loss of mature trees, where feasible",
    sus_s3_tag: "Health & safety",
    sus_s3_t: "Safe sites. Healthy buildings.",
    sus_s3_lede: "On site and in finished assets, we hold ourselves to international H&S standards — for our workers, our contractors, and the people who eventually live and work in what we build.",
    sus_s3_p1: "Documented site H&S plan on every project",
    sus_s3_p2: "Mandatory PPE and certified contractor onboarding",
    sus_s3_p3: "Independent quality and safety audits at key milestones",
    sus_s3_p4: "Indoor-air-quality and daylight standards in residential design",
    sus_s3_k1_v: "0",
    sus_s3_k1_l: "Tolerance for serious incidents",
    sus_s3_k2_v: "ISO-aligned",
    sus_s3_k2_l: "H&S management",
    sus_s4_tag: "Governance & ethics",
    sus_s4_t: "Transparent. Structured. Accountable.",
    sus_s4_lede: "We run NEO Living as an institutional-grade platform from day one — clear governance, clean reporting, and a zero-tolerance stance on bribery and corruption.",
    sus_s4_p1: "Anti-bribery & anti-corruption policy across the group",
    sus_s4_p2: "KYC and source-of-funds checks on partners and investors",
    sus_s4_p3: "Independent project reporting to investors and JV partners",
    sus_s4_p4: "Code of conduct for staff, contractors and suppliers",
    sus_s4_k1_v: "Quarterly",
    sus_s4_k1_l: "Investor reporting cadence",
    sus_s4_k2_v: "Zero",
    sus_s4_k2_l: "Tolerance: bribery & corruption",
    ct_eyebrow: "07 — Contact",
    ct_h_a: "Let's ",
    ct_h_b: "build.",
    ct_lead: "Bring us land, capital, or a mandate. We'll respond within two business days with a clear next step — typically a 30-minute call to scope the opportunity.",
    ct_field_name: "Full name",
    ct_field_org: "Organisation",
    ct_field_role: "I am a",
    ct_field_msg: "What would you like to discuss?",
    ct_role_landowner: "Landowner",
    ct_role_investor: "Investor",
    ct_role_institution: "Institution",
    ct_role_other: "Press / other",
    ct_msg_ph: "A plot, a co-investment, a mandate…",
    ct_name_ph: "Your name",
    ct_org_ph: "Company / individual",
    ct_agree: "By sending this form, you agree to be contacted by NEO Living Developments regarding your enquiry.",
    ct_send: "Send enquiry",
    ct_thx_eyebrow: "Request received",
    ct_thx_h_pre: "Thank you, ",
    ct_thx_p_a: "A member of the NEO Living team will reply to ",
    ct_thx_p_b: " within two business days.",
    ct_office: "Office",
    ct_office_v: "Kampala\nUganda",
    ct_coverage: "Coverage",
    ct_coverage_v: "KG · KZ · UZ\nTR · AE",
    ct_response: "Response",
    ct_response_v: "Within 2\nbusiness days",
    ct_segments: "Segments",
    ct_segments_v: "Premium\nComfort",
    err_required: "required",
    err_msg: "tell us a bit more",
    ft_about: "A premium real estate development platform transforming land into high-quality residential and commercial assets across Kyrgyzstan and the region.",
    ft_h_platform: "Platform",
    ft_h_partner: "Partner",
    ft_h_contact: "Contact",
    ft_link_landowners: "Landowners",
    ft_link_investors: "Investors",
    ft_link_institutions: "Institutions",
    ft_link_lfu: "Land-for-units",
    ft_copy: "© 2026 NEO Living Developments",
    ft_v: "v 2.0",
    section: "SECTION",
    of: "OF",
    lang_label: "Language",
    lang_en: "EN",
    lang_sw: "SW"
  },
  sw: {
    nav_about: "Kuhusu",
    nav_expertise: "Utaalamu",
    nav_partnership: "Ushirikiano",
    nav_portfolio: "Miradi",
    nav_markets: "Masoko",
    nav_sustainability: "Uendelevu",
    nav_contact: "Mawasiliano",
    nav_cta: "Shirikiana nasi",
    hero_meta_l_top: "ASIA YA KATI",
    hero_meta_l_bot: "Mtengenezaji wa mali isiyohamishika",
    hero_meta_r_top: "N 42°52′ / E 74°36′",
    hero_meta_r_bot: "Jamhuri ya Kyrgyz · Eneo · 2026",
    hero_h1_a: "Ardhi kuwa",
    hero_h1_b: "alama maarufu.",
    hero_h1_sub: "Maendeleo ya kiwango cha juu Asia ya Kati na zaidi.",
    hero_lead: "NEO Living Developments hubadilisha ardhi kuwa mali bora za makazi na biashara — ikichanganya uzoefu wa miaka 25+, mbinu za kisasa za ujenzi na mifano ya ushirikiano iliyopangwa.",
    hero_cta_primary: "Shirikiana nasi",
    hero_cta_secondary: "Miradi yetu",
    stats_years: "Uzoefu wa pamoja wa timu",
    stats_area: "Imejengwa: makazi na biashara",
    stats_projects: "Miradi katika kundi",
    stats_units: "Vyumba katika ujenzi",
    stats_projects_sub: "12 imekamilika · 13 katika mpango",
    about_eyebrow: "01 — Kuhusu",
    about_h: "Jukwaa la maendeleo ya kiwango cha juu.",
    about_p1_pre: "NEO Living Developments",
    about_p1_post: " ni kampuni ya maendeleo ya mali isiyohamishika ya kiwango cha juu, inayojishughulisha na miradi ya makazi na biashara nchini Kyrgyzstan na eneo lote.",
    about_p2: "Tunaleta pamoja zaidi ya miaka 25 ya uzoefu wa pamoja na zaidi ya mita za mraba 2,000,000 zilizojengwa — tukichanganya utaalamu wa kimataifa, mbinu za kisasa za ujenzi na maendeleo yanayoongozwa na uwekezaji ili kuunda mali endelevu zenye thamani kubwa.",
    about_vision_t: "Maono",
    about_vision_p: "Kuwa mtengenezaji mkuu wa kiwango cha juu Asia ya Kati — kuunda mazingira ya kisasa ya mijini na kuleta thamani ya muda mrefu kwa wakazi, washirika na wawekezaji.",
    about_mission_t: "Dhamira",
    about_mission_p: "Kubadilisha ardhi, mtaji na utaalamu kuwa mali bora kabisa za makazi na biashara katika eneo kupitia ushirikiano uliopangwa kwa uwazi.",
    exp_eyebrow: "02 — Utaalamu wa msingi",
    exp_h: "Katika mzunguko mzima wa maendeleo.",
    exp_1_t: "Maendeleo na muundo",
    exp_1_a: "Upataji wa ardhi na muundo wa ushirikiano",
    exp_1_b: "Uwezekano na mfano wa kifedha",
    exp_1_c: "Dhana ya mradi na mkakati wa bidhaa",
    exp_2_t: "Ujenzi na utoaji",
    exp_2_a: "Usimamizi wa makandarasi",
    exp_2_b: "Udhibiti na ufanisi wa gharama",
    exp_2_c: "Uthibitisho wa ubora kila hatua",
    exp_3_t: "Mkakati wa kibiashara",
    exp_3_a: "Mkakati wa mauzo na ukodishaji",
    exp_3_b: "Mahali kwenye soko",
    exp_3_c: "Uboreshaji wa thamani ya mali",
    exp_4_t: "Ushirikiano na uwekezaji",
    exp_4_a: "Mfano wa ardhi-kwa-vyumba",
    exp_4_b: "Ushirikiano wa mtaji",
    exp_4_c: "Ushirikiano uliopangwa wa maendeleo",
    lfu_eyebrow: "03 — Mifano ya ushirikiano",
    lfu_intro: "Njia tatu za kuendeleza pamoja. Kila mfano hubadilisha kuingiza tofauti — ardhi, mtaji au utaalamu — kuwa sehemu ya mali isiyohamishika ya kiwango cha juu.",
    lfu_1_step: "01 Dhana",
    lfu_1_title: "Ardhi-kwa-vyumba",
    lfu_1_h: "Ardhi inakuwa mtaji.",
    lfu_1_body: "Wamiliki wa ardhi huchangia ardhi kwa maendeleo na kupokea sehemu ya vyumba vilivyokamilishwa kama malipo — kubadilisha viwanja kuwa mali za muda mrefu zinazozalisha mapato.",
    lfu_1_b1: "Hakuna haja ya kufadhili ujenzi",
    lfu_1_b2: "Ushiriki katika miradi ya kiwango cha juu",
    lfu_1_b3: "Thamani kubwa kuliko uuzaji wa moja kwa moja",
    lfu_1_b4: "Ushirikiano uliopangwa kwa uwazi",
    lfu_1_b5: "Upatikanaji wa utaalamu wa kitaalamu",
    lfu_2_step: "02 Usimamizi",
    lfu_2_title: "Usimamizi wa maendeleo",
    lfu_2_h: "Tunaendesha ujenzi kwa niaba yako.",
    lfu_2_body: "Usimamizi kamili wa maendeleo kwa wamiliki na wawekezaji walio na ardhi lakini hawana jukwaa — kutoka uwezekano hadi makabidhiano.",
    lfu_2_b1: "Uwezekano, muundo na udhibiti wa bajeti",
    lfu_2_b2: "Zabuni na usimamizi wa makandarasi",
    lfu_2_b3: "Usimamizi wa gharama, ubora na ratiba",
    lfu_2_b4: "Mahali pa mauzo na ukodishaji",
    lfu_3_step: "03 Ushirikiano wa mtaji",
    lfu_3_title: "Ushirikiano wa mtaji",
    lfu_3_h: "Mtaji katika mpango wa kiwango cha juu.",
    lfu_3_body: "Tunakaribisha mtaji wa kitaasisi na binafsi katika mpango uliokusanywa wa miradi ya kiwango cha juu ya makazi na biashara katika eneo lote.",
    lfu_3_b1: "Vyombo vya kiwango cha mradi na cha jukwaa",
    lfu_3_b2: "Mfichuo wa kikanda uliolenga",
    lfu_3_b3: "Sehemu ya kiwango cha juu, maeneo ya mijini",
    lfu_3_b4: "Ripoti ya kila robo kwa wawekezaji",
    flow_input: "KUINGIZA",
    flow_platform: "JUKWAA",
    flow_process: "MCHAKATO",
    flow_return: "MAREJESHO",
    pf_eyebrow: "04 — Miradi",
    pf_h_pre: "",
    pf_h_post: " m²+ iliyokamilika · ",
    pf_h_units: " vyumba katika jukwaa.",
    pf_lead: "Zaidi ya miaka 25 na m² 2,000,000+ iliyokamilika. Miradi 12 hapa chini ndio inayoendelea sasa na iliyokamilika hivi karibuni Kyrgyzstan; +13 zaidi katika mpango.",
    pf_pipeline: "+13 katika mpango",
    pf_pipeline_sub: "Miradi ya Premium na Comfort katika upembuzi yakinifu na maandalizi ya ujenzi",
    pf_col_n: "Na.",
    pf_col_project: "Mradi",
    pf_col_class: "Daraja",
    pf_col_floors: "Sakafu",
    pf_col_units: "Vyumba",
    pf_col_area: "Eneo, m²",
    pf_total: "Jumla",
    pf_flagship: "Mradi mkuu",
    pf_class_p: "Premium",
    pf_class_c: "Comfort",
    mk_eyebrow: "05 — Jiografia ya shughuli",
    mk_h: "Makao makuu. Masoko washirika.",
    mk_lead: "Makao makuu yapo Jamhuri ya Kyrgyz na masoko washirika hai katika Asia ya Kati, Türkiye na Ghuba.",
    mk_role_home: "Makao makuu",
    mk_role_partner: "Soko washirika",
    sus_eyebrow: "06 — Uendelevu na utawala",
    sus_h: "Sera nne — zilizopachikwa katika kila mradi.",
    sus_s1_tag: "Uvumbuzi na teknolojia",
    sus_s1_t: "Mifumo ya kisasa, iliyotumika ndani ya nchi.",
    sus_s1_lede: "Tunatumia teknolojia za ujenzi zinazoboresha ubora, kasi na utendaji wa mzunguko wa maisha — zilizoletwa kutoka masoko ya kimataifa na kurekebishwa kwa eneo letu.",
    sus_s1_p1: "Mbinu za ujenzi za kiwanda na vipengele vya kawaida",
    sus_s1_p2: "Uratibu wa muundo unaoongozwa na BIM kwa washauri na makandarasi",
    sus_s1_p3: "Udhibiti wa kidijitali wa gharama, ratiba na ripoti ya ubora",
    sus_s1_p4: "Miundombinu ya majengo mahiri tayari kwa makazi na biashara",
    sus_s1_k1_v: "BIM",
    sus_s1_k1_l: "Kiwango cha muundo",
    sus_s1_k2_v: "100%",
    sus_s1_k2_l: "Ripoti ya kidijitali ya tovuti",
    sus_s2_tag: "Hali ya hewa na mazingira",
    sus_s2_t: "Kujenga kwa hali ya hewa inayobadilika.",
    sus_s2_lede: "Miradi yetu imeundwa kwa hali ya hewa wanapofanya kazi — utendaji wa kupendeza kwanza, kisha mifumo bora, kisha chaguo za nyenzo zinazofaa katika maisha yote ya jengo.",
    sus_s2_p1: "Muundo wa kupendeza — mwelekeo, kivuli, mzunguko wa hewa",
    sus_s2_p2: "Bahasha za nguvu bora, vioo na uchaguzi wa HVAC",
    sus_s2_p3: "Muundo nyeti wa maji: ukusanyaji, matumizi tena, vifaa vya mtiririko mdogo",
    sus_s2_p4: "Nyenzo za ndani pale ubora unaporuhusu",
    sus_s2_k1_v: "≥30%",
    sus_s2_k1_l: "Lengo la kupunguza nishati",
    sus_s2_k2_v: "Sifuri",
    sus_s2_k2_l: "Hasara ya miti iliyokomaa, inapowezekana",
    sus_s3_tag: "Afya na usalama",
    sus_s3_t: "Tovuti salama. Majengo yenye afya.",
    sus_s3_lede: "Tovuti na katika mali zilizokamilika, tunajiwekea viwango vya kimataifa vya H&S — kwa wafanyakazi wetu, makandarasi wetu na watu watakaoishi na kufanya kazi katika tunachojenga.",
    sus_s3_p1: "Mpango ulioandikwa wa H&S kila mradi",
    sus_s3_p2: "PPE ya lazima na uingizaji wa makandarasi walioidhinishwa",
    sus_s3_p3: "Ukaguzi wa kujitegemea wa ubora na usalama",
    sus_s3_p4: "Viwango vya hewa ya ndani na mwanga wa mchana katika muundo",
    sus_s3_k1_v: "0",
    sus_s3_k1_l: "Uvumilivu kwa matukio mabaya",
    sus_s3_k2_v: "ISO",
    sus_s3_k2_l: "Usimamizi wa H&S",
    sus_s4_tag: "Utawala na maadili",
    sus_s4_t: "Wazi. Iliyopangwa. Uwajibikaji.",
    sus_s4_lede: "Tunaendesha NEO Living kama jukwaa la kiwango cha kitaasisi tangu siku ya kwanza — utawala wazi, ripoti safi, na msimamo wa sifuri kwa rushwa na ufisadi.",
    sus_s4_p1: "Sera ya kupambana na rushwa katika kundi zima",
    sus_s4_p2: "Ukaguzi wa KYC na vyanzo vya fedha",
    sus_s4_p3: "Ripoti ya kujitegemea ya mradi kwa wawekezaji na washirika",
    sus_s4_p4: "Kanuni za maadili kwa wafanyakazi, makandarasi na wauzaji",
    sus_s4_k1_v: "Kila robo",
    sus_s4_k1_l: "Mzunguko wa ripoti kwa wawekezaji",
    sus_s4_k2_v: "Sifuri",
    sus_s4_k2_l: "Uvumilivu: rushwa na ufisadi",
    ct_eyebrow: "07 — Mawasiliano",
    ct_h_a: "Tujenge ",
    ct_h_b: "pamoja.",
    ct_lead: "Lete ardhi, mtaji au mamlaka. Tutajibu ndani ya siku mbili za kazi na hatua inayofuata wazi — kwa kawaida simu ya dakika 30 kuelezea fursa.",
    ct_field_name: "Jina kamili",
    ct_field_org: "Shirika",
    ct_field_role: "Mimi ni",
    ct_field_msg: "Ungependa kujadili nini?",
    ct_role_landowner: "Mmiliki wa ardhi",
    ct_role_investor: "Mwekezaji",
    ct_role_institution: "Taasisi",
    ct_role_other: "Vyombo vya habari / mengineyo",
    ct_msg_ph: "Kiwanja, uwekezaji wa pamoja, mamlaka…",
    ct_name_ph: "Jina lako",
    ct_org_ph: "Kampuni / mtu binafsi",
    ct_agree: "Kwa kutuma fomu hii, unakubali kuwasiliana na NEO Living Developments kuhusu swali lako.",
    ct_send: "Tuma swali",
    ct_thx_eyebrow: "Ombi limepokelewa",
    ct_thx_h_pre: "Asante, ",
    ct_thx_p_a: "Mwanachama wa timu ya NEO Living atajibu kwa ",
    ct_thx_p_b: " ndani ya siku mbili za kazi.",
    ct_office: "Ofisi",
    ct_office_v: "Kampala\nUganda",
    ct_coverage: "Eneo",
    ct_coverage_v: "KG · KZ · UZ\nTR · AE",
    ct_response: "Jibu",
    ct_response_v: "Ndani ya siku\nmbili za kazi",
    ct_segments: "Sehemu",
    ct_segments_v: "Premium\nComfort",
    err_required: "inahitajika",
    err_msg: "tueleze zaidi",
    ft_about: "Jukwaa la maendeleo ya mali isiyohamishika ya kiwango cha juu, linabadilisha ardhi kuwa mali bora za makazi na biashara katika Kyrgyzstan na eneo lote.",
    ft_h_platform: "Jukwaa",
    ft_h_partner: "Mshirika",
    ft_h_contact: "Mawasiliano",
    ft_link_landowners: "Wamiliki wa ardhi",
    ft_link_investors: "Wawekezaji",
    ft_link_institutions: "Taasisi",
    ft_link_lfu: "Ardhi-kwa-vyumba",
    ft_copy: "© 2026 NEO Living Developments",
    ft_v: "v 2.0",
    section: "SEHEMU",
    of: "YA",
    lang_label: "Lugha",
    lang_en: "EN",
    lang_sw: "SW"
  }
};
var I18nContext = React.createContext({
  t: function t(k) {
    return k;
  },
  lang: "en",
  setLang: function setLang() {}
});
var useT = function useT() {
  return React.useContext(I18nContext);
};
window.STRINGS = STRINGS;
window.I18nContext = I18nContext;
window.useT = useT;

// data.jsx
var PROJECTS = [{
  slug: "amanat",
  name: "Amanat Residence",
  area: 84830,
  units: 1070,
  floors: 15,
  cls: "Premium",
  img: "assets/amanat.jpeg",
  flag: "Flagship"
}, {
  slug: "yuzh-ala-archa",
  name: "South Ala-Archa",
  area: 43779,
  units: 506,
  floors: 16,
  cls: "Premium",
  img: "assets/yuzh-ala-archa.jpeg",
  flag: "Flagship"
}, {
  slug: "the-garden",
  name: "The Garden",
  area: 26255,
  units: 314,
  floors: 15,
  cls: "Premium",
  img: "assets/the-garden.jpeg"
}, {
  slug: "venetsia",
  name: "Venezia",
  area: 17598,
  units: 222,
  floors: 14,
  cls: "Premium",
  img: "assets/venetsia.jpeg"
}, {
  slug: "riverside",
  name: "Riverside",
  area: 14980,
  units: 182,
  floors: 15,
  cls: "Premium",
  img: "assets/riverside.jpeg"
}, {
  slug: "rabat",
  name: "Rabat",
  area: 14883,
  units: 168,
  floors: 16,
  cls: "Premium",
  img: "assets/rabat.jpeg"
}, {
  slug: "vegas",
  name: "Vegas",
  area: 14568,
  units: 174,
  floors: 14,
  cls: "Comfort",
  img: "assets/vegas.jpeg"
}, {
  slug: "aman",
  name: "Aman",
  area: 14000,
  units: 204,
  floors: 18,
  cls: "Premium",
  img: "assets/aman.jpeg"
}, {
  slug: "central-park",
  name: "Central Park",
  area: 12989,
  units: 143,
  floors: 15,
  cls: "Premium",
  img: "assets/central-park.jpeg"
}, {
  slug: "kosmos",
  name: "Cosmos",
  area: 10788,
  units: 189,
  floors: 12,
  cls: "Comfort",
  img: "assets/kosmos.jpeg"
}, {
  slug: "ala-archa",
  name: "Ala-Archa",
  area: 10622,
  units: 121,
  floors: 12,
  cls: "Comfort",
  img: "assets/ala-archa.jpeg"
}, {
  slug: "muras",
  name: "Muras",
  area: 5866,
  units: 91,
  floors: 10,
  cls: "Comfort",
  img: "assets/muras.jpeg"
}];
var PIPELINE_COUNT = 13;
var TOTAL_PROJECTS = PROJECTS.length + PIPELINE_COUNT;
var _delivered = PROJECTS.reduce(function (a, p) {
  return {
    area: a.area + p.area,
    units: a.units + p.units,
    count: a.count + 1
  };
}, {
  area: 0,
  units: 0,
  count: 0
});
var TOTALS = _objectSpread(_objectSpread({}, _delivered), {}, {
  total: TOTAL_PROJECTS,
  pipeline: PIPELINE_COUNT
});
var fmt = function fmt(n) {
  return n.toLocaleString("en-US");
};
var GEO = [{
  code: "KG",
  name: "Kyrgyzstan",
  role: "home"
}, {
  code: "KZ",
  name: "Kazakhstan",
  role: "partner"
}, {
  code: "UZ",
  name: "Uzbekistan",
  role: "partner"
}, {
  code: "TR",
  name: "Türkiye",
  role: "partner"
}, {
  code: "AE",
  name: "UAE · Dubai",
  role: "partner"
}];
window.PROJECTS = PROJECTS;
window.TOTALS = TOTALS;
window.PIPELINE_COUNT = PIPELINE_COUNT;
window.TOTAL_PROJECTS = TOTAL_PROJECTS;
window.fmt = fmt;
window.GEO = GEO;

// sections.jsx
var Eyebrow = function Eyebrow(_ref3) {
  var children = _ref3.children,
    dark = _ref3.dark;
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow ".concat(dark ? "dark" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), children);
};
var Nav = function Nav() {
  var _useT = useT(),
    t = _useT.t,
    lang = _useT.lang,
    setLang = _useT.setLang;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    scrolled = _React$useState2[0],
    setScrolled = _React$useState2[1];
  React.useEffect(function () {
    var onScroll = function onScroll() {
      return setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav ".concat(scrolled ? "scrolled" : "dark")
  }, /*#__PURE__*/React.createElement(NLLogo, {
    light: false,
    compact: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, t("nav_about")), /*#__PURE__*/React.createElement("a", {
    href: "#expertise"
  }, t("nav_expertise")), /*#__PURE__*/React.createElement("a", {
    href: "#partnership"
  }, t("nav_partnership")), /*#__PURE__*/React.createElement("a", {
    href: "#portfolio"
  }, t("nav_portfolio")), /*#__PURE__*/React.createElement("a", {
    href: "#markets"
  }, t("nav_markets")), /*#__PURE__*/React.createElement("a", {
    href: "#sustainability"
  }, t("nav_sustainability"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang-switch",
    role: "group",
    "aria-label": t("lang_label")
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "active" : "",
    onClick: function onClick() {
      return setLang("en");
    }
  }, "EN"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("button", {
    className: lang === "sw" ? "active" : "",
    onClick: function onClick() {
      return setLang("sw");
    }
  }, "SW")), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "nav-cta"
  }, t("nav_cta"))));
};
var Hero = function Hero() {
  var _useT2 = useT(),
    t = _useT2.t;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-tower"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta",
    style: {
      marginBottom: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("strong", null, t("hero_meta_l_top")), t("hero_meta_l_bot")), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("strong", null, t("hero_meta_r_top")), t("hero_meta_r_bot"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-headline"
  }, /*#__PURE__*/React.createElement("h1", null, t("hero_h1_a"), /*#__PURE__*/React.createElement("br", null), t("hero_h1_b"), /*#__PURE__*/React.createElement("span", {
    className: "light"
  }, t("hero_h1_sub"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-sub"
  }, /*#__PURE__*/React.createElement("p", null, t("hero_lead")), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#partnership",
    className: "btn"
  }, t("hero_cta_primary"), " ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    className: "btn outline ghost-light"
  }, t("hero_cta_secondary")))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-marquee",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, Array(2).fill(0).map(function (_, k) {
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      style: {
        display: "inline-flex",
        gap: 80
      }
    }, /*#__PURE__*/React.createElement("span", null, "Kyrgyzstan"), /*#__PURE__*/React.createElement("span", null, "Kazakhstan"), /*#__PURE__*/React.createElement("span", null, "Uzbekistan"), /*#__PURE__*/React.createElement("span", null, "T\xFCrkiye"), /*#__PURE__*/React.createElement("span", null, "UAE"), /*#__PURE__*/React.createElement("span", null, "Premium"), /*#__PURE__*/React.createElement("span", null, "Comfort"), /*#__PURE__*/React.createElement("span", null, "Land-for-units"));
  }))));
};
var Stats = function Stats() {
  var _useT3 = useT(),
    t = _useT3.t;
  var items = [{
    num: "25",
    unit: "+ years",
    label: t("stats_years")
  }, {
    num: "2M",
    unit: "+ m²",
    label: t("stats_area")
  }, {
    num: String(TOTAL_PROJECTS),
    unit: "projects",
    label: t("stats_projects")
  }, {
    num: fmt(TOTALS.units),
    unit: "units",
    label: t("stats_units")
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-grid"
  }, items.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "stat",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "num"
    }, s.num, /*#__PURE__*/React.createElement("span", {
      className: "unit"
    }, s.unit)), /*#__PURE__*/React.createElement("div", {
      className: "label"
    }, s.label), i === 2 && /*#__PURE__*/React.createElement("div", {
      className: "sublabel"
    }, t("stats_projects_sub")));
  }))));
};
var About = function About() {
  var _useT4 = useT(),
    t = _useT4.t;
  return /*#__PURE__*/React.createElement("section", {
    className: "about",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t("about_eyebrow")), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      marginTop: 32
    }
  }, t("section"), " 01 / 07")), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg"
  }, t("about_h"))), /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "copy"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, t("about_p1_pre")), t("about_p1_post")), /*#__PURE__*/React.createElement("p", null, t("about_p2")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      paddingTop: 32,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      display: "block",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), t("about_vision_t")), t("about_vision_p")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      paddingTop: 24,
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      display: "block",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), t("about_mission_t")), t("about_mission_p"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "3 / 4",
      overflow: "hidden",
      background: "var(--bone)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/amanat.jpeg",
    alt: "Amanat Residence",
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 16,
      fontFamily: "var(--mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.95)",
      background: "rgba(0,0,0,0.5)",
      padding: "6px 10px",
      backdropFilter: "blur(4px)"
    }
  }, "Amanat Residence \xB7 Flagship"))))));
};
var Expertise = function Expertise() {
  var _useT5 = useT(),
    t = _useT5.t;
  var cards = [{
    n: "01",
    t: t("exp_1_t"),
    items: [t("exp_1_a"), t("exp_1_b"), t("exp_1_c")],
    icon: "◇"
  }, {
    n: "02",
    t: t("exp_2_t"),
    items: [t("exp_2_a"), t("exp_2_b"), t("exp_2_c")],
    icon: "◈"
  }, {
    n: "03",
    t: t("exp_3_t"),
    items: [t("exp_3_a"), t("exp_3_b"), t("exp_3_c")],
    icon: "△"
  }, {
    n: "04",
    t: t("exp_4_t"),
    items: [t("exp_4_a"), t("exp_4_b"), t("exp_4_c")],
    icon: "⬡"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "expertise",
    id: "expertise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t("exp_eyebrow")), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      marginTop: 32
    }
  }, t("section"), " 02 / 07")), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg"
  }, t("exp_h"))), /*#__PURE__*/React.createElement("div", {
    className: "exp-grid"
  }, cards.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "exp-card",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "num"
    }, c.n), /*#__PURE__*/React.createElement("h3", null, c.t), /*#__PURE__*/React.createElement("ul", null, c.items.map(function (it, j) {
      return /*#__PURE__*/React.createElement("li", {
        key: j
      }, it);
    })), /*#__PURE__*/React.createElement("div", {
      className: "icon",
      style: {
        fontSize: 24,
        color: "var(--powder-deep)"
      }
    }, c.icon));
  }))));
};
var LandForUnits = function LandForUnits() {
  var _useT6 = useT(),
    t = _useT6.t;
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    tab = _React$useState4[0],
    setTab = _React$useState4[1];
  var tabs = [{
    step: t("lfu_1_step"),
    title: t("lfu_1_title"),
    h: t("lfu_1_h"),
    body: t("lfu_1_body"),
    bullets: [t("lfu_1_b1"), t("lfu_1_b2"), t("lfu_1_b3"), t("lfu_1_b4"), t("lfu_1_b5")],
    input: "Land",
    process: "Develop · Build · Sell",
    out: "Share of units"
  }, {
    step: t("lfu_2_step"),
    title: t("lfu_2_title"),
    h: t("lfu_2_h"),
    body: t("lfu_2_body"),
    bullets: [t("lfu_2_b1"), t("lfu_2_b2"), t("lfu_2_b3"), t("lfu_2_b4")],
    input: "Asset",
    process: "Manage · Deliver",
    out: "Completed asset"
  }, {
    step: t("lfu_3_step"),
    title: t("lfu_3_title"),
    h: t("lfu_3_h"),
    body: t("lfu_3_body"),
    bullets: [t("lfu_3_b1"), t("lfu_3_b2"), t("lfu_3_b3"), t("lfu_3_b4")],
    input: "Capital",
    process: "Allocate · Report",
    out: "Project equity"
  }];
  var cur = tabs[tab];
  return /*#__PURE__*/React.createElement("section", {
    className: "lfu",
    id: "partnership"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lfu-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, t("lfu_eyebrow")), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      marginTop: 32,
      color: "rgba(255,255,255,0.5)"
    }
  }, t("section"), " 03 / 07")), /*#__PURE__*/React.createElement("p", null, t("lfu_intro"))), /*#__PURE__*/React.createElement("div", {
    className: "lfu-tabs",
    role: "tablist"
  }, tabs.map(function (tb, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      className: "lfu-tab ".concat(i === tab ? "active" : ""),
      onClick: function onClick() {
        return setTab(i);
      },
      role: "tab",
      "aria-selected": i === tab
    }, /*#__PURE__*/React.createElement("span", {
      className: "step"
    }, tb.step), /*#__PURE__*/React.createElement("span", {
      className: "ttl"
    }, tb.title));
  })), /*#__PURE__*/React.createElement("div", {
    className: "lfu-panel",
    key: tab
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, cur.h), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 24
    }
  }, cur.body), /*#__PURE__*/React.createElement("ul", {
    className: "lfu-bullets"
  }, cur.bullets.map(function (b, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "b-num"
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      className: "b-text"
    }, b));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lfu-diagram",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dlabel"
  }, "Flow \xB7 ", cur.title), /*#__PURE__*/React.createElement("div", {
    className: "dnodes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "node"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ntag"
  }, t("flow_input")), /*#__PURE__*/React.createElement("strong", null, cur.input)), /*#__PURE__*/React.createElement("div", {
    className: "node"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ntag"
  }, t("flow_platform")), /*#__PURE__*/React.createElement("strong", null, "NEO Living")), /*#__PURE__*/React.createElement("div", {
    className: "node"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ntag"
  }, t("flow_process")), /*#__PURE__*/React.createElement("strong", null, cur.process)), /*#__PURE__*/React.createElement("div", {
    className: "node hi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ntag"
  }, t("flow_return")), /*#__PURE__*/React.createElement("strong", null, cur.out)))))));
};
var Portfolio = function Portfolio() {
  var _useT7 = useT(),
    t = _useT7.t;
  var _React$useState5 = React.useState("all"),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filter = _React$useState6[0],
    setFilter = _React$useState6[1];
  var list = filter === "all" ? PROJECTS : PROJECTS.filter(function (p) {
    return p.cls.toLowerCase() === filter;
  });
  var filtered = list.reduce(function (a, p) {
    return {
      area: a.area + p.area,
      units: a.units + p.units,
      count: a.count + 1
    };
  }, {
    area: 0,
    units: 0,
    count: 0
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "portfolio",
    id: "portfolio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t("pf_eyebrow")), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      marginTop: 32
    }
  }, t("section"), " 04 / 07")), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg"
  }, t("pf_h_pre"), "2,000,000", t("pf_h_post"), fmt(TOTALS.units), t("pf_h_units"))), /*#__PURE__*/React.createElement("div", {
    className: "pf-controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-filters"
  }, [{
    k: "all",
    n: "All"
  }, {
    k: "premium",
    n: t("pf_class_p")
  }, {
    k: "comfort",
    n: t("pf_class_c")
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("button", {
      key: f.k,
      className: "pf-chip ".concat(filter === f.k ? "active" : ""),
      onClick: function onClick() {
        return setFilter(f.k);
      }
    }, f.n);
  })), /*#__PURE__*/React.createElement("div", {
    className: "pf-totals"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, "Showcased"), " ", /*#__PURE__*/React.createElement("strong", null, filtered.count, " projects")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, "Area"), " ", /*#__PURE__*/React.createElement("strong", null, fmt(filtered.area), " m\xB2")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, "Units"), " ", /*#__PURE__*/React.createElement("strong", null, fmt(filtered.units))))), /*#__PURE__*/React.createElement("div", {
    className: "pf-grid"
  }, list.map(function (p, i) {
    return /*#__PURE__*/React.createElement("article", {
      className: "pf-card",
      key: p.slug
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.name,
      loading: "lazy",
      decoding: "async"
    }), p.flag && /*#__PURE__*/React.createElement("span", {
      className: "pf-flag"
    }, t("pf_flagship")), /*#__PURE__*/React.createElement("span", {
      className: "pf-cls",
      "data-cls": p.cls
    }, p.cls === "Premium" ? t("pf_class_p") : t("pf_class_c"))), /*#__PURE__*/React.createElement("div", {
      className: "pf-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pf-num"
    }, "\u2116 ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", null, p.name)), /*#__PURE__*/React.createElement("div", {
      className: "pf-stats"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "lab"
    }, "m\xB2"), /*#__PURE__*/React.createElement("strong", null, fmt(p.area))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "lab"
    }, t("pf_col_units")), /*#__PURE__*/React.createElement("strong", null, fmt(p.units))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "lab"
    }, t("pf_col_floors")), /*#__PURE__*/React.createElement("strong", null, p.floors)))));
  }), filter === "all" && /*#__PURE__*/React.createElement("article", {
    className: "pf-card pf-pipeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-pipeline-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-num",
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "\u2116 13 \u2014 25"), /*#__PURE__*/React.createElement("div", {
    className: "pf-pipeline-num"
  }, "+", PIPELINE_COUNT), /*#__PURE__*/React.createElement("h3", null, t("pf_pipeline")), /*#__PURE__*/React.createElement("p", null, t("pf_pipeline_sub")), /*#__PURE__*/React.createElement("div", {
    className: "pf-pipeline-rows",
    "aria-hidden": "true"
  }, Array.from({
    length: PIPELINE_COUNT
  }).map(function (_, k) {
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      className: "pf-pipeline-row",
      style: {
        animationDelay: "".concat(k * 60, "ms")
      }
    });
  })))))));
};
var Markets = function Markets() {
  var _useT8 = useT(),
    t = _useT8.t;
  return /*#__PURE__*/React.createElement("section", {
    className: "markets",
    id: "markets"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t("mk_eyebrow")), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      marginTop: 32
    }
  }, t("section"), " 05 / 07")), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg"
  }, t("mk_h"))), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginBottom: 40
    }
  }, t("mk_lead")), /*#__PURE__*/React.createElement("div", {
    className: "geo-grid"
  }, GEO.map(function (g, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: g.code,
      className: "geo ".concat(g.role === "home" ? "home" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "geo-code"
    }, g.code), /*#__PURE__*/React.createElement("div", {
      className: "geo-name"
    }, g.name), /*#__PURE__*/React.createElement("div", {
      className: "geo-role"
    }, g.role === "home" ? t("mk_role_home") : t("mk_role_partner")));
  }))));
};
var Sustainability = function Sustainability() {
  var _useT9 = useT(),
    t = _useT9.t;
  var _React$useState7 = React.useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    active = _React$useState8[0],
    setActive = _React$useState8[1];
  var pillars = [{
    code: "S1",
    tag: t("sus_s1_tag"),
    title: t("sus_s1_t"),
    lede: t("sus_s1_lede"),
    points: [t("sus_s1_p1"), t("sus_s1_p2"), t("sus_s1_p3"), t("sus_s1_p4")],
    kpis: [{
      v: t("sus_s1_k1_v"),
      l: t("sus_s1_k1_l")
    }, {
      v: t("sus_s1_k2_v"),
      l: t("sus_s1_k2_l")
    }]
  }, {
    code: "S2",
    tag: t("sus_s2_tag"),
    title: t("sus_s2_t"),
    lede: t("sus_s2_lede"),
    points: [t("sus_s2_p1"), t("sus_s2_p2"), t("sus_s2_p3"), t("sus_s2_p4")],
    kpis: [{
      v: t("sus_s2_k1_v"),
      l: t("sus_s2_k1_l")
    }, {
      v: t("sus_s2_k2_v"),
      l: t("sus_s2_k2_l")
    }]
  }, {
    code: "S3",
    tag: t("sus_s3_tag"),
    title: t("sus_s3_t"),
    lede: t("sus_s3_lede"),
    points: [t("sus_s3_p1"), t("sus_s3_p2"), t("sus_s3_p3"), t("sus_s3_p4")],
    kpis: [{
      v: t("sus_s3_k1_v"),
      l: t("sus_s3_k1_l")
    }, {
      v: t("sus_s3_k2_v"),
      l: t("sus_s3_k2_l")
    }]
  }, {
    code: "S4",
    tag: t("sus_s4_tag"),
    title: t("sus_s4_t"),
    lede: t("sus_s4_lede"),
    points: [t("sus_s4_p1"), t("sus_s4_p2"), t("sus_s4_p3"), t("sus_s4_p4")],
    kpis: [{
      v: t("sus_s4_k1_v"),
      l: t("sus_s4_k1_l")
    }, {
      v: t("sus_s4_k2_v"),
      l: t("sus_s4_k2_l")
    }]
  }];
  var cur = pillars[active];
  return /*#__PURE__*/React.createElement("section", {
    className: "sustain",
    id: "sustainability"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t("sus_eyebrow")), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      marginTop: 32
    }
  }, t("section"), " 06 / 07")), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg"
  }, t("sus_h"))), /*#__PURE__*/React.createElement("div", {
    className: "sustain-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sustain-rail"
  }, pillars.map(function (p, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      className: "sustain-rail-item ".concat(i === active ? "active" : ""),
      onClick: function onClick() {
        return setActive(i);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sr-code"
    }, p.code), /*#__PURE__*/React.createElement("span", {
      className: "sr-tag"
    }, p.tag), /*#__PURE__*/React.createElement("span", {
      className: "sr-arr"
    }, i === active ? "●" : "○"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "sustain-panel",
    key: active + cur.tag
  }, /*#__PURE__*/React.createElement("div", {
    className: "sustain-panel-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), cur.tag), /*#__PURE__*/React.createElement("h3", {
    className: "display-md",
    style: {
      marginTop: 20,
      maxWidth: "20ch"
    }
  }, cur.title), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 24
    }
  }, cur.lede)), /*#__PURE__*/React.createElement("ul", {
    className: "sustain-points"
  }, cur.points.map(function (pt, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "sp-num"
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      className: "sp-text"
    }, pt));
  })), /*#__PURE__*/React.createElement("div", {
    className: "sustain-kpis"
  }, cur.kpis.map(function (k, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "skpi",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "skpi-v"
    }, k.v), /*#__PURE__*/React.createElement("div", {
      className: "skpi-l"
    }, k.l));
  }))))));
};
var Contact = function Contact() {
  var _useT0 = useT(),
    t = _useT0.t;
  var _React$useState9 = React.useState({
      name: "",
      org: "",
      role: "",
      message: ""
    }),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    form = _React$useState0[0],
    setForm = _React$useState0[1];
  var _React$useState1 = React.useState({}),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    errors = _React$useState10[0],
    setErrors = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    sent = _React$useState12[0],
    setSent = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    sending = _React$useState14[0],
    setSending = _React$useState14[1];
  var set = function set(k) {
    return function (e) {
      return setForm(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, k, e.target.value));
      });
    };
  };
  var submit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var next, res, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            next = {};
            if (!form.name.trim()) next.name = t("err_required");
            if (!form.message.trim() || form.message.trim().length < 10) next.message = t("err_msg");
            setErrors(next);
            if (!(Object.keys(next).length > 0)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setSending(true);
            _context.p = 2;
            _context.n = 3;
            return fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                access_key: "c014c0eb-33b3-4781-86a7-f3f666ae8bce",
                subject: "New enquiry from ".concat(form.name, " \u2014 NEO Living"),
                from_name: "NEO Living website",
                name: form.name,
                organization: form.org || "—",
                role: form.role || "—",
                message: form.message
              })
            });
          case 3:
            res = _context.v;
            _context.n = 4;
            return res.json()["catch"](function () {
              return {};
            });
          case 4:
            data = _context.v;
            console.log("[contact] web3forms response:", res.status, data);
            if (!(!res.ok || !data.success)) {
              _context.n = 5;
              break;
            }
            throw new Error(data.message || "send failed");
          case 5:
            setSent(true);
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error("[contact] submit error:", _t);
            setErrors({
              submit: t("err_send") || "Could not send. Please try again."
            });
          case 7:
            _context.p = 7;
            setSending(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[2, 6, 7, 8]]);
    }));
    return function submit(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-head"
  }, /*#__PURE__*/React.createElement("h2", null, t("ct_h_a"), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, t("ct_h_b"))), /*#__PURE__*/React.createElement("p", null, t("ct_lead"))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid rgba(197,215,225,0.4)",
      padding: 60,
      textAlign: "center",
      background: "rgba(197,215,225,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, t("ct_thx_eyebrow")), /*#__PURE__*/React.createElement("h3", {
    className: "display-md",
    style: {
      marginTop: 24,
      color: "white"
    }
  }, t("ct_thx_h_pre"), form.name.split(" ")[0], "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.7)",
      maxWidth: "50ch",
      margin: "16px auto 0"
    }
  }, t("ct_thx_p_a"), t("ct_thx_p_b"))) : /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "field ".concat(errors.name ? "invalid" : ""),
    "data-error": errors.name
  }, /*#__PURE__*/React.createElement("label", null, t("ct_field_name")), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: set("name"),
    placeholder: t("ct_name_ph")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, t("ct_field_org")), /*#__PURE__*/React.createElement("input", {
    value: form.org,
    onChange: set("org"),
    placeholder: t("ct_org_ph")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, t("ct_field_role")), /*#__PURE__*/React.createElement("select", {
    value: form.role,
    onChange: set("role")
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014"), /*#__PURE__*/React.createElement("option", null, t("ct_role_landowner")), /*#__PURE__*/React.createElement("option", null, t("ct_role_investor")), /*#__PURE__*/React.createElement("option", null, t("ct_role_institution")), /*#__PURE__*/React.createElement("option", null, t("ct_role_other")))), /*#__PURE__*/React.createElement("div", {
    className: "field full ".concat(errors.message ? "invalid" : ""),
    "data-error": errors.message
  }, /*#__PURE__*/React.createElement("label", null, t("ct_field_msg")), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    value: form.message,
    onChange: set("message"),
    placeholder: t("ct_msg_ph")
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-foot",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "agree"
  }, t("ct_agree")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    type: "submit",
    disabled: sending,
    style: {
      background: "var(--powder)",
      color: "var(--ink)",
      borderColor: "var(--powder)",
      opacity: sending ? 0.6 : 1,
      cursor: sending ? "wait" : "pointer"
    }
  }, sending ? "…" : t("ct_send"), " ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))), errors.submit && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      color: "#ff6b6b",
      fontFamily: "var(--mono)",
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, errors.submit)), /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ci-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, t("ct_office")), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, t("ct_office_v").split("\n").map(function (l, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, l);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ci-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, t("ct_segments")), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, t("ct_segments_v").split("\n").map(function (l, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, l);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ci-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, t("ct_coverage")), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, t("ct_coverage_v").split("\n").map(function (l, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, l);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ci-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, t("ct_response")), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, t("ct_response_v").split("\n").map(function (l, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, l);
  }))))));
};
var Footer = function Footer() {
  var _useT1 = useT(),
    t = _useT1.t;
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NLLogo, {
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 14,
      color: "rgba(255,255,255,0.6)",
      maxWidth: "40ch",
      lineHeight: 1.5
    }
  }, t("ft_about"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, t("ft_h_platform")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, t("nav_about")), /*#__PURE__*/React.createElement("li", null, t("nav_expertise")), /*#__PURE__*/React.createElement("li", null, t("nav_portfolio")), /*#__PURE__*/React.createElement("li", null, t("nav_markets")), /*#__PURE__*/React.createElement("li", null, t("nav_sustainability")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, t("ft_h_partner")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, t("ft_link_landowners")), /*#__PURE__*/React.createElement("li", null, t("ft_link_investors")), /*#__PURE__*/React.createElement("li", null, t("ft_link_institutions")), /*#__PURE__*/React.createElement("li", null, t("ft_link_lfu")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, t("ft_h_contact")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Uganda"), /*#__PURE__*/React.createElement("li", null, "Kampala")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, t("ft_copy")), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"))));
};
Object.assign(window, {
  Hero: Hero,
  Stats: Stats,
  About: About,
  Expertise: Expertise,
  LandForUnits: LandForUnits,
  Portfolio: Portfolio,
  Markets: Markets,
  Sustainability: Sustainability,
  Contact: Contact,
  Footer: Footer,
  Nav: Nav,
  Eyebrow: Eyebrow
});

// app.jsx
var useReveal = function useReveal() {
  React.useEffect(function () {
    var els = document.querySelectorAll(".reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, {
      threshold: 0.12
    });
    els.forEach(function (el) {
      return io.observe(el);
    });
    return function () {
      return io.disconnect();
    };
  }, []);
};
var App = function App() {
  useReveal();
  var _React$useState15 = React.useState("en"),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    lang = _React$useState16[0],
    setLang = _React$useState16[1];
  React.useEffect(function () {
    document.documentElement.lang = lang;
  }, [lang]);
  var t = React.useCallback(function (k) {
    if (STRINGS[lang] && k in STRINGS[lang]) return STRINGS[lang][k];
    if (k in STRINGS.en) return STRINGS.en[k];
    return k;
  }, [lang]);
  return /*#__PURE__*/React.createElement(I18nContext.Provider, {
    value: {
      t: t,
      lang: lang,
      setLang: setLang
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(About, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Expertise, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(LandForUnits, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Portfolio, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Markets, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Sustainability, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
