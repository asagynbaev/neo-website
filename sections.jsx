// NEO Living Developments — sections (i18n + real data)

const Eyebrow = ({ children, dark }) => (
  <span className={`eyebrow ${dark ? "dark" : ""}`}>
    <span className="dot"></span>{children}
  </span>
);

// ── NAV ───────────────────────────────────────────────────────────────────────
const Nav = () => {
  const { t, lang, setLang } = useT();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : "dark"}`}>
      <NLLogo light={false} compact={false} />
      <div className="nav-links">
        <a href="#about">{t("nav_about")}</a>
        <a href="#expertise">{t("nav_expertise")}</a>
        <a href="#partnership">{t("nav_partnership")}</a>
        <a href="#portfolio">{t("nav_portfolio")}</a>
        <a href="#markets">{t("nav_markets")}</a>
        <a href="#sustainability">{t("nav_sustainability")}</a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div className="lang-switch" role="group" aria-label={t("lang_label")}>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          <span className="sep">/</span>
          <button className={lang === "sw" ? "active" : ""} onClick={() => setLang("sw")}>SW</button>
        </div>
        <a href="#contact" className="nav-cta">{t("nav_cta")}</a>
      </div>
    </nav>
  );
};

// ── HERO ──────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { t } = useT();
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-tower"></div>

      <div className="hero-inner">
        <div className="hero-meta" style={{ marginBottom: "auto" }}>
          <div className="col">
            <strong>{t("hero_meta_l_top")}</strong>
            {t("hero_meta_l_bot")}
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <strong>{t("hero_meta_r_top")}</strong>
            {t("hero_meta_r_bot")}
          </div>
        </div>

        <div className="hero-headline">
          <h1>
            {t("hero_h1_a")}<br/>{t("hero_h1_b")}
            <span className="light">{t("hero_h1_sub")}</span>
          </h1>

          <div className="hero-sub">
            <p>{t("hero_lead")}</p>
            <div className="hero-cta">
              <a href="#partnership" className="btn">{t("hero_cta_primary")} <span className="arr">→</span></a>
              <a href="#portfolio" className="btn outline ghost-light">{t("hero_cta_secondary")}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="track">
          {Array(2).fill(0).map((_, k) => (
            <span key={k} style={{ display: "inline-flex", gap: 80 }}>
              <span>Kyrgyzstan</span><span>Kazakhstan</span><span>Uzbekistan</span><span>Türkiye</span>
              <span>UAE</span>
              <span>Premium</span><span>Comfort</span><span>Land-for-units</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── STATS ─────────────────────────────────────────────────────────────────────
const Stats = () => {
  const { t } = useT();
  const items = [
    { num: "25", unit: "+ years", label: t("stats_years") },
    { num: "2M", unit: "+ m²", label: t("stats_area") },
    { num: String(TOTAL_PROJECTS), unit: "projects", label: t("stats_projects") },
    { num: fmt(TOTALS.units), unit: "units", label: t("stats_units") },
  ];
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {items.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.num}<span className="unit">{s.unit}</span></div>
              <div className="label">{s.label}</div>
              {i === 2 && <div className="sublabel">{t("stats_projects_sub")}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── ABOUT ─────────────────────────────────────────────────────────────────────
const About = () => {
  const { t } = useT();
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="sec-head">
          <div className="left">
            <Eyebrow>{t("about_eyebrow")}</Eyebrow>
            <div className="num" style={{ marginTop: 32 }}>{t("section")} 01 / 07</div>
          </div>
          <h2 className="display-lg">{t("about_h")}</h2>
        </div>

        <div className="about-grid">
          <div className="copy">
            <p><strong>{t("about_p1_pre")}</strong>{t("about_p1_post")}</p>
            <p>{t("about_p2")}</p>
            <p style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}><span className="dot"></span>{t("about_vision_t")}</span>
              {t("about_vision_p")}
            </p>
            <p style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}><span className="dot"></span>{t("about_mission_t")}</span>
              {t("about_mission_p")}
            </p>
          </div>
          <div>
            <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", background: "var(--bone)" }}>
              <img src="assets/amanat.jpeg" alt="Amanat Residence" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span style={{ position: "absolute", left: 16, bottom: 16, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.95)", background: "rgba(0,0,0,0.5)", padding: "6px 10px", backdropFilter: "blur(4px)" }}>Amanat Residence · Flagship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── EXPERTISE ─────────────────────────────────────────────────────────────────
const Expertise = () => {
  const { t } = useT();
  const cards = [
    { n: "01", t: t("exp_1_t"), items: [t("exp_1_a"), t("exp_1_b"), t("exp_1_c")], icon: "◇" },
    { n: "02", t: t("exp_2_t"), items: [t("exp_2_a"), t("exp_2_b"), t("exp_2_c")], icon: "◈" },
    { n: "03", t: t("exp_3_t"), items: [t("exp_3_a"), t("exp_3_b"), t("exp_3_c")], icon: "△" },
    { n: "04", t: t("exp_4_t"), items: [t("exp_4_a"), t("exp_4_b"), t("exp_4_c")], icon: "⬡" },
  ];
  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <div className="sec-head">
          <div className="left">
            <Eyebrow>{t("exp_eyebrow")}</Eyebrow>
            <div className="num" style={{ marginTop: 32 }}>{t("section")} 02 / 07</div>
          </div>
          <h2 className="display-lg">{t("exp_h")}</h2>
        </div>
        <div className="exp-grid">
          {cards.map((c, i) => (
            <div className="exp-card" key={i}>
              <div className="num">{c.n}</div>
              <h3>{c.t}</h3>
              <ul>{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              <div className="icon" style={{ fontSize: 24, color: "var(--powder-deep)" }}>{c.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── PARTNERSHIP / LFU ─────────────────────────────────────────────────────────
const LandForUnits = () => {
  const { t } = useT();
  const [tab, setTab] = React.useState(0);
  const tabs = [
    { step: t("lfu_1_step"), title: t("lfu_1_title"), h: t("lfu_1_h"), body: t("lfu_1_body"),
      bullets: [t("lfu_1_b1"), t("lfu_1_b2"), t("lfu_1_b3"), t("lfu_1_b4"), t("lfu_1_b5")],
      input: "Land", process: "Develop · Build · Sell", out: "Share of units" },
    { step: t("lfu_2_step"), title: t("lfu_2_title"), h: t("lfu_2_h"), body: t("lfu_2_body"),
      bullets: [t("lfu_2_b1"), t("lfu_2_b2"), t("lfu_2_b3"), t("lfu_2_b4")],
      input: "Asset", process: "Manage · Deliver", out: "Completed asset" },
    { step: t("lfu_3_step"), title: t("lfu_3_title"), h: t("lfu_3_h"), body: t("lfu_3_body"),
      bullets: [t("lfu_3_b1"), t("lfu_3_b2"), t("lfu_3_b3"), t("lfu_3_b4")],
      input: "Capital", process: "Allocate · Report", out: "Project equity" },
  ];
  const cur = tabs[tab];

  return (
    <section className="lfu" id="partnership">
      <div className="container">
        <div className="lfu-head">
          <div>
            <Eyebrow dark>{t("lfu_eyebrow")}</Eyebrow>
            <div className="num" style={{ marginTop: 32, color: "rgba(255,255,255,0.5)" }}>{t("section")} 03 / 07</div>
          </div>
          <p>{t("lfu_intro")}</p>
        </div>

        <div className="lfu-tabs" role="tablist">
          {tabs.map((tb, i) => (
            <button key={i} className={`lfu-tab ${i === tab ? "active" : ""}`} onClick={() => setTab(i)} role="tab" aria-selected={i === tab}>
              <span className="step">{tb.step}</span>
              <span className="ttl">{tb.title}</span>
            </button>
          ))}
        </div>

        <div className="lfu-panel" key={tab}>
          <div>
            <h3>{cur.h}</h3>
            <p className="body" style={{ marginTop: 24 }}>{cur.body}</p>
            <ul className="lfu-bullets">
              {cur.bullets.map((b, i) => (
                <li key={i}>
                  <span className="b-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="b-text">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lfu-diagram" aria-hidden="true">
            <div className="dlabel">Flow · {cur.title}</div>
            <div className="dnodes">
              <div className="node"><span className="ntag">{t("flow_input")}</span><strong>{cur.input}</strong></div>
              <div className="node"><span className="ntag">{t("flow_platform")}</span><strong>NEO Living</strong></div>
              <div className="node"><span className="ntag">{t("flow_process")}</span><strong>{cur.process}</strong></div>
              <div className="node hi"><span className="ntag">{t("flow_return")}</span><strong>{cur.out}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── PORTFOLIO ─────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const { t } = useT();
  const [filter, setFilter] = React.useState("all");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cls.toLowerCase() === filter);
  const filtered = list.reduce((a, p) => ({ area: a.area + p.area, units: a.units + p.units, count: a.count + 1 }), { area: 0, units: 0, count: 0 });

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="sec-head">
          <div className="left">
            <Eyebrow>{t("pf_eyebrow")}</Eyebrow>
            <div className="num" style={{ marginTop: 32 }}>{t("section")} 04 / 07</div>
          </div>
          <h2 className="display-lg">{t("pf_h_pre")}2,000,000{t("pf_h_post")}{fmt(TOTALS.units)}{t("pf_h_units")}</h2>
        </div>

        <div className="pf-controls">
          <div className="pf-filters">
            {[{ k: "all", n: "All" }, { k: "premium", n: t("pf_class_p") }, { k: "comfort", n: t("pf_class_c") }].map(f => (
              <button key={f.k} className={`pf-chip ${filter === f.k ? "active" : ""}`} onClick={() => setFilter(f.k)}>{f.n}</button>
            ))}
          </div>
          <div className="pf-totals">
            <span><span className="lab">Showcased</span> <strong>{filtered.count} projects</strong></span>
            <span><span className="lab">Area</span> <strong>{fmt(filtered.area)} m²</strong></span>
            <span><span className="lab">Units</span> <strong>{fmt(filtered.units)}</strong></span>
          </div>
        </div>

        <div className="pf-grid">
          {list.map((p, i) => (
            <article className="pf-card" key={p.slug}>
              <div className="pf-img">
                <img src={p.img} alt={p.name} />
                {p.flag && <span className="pf-flag">{t("pf_flagship")}</span>}
                <span className="pf-cls" data-cls={p.cls}>{p.cls === "Premium" ? t("pf_class_p") : t("pf_class_c")}</span>
              </div>
              <div className="pf-body">
                <div className="pf-head">
                  <span className="pf-num">№ {String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.name}</h3>
                </div>
                <div className="pf-stats">
                  <div><span className="lab">m²</span><strong>{fmt(p.area)}</strong></div>
                  <div><span className="lab">{t("pf_col_units")}</span><strong>{fmt(p.units)}</strong></div>
                  <div><span className="lab">{t("pf_col_floors")}</span><strong>{p.floors}</strong></div>
                </div>
              </div>
            </article>
          ))}
          {filter === "all" && (
            <article className="pf-card pf-pipeline">
              <div className="pf-pipeline-inner">
                <span className="pf-num" style={{ color: "rgba(255,255,255,0.55)" }}>№ 13 — 25</span>
                <div className="pf-pipeline-num">+{PIPELINE_COUNT}</div>
                <h3>{t("pf_pipeline")}</h3>
                <p>{t("pf_pipeline_sub")}</p>
                <div className="pf-pipeline-rows" aria-hidden="true">
                  {Array.from({ length: PIPELINE_COUNT }).map((_, k) => (
                    <span key={k} className="pf-pipeline-row" style={{ animationDelay: `${k * 60}ms` }}></span>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

// ── MARKETS ───────────────────────────────────────────────────────────────────
const Markets = () => {
  const { t } = useT();
  return (
    <section className="markets" id="markets">
      <div className="container">
        <div className="sec-head">
          <div className="left">
            <Eyebrow>{t("mk_eyebrow")}</Eyebrow>
            <div className="num" style={{ marginTop: 32 }}>{t("section")} 05 / 07</div>
          </div>
          <h2 className="display-lg">{t("mk_h")}</h2>
        </div>
        <p className="lead" style={{ marginBottom: 40 }}>{t("mk_lead")}</p>
        <div className="geo-grid">
          {GEO.map((g, i) => (
            <div key={g.code} className={`geo ${g.role === "home" ? "home" : ""}`}>
              <div className="geo-code">{g.code}</div>
              <div className="geo-name">{g.name}</div>
              <div className="geo-role">{g.role === "home" ? t("mk_role_home") : t("mk_role_partner")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── SUSTAINABILITY ────────────────────────────────────────────────────────────
const Sustainability = () => {
  const { t } = useT();
  const [active, setActive] = React.useState(0);
  const pillars = [
    { code: "S1", tag: t("sus_s1_tag"), title: t("sus_s1_t"), lede: t("sus_s1_lede"),
      points: [t("sus_s1_p1"), t("sus_s1_p2"), t("sus_s1_p3"), t("sus_s1_p4")],
      kpis: [{ v: t("sus_s1_k1_v"), l: t("sus_s1_k1_l") }, { v: t("sus_s1_k2_v"), l: t("sus_s1_k2_l") }] },
    { code: "S2", tag: t("sus_s2_tag"), title: t("sus_s2_t"), lede: t("sus_s2_lede"),
      points: [t("sus_s2_p1"), t("sus_s2_p2"), t("sus_s2_p3"), t("sus_s2_p4")],
      kpis: [{ v: t("sus_s2_k1_v"), l: t("sus_s2_k1_l") }, { v: t("sus_s2_k2_v"), l: t("sus_s2_k2_l") }] },
    { code: "S3", tag: t("sus_s3_tag"), title: t("sus_s3_t"), lede: t("sus_s3_lede"),
      points: [t("sus_s3_p1"), t("sus_s3_p2"), t("sus_s3_p3"), t("sus_s3_p4")],
      kpis: [{ v: t("sus_s3_k1_v"), l: t("sus_s3_k1_l") }, { v: t("sus_s3_k2_v"), l: t("sus_s3_k2_l") }] },
    { code: "S4", tag: t("sus_s4_tag"), title: t("sus_s4_t"), lede: t("sus_s4_lede"),
      points: [t("sus_s4_p1"), t("sus_s4_p2"), t("sus_s4_p3"), t("sus_s4_p4")],
      kpis: [{ v: t("sus_s4_k1_v"), l: t("sus_s4_k1_l") }, { v: t("sus_s4_k2_v"), l: t("sus_s4_k2_l") }] },
  ];
  const cur = pillars[active];

  return (
    <section className="sustain" id="sustainability">
      <div className="container">
        <div className="sec-head">
          <div className="left">
            <Eyebrow>{t("sus_eyebrow")}</Eyebrow>
            <div className="num" style={{ marginTop: 32 }}>{t("section")} 06 / 07</div>
          </div>
          <h2 className="display-lg">{t("sus_h")}</h2>
        </div>

        <div className="sustain-grid">
          <aside className="sustain-rail">
            {pillars.map((p, i) => (
              <button key={i} className={`sustain-rail-item ${i === active ? "active" : ""}`} onClick={() => setActive(i)}>
                <span className="sr-code">{p.code}</span>
                <span className="sr-tag">{p.tag}</span>
                <span className="sr-arr">{i === active ? "●" : "○"}</span>
              </button>
            ))}
          </aside>

          <div className="sustain-panel" key={active + cur.tag}>
            <div className="sustain-panel-head">
              <span className="eyebrow"><span className="dot"></span>{cur.tag}</span>
              <h3 className="display-md" style={{ marginTop: 20, maxWidth: "20ch" }}>{cur.title}</h3>
              <p className="lead" style={{ marginTop: 24 }}>{cur.lede}</p>
            </div>
            <ul className="sustain-points">
              {cur.points.map((pt, i) => (
                <li key={i}>
                  <span className="sp-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="sp-text">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="sustain-kpis">
              {cur.kpis.map((k, i) => (
                <div className="skpi" key={i}>
                  <div className="skpi-v">{k.v}</div>
                  <div className="skpi-l">{k.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── CONTACT ───────────────────────────────────────────────────────────────────
const Contact = () => {
  const { t } = useT();
  const [form, setForm] = React.useState({ name: "", org: "", role: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = t("err_required");
    if (!form.message.trim() || form.message.trim().length < 10) next.message = t("err_msg");
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "c014c0eb-33b3-4781-86a7-f3f666ae8bce",
          subject: `New enquiry from ${form.name} — NEO Living`,
          from_name: "NEO Living website",
          name: form.name,
          organization: form.org || "—",
          role: form.role || "—",
          message: form.message
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "send failed");
      setSent(true);
    } catch (err) {
      setErrors({ submit: t("err_send") || "Could not send. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-head">
          <h2>{t("ct_h_a")}<span className="accent">{t("ct_h_b")}</span></h2>
          <p>{t("ct_lead")}</p>
        </div>

        {sent ? (
          <div style={{ border: "1px solid rgba(197,215,225,0.4)", padding: 60, textAlign: "center", background: "rgba(197,215,225,0.06)" }}>
            <Eyebrow dark>{t("ct_thx_eyebrow")}</Eyebrow>
            <h3 className="display-md" style={{ marginTop: 24, color: "white" }}>{t("ct_thx_h_pre")}{form.name.split(" ")[0]}.</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "50ch", margin: "16px auto 0" }}>
              {t("ct_thx_p_a")}{t("ct_thx_p_b")}
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className={`field ${errors.name ? "invalid" : ""}`} data-error={errors.name}>
              <label>{t("ct_field_name")}</label>
              <input value={form.name} onChange={set("name")} placeholder={t("ct_name_ph")} />
            </div>
            <div className="field">
              <label>{t("ct_field_org")}</label>
              <input value={form.org} onChange={set("org")} placeholder={t("ct_org_ph")} />
            </div>
            <div className="field">
              <label>{t("ct_field_role")}</label>
              <select value={form.role} onChange={set("role")}>
                <option value="">—</option>
                <option>{t("ct_role_landowner")}</option>
                <option>{t("ct_role_investor")}</option>
                <option>{t("ct_role_institution")}</option>
                <option>{t("ct_role_other")}</option>
              </select>
            </div>
            <div className={`field full ${errors.message ? "invalid" : ""}`} data-error={errors.message}>
              <label>{t("ct_field_msg")}</label>
              <textarea rows="3" value={form.message} onChange={set("message")} placeholder={t("ct_msg_ph")} />
            </div>
            <div className="form-foot" style={{ gridColumn: "1 / -1" }}>
              <span className="agree">{t("ct_agree")}</span>
              <button className="btn" type="submit" disabled={sending} style={{ background: "var(--powder)", color: "var(--ink)", borderColor: "var(--powder)", opacity: sending ? 0.6 : 1, cursor: sending ? "wait" : "pointer" }}>
                {sending ? "…" : t("ct_send")} <span className="arr">→</span>
              </button>
            </div>
            {errors.submit && (
              <div style={{ gridColumn: "1 / -1", color: "#ff6b6b", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>{errors.submit}</div>
            )}
          </form>
        )}

        <div className="contact-info">
          <div className="ci-item"><div className="label">{t("ct_office")}</div><div className="val">{t("ct_office_v").split("\n").map((l, i) => <div key={i}>{l}</div>)}</div></div>
          <div className="ci-item"><div className="label">{t("ct_segments")}</div><div className="val">{t("ct_segments_v").split("\n").map((l, i) => <div key={i}>{l}</div>)}</div></div>
          <div className="ci-item"><div className="label">{t("ct_coverage")}</div><div className="val">{t("ct_coverage_v").split("\n").map((l, i) => <div key={i}>{l}</div>)}</div></div>
          <div className="ci-item"><div className="label">{t("ct_response")}</div><div className="val">{t("ct_response_v").split("\n").map((l, i) => <div key={i}>{l}</div>)}</div></div>
        </div>
      </div>
    </section>
  );
};

// ── FOOTER ────────────────────────────────────────────────────────────────────
const Footer = () => {
  const { t } = useT();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <NLLogo light />
          <p style={{ marginTop: 24, fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: "40ch", lineHeight: 1.5 }}>{t("ft_about")}</p>
        </div>
        <div>
          <h5>{t("ft_h_platform")}</h5>
          <ul>
            <li>{t("nav_about")}</li>
            <li>{t("nav_expertise")}</li>
            <li>{t("nav_portfolio")}</li>
            <li>{t("nav_markets")}</li>
            <li>{t("nav_sustainability")}</li>
          </ul>
        </div>
        <div>
          <h5>{t("ft_h_partner")}</h5>
          <ul>
            <li>{t("ft_link_landowners")}</li>
            <li>{t("ft_link_investors")}</li>
            <li>{t("ft_link_institutions")}</li>
            <li>{t("ft_link_lfu")}</li>
          </ul>
        </div>
        <div>
          <h5>{t("ft_h_contact")}</h5>
          <ul>
            <li>Uganda</li>
            <li>Kampala</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t("ft_copy")}</span>
        <span className="meta"><span>Privacy</span><span>Terms</span><span>{t("ft_v")}</span></span>
      </div>
    </footer>
  );
};

Object.assign(window, { Hero, Stats, About, Expertise, LandForUnits, Portfolio, Markets, Sustainability, Contact, Footer, Nav, Eyebrow });
