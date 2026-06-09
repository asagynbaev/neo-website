// App entry — i18n provider + reveal observer

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
  const [lang, setLang] = React.useState("en");

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = React.useCallback((k) => {
    if (STRINGS[lang] && k in STRINGS[lang]) return STRINGS[lang][k];
    if (k in STRINGS.en) return STRINGS.en[k];
    return k;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
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
    </I18nContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
