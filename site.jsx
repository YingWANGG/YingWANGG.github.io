// site.jsx — clean, compact, elegant academic personal site

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "typeSystem": "serif",
  "fontSize": 16,
  "background": "white",
  "accent": "#6078A8",
  "flagStyle": "filled",
  "tagPalette": "meadow",
  "yearPos": "outside",
  "density": "regular",
  "headshotPos": "right",
  "headshotShape": "circle",
  "showThumbs": true,
  "showFullVenue": true,
  "newsCount": 6,
  "authorStyle": "full"
}/*EDITMODE-END*/;

// ────────── Data ──────────
const PUBLICATIONS = [
  {
    key: "straightening",
    title: "Temporal Straightening for Latent Planning",
    authors: ["Ying Wang", "Oumayma Bounou", "Gaoyue Zhou", "Randall Balestriero", "Tim G. J. Rudner", "Yann LeCun", "Mengye Ren"],
    year: 2026,
    flag: "ICML",
    flagYear: 2026,
    flagTone: "icml",
    venueFull: "ICML 2026 & World Model Workshop @ Mila 2026 [Oral]",
    img: "assets/straightening.png",
    links: {
      pdf: "https://arxiv.org/pdf/2603.12231.pdf",
      arxiv: "https://arxiv.org/abs/2603.12231",
      site: "https://agenticlearning.ai/temporal-straightening/",
      code: "https://github.com/agentic-learning-ai-lab/temporal-straightening",
    },
  },
  {
    key: "icc",
    title: "In-Context Clustering with Large Language Models",
    authors: ["Ying Wang", "Mengye Ren", "Andrew Gordon Wilson"],
    year: 2025,
    flag: "Preprint",
    flagYear: 2025,
    flagTone: "preprint",
    venueFull: "",
    img: "assets/icc.png",
    links: {
      pdf: "https://arxiv.org/pdf/2510.08466.pdf",
      site: "https://agenticlearning.ai/icc/",
      code: "https://github.com/Agentic-Learning-AI-Lab/icc",
    },
  },
  {
    key: "lifelong",
    title: "LifelongMemory: Leveraging LLMs for Answering Queries in Long-form Egocentric Videos",
    authors: ["Ying Wang", "Yanlai Yang", "Mengye Ren"],
    year: 2023,
    flag: "CVPRW",
    flagYear: 2024,
    flagTone: "cvpr",
    venueFull: "3rd Place Award in Ego4D NLQ Challenge at CVPR 2023 & 3rd Place Award in Ego4D EgoSchema Challenge at CVPR 2024",
    img: "assets/lifelongmemory.png",
    links: {
      pdf: "https://arxiv.org/pdf/2312.05269.pdf",
      site: "https://lifelongmemory.github.io/",
      code: "https://github.com/Agentic-Learning-AI-Lab/lifelong-memory",
    },
  },
  {
    key: "m2ib",
    title: "Visual Explanations of Image-Text Representations via Multi-Modal Information Bottleneck Attribution",
    authors: ["Ying Wang", "Tim G. J. Rudner", "Andrew Gordon Wilson"],
    year: 2023,
    flag: "NeurIPS",
    flagYear: 2023,
    flagTone: "neurips",
    venueFull: "",
    img: "assets/m2ib.png",
    links: {
      pdf: "https://openreview.net/pdf?id=ECvtxmVP0x",
      code: "https://github.com/YingWANGG/M2IB/tree/main",
    },
  },
  {
    key: "xmdetr",
    title: "Adapting Grounded Visual Question Answering Models to Low Resource Languages",
    authors: ["Ying Wang", "Jonas Pfeiffer", "Nicolas Carion", "Yann LeCun", "Aishwarya Kamath"],
    year: 2023,
    flag: "CVPRW",
    flagYear: 2023,
    flagTone: "cvpr",
    venueFull: "CVPR Multimodal Learning and Applications Workshop [Oral]",
    img: "assets/xmdetr.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2023W/MULA/html/Wang_Adapting_Grounded_Visual_Question_Answering_Models_to_Low_Resource_Languages_CVPRW_2023_paper.html",
      code: "https://github.com/YingWANGG/xMDETR",
    },
  },
];

const NEWS = [
  { date: "May 2026", body: <>Summer intern at <a href="https://amilabs.xyz/">AMI Labs</a> working on world models ❤️</> },
  { date: "May 2026", body: <><a href="https://arxiv.org/abs/2603.12231">Temporal Straightening for Latent Planning</a> accepted to <b>ICML 2026</b> — see you in Seoul.</> },
  { date: "Apr 2026", body: <>Lightning talk on <a href="https://arxiv.org/abs/2603.12231">Temporal Straightening</a> at the <a href="https://cs.nyu.edu/~fouhey/NYCVision2026/">NYC Computer Vision Day</a>.</> },
  { date: "Feb 2026", body: <><a href="https://arxiv.org/abs/2603.12231">Temporal Straightening</a> selected for an <b>oral</b> at the <a href="https://world-model-mila.github.io/">World Modeling Workshop</a>.</> },
  { date: "Dec 2025", body: <>Recognized as an <b>Outstanding Reviewer</b> for NeurIPS 2025.</> },
  { date: "Sep 2024", body: <>I started my PhD at NYU 💜💜💜</> },
  { date: "Jun 2024", body: <>3rd place, <a href="https://ego4d-data.org/docs/challenge/#episodic-memory">Ego4D EgoSchema challenge</a>.</> },
  { date: "Jun 2024", body: <>Summer at <b>Meta</b> (Video recommendation), Bellevue.</> },
  { date: "Oct 2023", body: <>Received Travel Award for NeurIPS 2023! See you in New Orleans ⚜️</> },
  { date: "Sep 2023", body: <><a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/339caf45a6fa281cae8adc6465343464-Abstract-Conference.html">Multi-Modal Information Bottleneck Attribution</a> accepted to <b>NeurIPS 2023</b>.</> },
  { date: "Jun 2023", body: <>3rd place, <a href="https://ego4d-data.org/docs/challenge/#episodic-memory">Ego4D NLQ challenge</a>.</> },
];

// ────────── Conference flag tones ──────────
const TAG_PALETTES = {
  purple: {
    icml:     { bg: "#B8C6E1", fg: "#3C4A75", ring: "#90A4CE" },
    neurips:  { bg: "#B8C6E1", fg: "#3C4A75", ring: "#90A4CE" },
    cvpr:     { bg: "#EBD0CE", fg: "#7A3F4A", ring: "#D6B0B6" },
  },
  rose: {
    icml:     { bg: "#F1D7D9", fg: "#7A3F4A", ring: "#DBB0B6" },
    neurips:  { bg: "#F1D7D9", fg: "#7A3F4A", ring: "#DBB0B6" },
    cvpr:     { bg: "#E4DECB", fg: "#6E5A28", ring: "#C8BFA0" },
  },
  ocean: {
    icml:     { bg: "#CDE0E1", fg: "#1F4D52", ring: "#A8C9CC" },
    neurips:  { bg: "#CDE0E1", fg: "#1F4D52", ring: "#A8C9CC" },
    cvpr:     { bg: "#F0E4CB", fg: "#7A5A1F", ring: "#DCC799" },
  },
  blush: {
    icml:     { bg: "#F2D9D4", fg: "#86443B", ring: "#DDB6AE" },
    neurips:  { bg: "#F2D9D4", fg: "#86443B", ring: "#DDB6AE" },
    cvpr:     { bg: "#DDD3E5", fg: "#4A3866", ring: "#BFB1D2" },
  },
  ink: {
    icml:     { bg: "#E0E0E0", fg: "#2A2A2A", ring: "#C8C8C8" },
    neurips:  { bg: "#E0E0E0", fg: "#2A2A2A", ring: "#C8C8C8" },
    cvpr:     { bg: "#EDE6DC", fg: "#5C463A", ring: "#D6C5B5" },
  },
  periwinkle: {
    icml:     { bg: "#D6DEEF", fg: "#3C4A75", ring: "#B4C0DC" },
    neurips:  { bg: "#D6DEEF", fg: "#3C4A75", ring: "#B4C0DC" },
    cvpr:     { bg: "#E6DDD2", fg: "#6E5A40", ring: "#CCBEA8" },
  },
  slate: {
    icml:     { bg: "#D4DCE6", fg: "#3A4858", ring: "#B2BECF" },
    neurips:  { bg: "#D4DCE6", fg: "#3A4858", ring: "#B2BECF" },
    cvpr:     { bg: "#E3D9CF", fg: "#5C4630", ring: "#C9BAA6" },
  },
  dusk: {
    icml:     { bg: "#C9D2E6", fg: "#3C4A75", ring: "#A3B0CF" },
    neurips:  { bg: "#C9D2E6", fg: "#3C4A75", ring: "#A3B0CF" },
    cvpr:     { bg: "#E3D0DA", fg: "#6E3A55", ring: "#CDA9BB" },
  },
  sea: {
    icml:     { bg: "#CFDAE6", fg: "#34506E", ring: "#A8BAD0" },
    neurips:  { bg: "#CFDAE6", fg: "#34506E", ring: "#A8BAD0" },
    cvpr:     { bg: "#EAD6CE", fg: "#8A4E3C", ring: "#D6B2A0" },
  },
  meadow: {
    icml:     { bg: "#CFDAE6", fg: "#34506E", ring: "#A8BAD0" },
    neurips:  { bg: "#CFDAE6", fg: "#34506E", ring: "#A8BAD0" },
    cvpr:     { bg: "#D6DED2", fg: "#4A5A3C", ring: "#B6C2AE" },
  },
  honey: {
    icml:     { bg: "#CFDAE6", fg: "#34506E", ring: "#A8BAD0" },
    neurips:  { bg: "#CFDAE6", fg: "#34506E", ring: "#A8BAD0" },
    cvpr:     { bg: "#EFE2BD", fg: "#75591F", ring: "#D9C68A" },
  },
  stone: {
    icml:     { bg: "#DEDCD4", fg: "#4A4639", ring: "#C5C0B2" },
    neurips:  { bg: "#DEDCD4", fg: "#4A4639", ring: "#C5C0B2" },
    cvpr:     { bg: "#D6DAE0", fg: "#3F4854", ring: "#B6BDC6" },
  },
};
const NEUTRAL_PREPRINT = { bg: "#ececec", fg: "#444", ring: "#d6d6d6" };

function Flag({ tone, style, palette, children }) {
  const pal = TAG_PALETTES[palette] || TAG_PALETTES.ink;
  const c = tone === "preprint" ? NEUTRAL_PREPRINT : (pal[tone] || pal.icml);
  const cls = `flag ${style || "filled"}`;
  return (
    <span className={cls} style={{
      "--flag-bg": c.bg,
      "--flag-fg": c.fg,
      "--flag-ring": c.ring,
    }}>{children}</span>
  );
}

const COAUTHOR_URLS = {
  "Aishwarya Kamath": "https://ashkamath.github.io/",
  "Nicolas Carion": "https://www.nicolascarion.com/",
  "Jonas Pfeiffer": "https://pfeiffer.ai/",
  "Oumayma Bounou": "https://oumayb.github.io/",
  "Gaoyue Zhou": "https://gaoyuezhou.github.io/",
  "Randall Balestriero": "https://randallbalestriero.github.io/",
  "Yann LeCun": "https://scholar.google.com/citations?user=WLN3QrAAAAAJ&hl=en",
  "Andrew Gordon Wilson": "https://cims.nyu.edu/~andrewgw/",
  "Tim G. J. Rudner": "https://timrudner.com/",
  "Mengye Ren": "https://mengyeren.com/",
  "Yanlai Yang": "https://yanlai00.github.io/",
};

// ────────── Authors ──────────
function AuthorName({ name }) {
  const url = COAUTHOR_URLS[name];
  return url ? <a href={url} target="_blank" rel="noreferrer" className="coauthor">{name}</a> : <>{name}</>;
}

function Authors({ list, style }) {
  const meIdx = list.findIndex(a => a.toLowerCase().startsWith("ying"));
  if (style === "compact" && list.length > 4) {
    return (
      <div className="authors">
        <AuthorName name={list[0]} />, <span className="me">Ying Wang</span>, … <AuthorName name={list[list.length - 1]} />
      </div>
    );
  }
  return (
    <div className="authors">
      {list.map((a, i) => (
        <React.Fragment key={i}>
          {i > 0 && ", "}
          {i === meIdx ? <span className="me">{a}</span> : <AuthorName name={a} />}
        </React.Fragment>
      ))}
    </div>
  );
}

// ────────── Publication item ──────────
function PubItem({ p, t }) {
  return (
    <li className="pub">
      {t.showThumbs && (
        <a className="pub-thumb square" href={p.links.site || p.links.pdf} target="_blank" rel="noreferrer">
          <img src={p.img} alt="" />
        </a>
      )}
      <div className="pub-body">
        <div className="pub-flagrow under">
          <Flag tone={p.flagTone} style={t.flagStyle} palette={t.tagPalette}>
            {p.flag}{t.yearPos === "inside" ? <> · {p.flagYear ?? p.year}</> : null}
          </Flag>
          {t.yearPos === "outside" && (
            <span className="pub-year">{p.flagYear ?? p.year}</span>
          )}
        </div>
        <h3 className="pub-title">
          <a href={p.links.site || p.links.pdf} target="_blank" rel="noreferrer">{p.title}</a>
        </h3>
        <Authors list={p.authors} style={t.authorStyle} />
        {t.showFullVenue && p.venueFull && <div className="pub-venue">{p.venueFull}</div>}
        <div className="pub-links">
          {p.links.pdf && <a href={p.links.pdf} target="_blank" rel="noreferrer">paper</a>}
          {p.links.arxiv && <a href={p.links.arxiv} target="_blank" rel="noreferrer">arxiv</a>}
          {p.links.site && <a href={p.links.site} target="_blank" rel="noreferrer">website</a>}
          {p.links.code && <a href={p.links.code} target="_blank" rel="noreferrer">code</a>}
        </div>
      </div>
    </li>
  );
}

// ────────── Backgrounds ──────────
const BG = {
  white:  { page: "#fefefe", surface: "#ffffff", ink: "#18181a", muted: "#67666a", line: "#e6e5e1" },
  paper:  { page: "#faf7f1", surface: "#fdfaf3", ink: "#1f1d1a", muted: "#6e6759", line: "#e3dccc" },
  cream:  { page: "#fbf8f2", surface: "#fefcf6", ink: "#1f1d1a", muted: "#6e6759", line: "#e8e2d0" },
  grey:   { page: "#f6f6f4", surface: "#fbfbf9", ink: "#1d1d1c", muted: "#67655e", line: "#e4e3df" },
  ink:    { page: "#161413", surface: "#1d1a18", ink: "#ece6da", muted: "#9a9080", line: "#332e29" },
};

const FONTS = {
  serif: { body: "'Source Serif 4','Source Serif Pro', Georgia, serif", head: "'Source Serif 4','Source Serif Pro', Georgia, serif", mono: "'JetBrains Mono', ui-monospace, monospace" },
  sans:  { body: "'Inter', system-ui, sans-serif", head: "'Inter', system-ui, sans-serif", mono: "'JetBrains Mono', ui-monospace, monospace" },
  mixed: { body: "'Inter', system-ui, sans-serif", head: "'Source Serif 4','Source Serif Pro', Georgia, serif", mono: "'JetBrains Mono', ui-monospace, monospace" },
};

const DENSITY = {
  compact:  { rhythm: 0.88, gap: 18 },
  regular:  { rhythm: 1.00, gap: 26 },
  spacious: { rhythm: 1.15, gap: 36 },
};

// ────────── App ──────────
function App() {
  const t = TWEAK_DEFAULTS;
  const bg = BG[t.background] || BG.white;
  const fonts = FONTS[t.typeSystem] || FONTS.serif;
  const d = DENSITY[t.density] || DENSITY.regular;
  const dark = t.background === "ink";

  const cssVars = {
    "--page": bg.page,
    "--surface": bg.surface,
    "--ink": bg.ink,
    "--muted": bg.muted,
    "--line": bg.line,
    "--accent": t.accent,
    "--font-body": fonts.body,
    "--font-head": fonts.head,
    "--font-mono": fonts.mono,
    "--fs": `${t.fontSize}px`,
    "--rhythm": d.rhythm,
    "--gap": `${d.gap}px`,
  };

  return (
    <div className={`site ${dark ? "dark" : ""}`} style={cssVars}>
      <main className="main">
        <header className="hero">
          <div className={`hero-grid pos-${t.headshotPos}`}>
            <div className="hero-text">
              <h1 className="name">Ying Wang</h1>
              <p className="role">PhD student · NYU Center for Data Science</p>
              <div className="bio">
                <p>
                  I'm a second-year PhD student at the <a href="https://wp.nyu.edu/cilvr/">CILVR Lab</a> working on <strong>world models</strong>, where I'm fortunate to be advised by Prof. <a href="https://mengyeren.com/">Mengye Ren</a> and Prof. <a href="http://yann.lecun.com/">Yann LeCun</a>.
                </p>
                <p>
                  Prior to starting my PhD, I earned an MS in Data Science at NYU as well and a BS in Computer Science, Statistics, and Finance at McGill University.
                </p>
              </div>
              <div className="contact">
                <a href="mailto:yw3076@nyu.edu">yw3076[at]nyu[dot]edu</a>
                <span className="sep">|</span>
                <a href="https://scholar.google.com/citations?user=5BN__1MAAAAJ&hl=en">Google Scholar</a>
                <span className="sep">|</span>
                <a href="https://x.com/yingwww_">X</a>
                <span className="sep">|</span>
                <a href="https://www.linkedin.com/in/ying-wang-90611714a/">LinkedIn</a>
                <span className="sep">|</span>
                <a href="https://github.com/YingWANGG">GitHub</a>
              </div>
            </div>
            <div className={`portrait shape-${t.headshotShape}`}>
              <img src="assets/headshot.jpg" alt="Ying Wang" />
            </div>
          </div>
        </header>

        <section className="section">
          <h2 className="sec-title">News</h2>
          <div className="news">
            {NEWS.slice(0, t.newsCount).map((n, i) => (
              <div key={i} className="news-row">
                <span className="news-date">{n.date}</span>
                <span className="news-body">{n.body}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="sec-title">Selected Publications</h2>
          <ul className="pubs">
            {PUBLICATIONS.map(p => <PubItem key={p.key} p={p} t={t} />)}
          </ul>
        </section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} Ying Wang</span>
          <span className="sep">·</span>
          <span>New York, NY</span>
        </footer>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
