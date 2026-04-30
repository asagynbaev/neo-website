// App entry — i18n provider + reveal observer + tweaks panel

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C5D7E1",
  "ink": "#000000",
  "marquee": true,
  "heroTreatment": "tower",
  "lang": "en"
}/*EDITMODE-END*/;

const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const App = () => {
  useReveal();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = React.useState(tweaks.lang || "en");

  React.useEffect(() => {
    document.documentElement.style.setProperty("--powder", tweaks.accent);
    document.documentElement.style.setProperty("--ink", tweaks.ink);
  }, [tweaks.accent, tweaks.ink]);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = React.useCallback((k) => {
    if (STRINGS[lang] && k in STRINGS[lang]) return STRINGS[lang][k];
    if (k in STRINGS.en) return STRINGS.en[k];
    return k;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ t, lang, setLang: (l) => { setLang(l); setTweak("lang", l); } }}>
      <Nav />
      <Hero />
      <Stats />
      <div className="reveal"><About /></div>
      <div className="reveal"><Expertise /></div>
      <div className="reveal"><LandForUnits /></div>
      <div className="reveal"><Portfolio /></div>
      <div className="reveal"><Markets /></div>
      <div className="reveal"><Sustainability /></div>
      <div className="reveal"><Contact /></div>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Language">
          <TweakRadio label="Site language" value={lang} onChange={(v) => { setLang(v); setTweak("lang", v); }}
            options={[{ label: "English", value: "en" }, { label: "Kiswahili", value: "sw" }]} />
        </TweakSection>
        <TweakSection title="Brand">
          <TweakColor label="Accent (powder)" value={tweaks.accent} onChange={(v) => setTweak("accent", v)} />
          <TweakColor label="Ink" value={tweaks.ink} onChange={(v) => setTweak("ink", v)} />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakRadio label="Hero treatment" value={tweaks.heroTreatment}
            onChange={(v) => {
              setTweak("heroTreatment", v);
              const tw = document.querySelector(".hero-tower");
              const g = document.querySelector(".hero-grid");
              if (!tw || !g) return;
              tw.style.display = v === "minimal" ? "none" : "block";
              g.style.opacity = v === "grid" ? "1" : v === "minimal" ? "0" : "0.6";
            }}
            options={[{ label: "Tower", value: "tower" }, { label: "Grid", value: "grid" }, { label: "Minimal", value: "minimal" }]} />
          <TweakToggle label="Marquee strip" value={tweaks.marquee}
            onChange={(v) => {
              setTweak("marquee", v);
              const m = document.querySelector(".hero-marquee");
              if (m) m.style.display = v ? "flex" : "none";
            }} />
        </TweakSection>
      </TweaksPanel>
    </I18nContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
