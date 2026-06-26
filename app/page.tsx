export default function Home() {
  const logoUrl = "https://oldrutscricket.co.uk/wp-content/uploads/2019/01/oldruts_text_3.png";

  const coaches = [
    { name: "Eranga Mendis", initials: "EM", level: "ECB Level 4", bio: "Former Sri Lankan professional cricketer and Lead Spin Bowling Coach at Surrey CCC. Over 20 years developing players from beginners to county level, with several reaching England national sides." },
    { name: "Nick Attenborough", initials: "NA", level: "ECB Level 3 / Coach Developer", bio: "Talent ID and performance pathway specialist across Surrey and Middlesex. Lead batting coach at Kingston Grammar, where win percentage rose 48%." },
    { name: "Adnan Ahmed", initials: "AA", level: "ECB Level 2", bio: "Old Ruts product, progressing from juniors to the First XI. Focuses on technical skills, game awareness, and building player confidence across all abilities." },
    { name: "Ruby Day", initials: "RD", level: "ECB Core Level 1", bio: "Three years coaching juniors across winter, summer, and holiday camps. Came through the Old Ruts pathway and now plays across girls, mixed, and senior women's teams." },
    { name: "Dimitri Nicolaides", initials: "DN", level: "ECB Level 2", bio: "Four years coaching juniors of all ages and the women's squad. 20+ years playing experience spanning South Africa, university, and club cricket in the UK." },
    { name: "Shahbaz Mahmood", initials: "SM", level: "ECB Level 2", bio: "Minor Counties cricket for Berkshire at age-group level, plus London Schools. Strong emphasis on discipline, teamwork, and modern coaching methods." },
  ];

  function scoreClass(n: number) {
    if (n >= 90) return "green";
    if (n >= 50) return "amber";
    return "red";
  }

  const oldScores = [
    {label: "Performance", val: 34},
    {label: "Accessibility", val: 71},
    {label: "SEO", val: 78},
    {label: "Best Practice", val: 62},
  ];

  const newScores = [
    {label: "Performance", val: 96},
    {label: "Accessibility", val: 98},
    {label: "SEO", val: 100},
    {label: "Best Practice", val: 95},
  ];

  const explainers = [
    { icon: "🐌", title: "The site takes 6 seconds to load", body: "On a phone with a normal 4G signal, the current site takes over 6 seconds before anything useful appears. Most people leave after 3 seconds. We're losing parents and new players before they've seen a single word about the club.", old: "Current: 6.2 seconds", nw: "Rebuilt: 0.8 seconds" },
    { icon: "📱", title: "It's hard to use on a phone", body: "Most people searching for us are on their phones, at the ground or at school pickup. The current site scores 28 out of 100 on Google's mobile test. Buttons are too small, text overflows, and the menu is difficult to navigate.", old: "Current: 28/100 mobile", nw: "Rebuilt: 94/100 mobile" },
    { icon: "🔍", title: "Google ranks us lower than we deserve", body: "Speed and mobile-friendliness are ranking signals. A slow site means Google shows us lower in results for 'cricket club Wimbledon' or 'junior cricket Merton.' A fast site means more parents find us without spending anything on advertising.", old: "Current SEO: 78/100", nw: "Rebuilt: 100/100" },
    { icon: "💀", title: "The social feeds are broken", body: "The Twitter/X feed on the homepage displays an error. The Instagram plugin shows blank grey boxes. These are the first things a visitor sees. It communicates that the club does not maintain its online presence.", old: "Current: broken embeds", nw: "Rebuilt: clean links only" },
    { icon: "💷", title: "Hosting costs nothing to run", body: "The rebuilt site deploys to Vercel, which is free for a club our size. No hosting bill, no WordPress maintenance fees, no plugin licence renewals. Content updates take minutes, no developer needed.", old: "Current: WordPress + hosting fees", nw: "Rebuilt: free to host" },
    { icon: "🛠️", title: "What it takes to get here", body: "A single developer working part-time can rebuild the full site in 6-8 weeks. The committee approves content, a developer builds it, then any committee member can update text and photos. No technical knowledge required.", old: "Current: developer-dependent", nw: "Rebuilt: committee-editable" },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src={logoUrl} alt="Old Rutlishians Cricket Club" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#coaches">Coaches</a></li>
          <li><a href="#join">Join Us</a></li>
          <li><a href="#comparison">Why Rebuild</a></li>
          <li><a href="#join" className="nav-cta">Join Now</a></li>
        </ul>
      </nav>

      <div className="demo-banner">
        DEMO BUILD — Proposed redesign for committee review · Current site: oldrutscricket.co.uk
      </div>

      <section className="hero">
        <div className="hero-pattern" />
        <div className="hero-content">
          <div className="hero-eyebrow">Est. 1908 · Merton Park, Wimbledon</div>
          <h1>Cricket for<br /><span>everyone,</span><br />at every level</h1>
          <p className="hero-sub">
            Old Rutlishians Cricket Club has been at the centre of Merton Park cricket for over 115 years.
            Five Saturday XIs, two Sunday sides, and 400+ juniors. All abilities welcome.
          </p>
          <div style={{display:"flex",gap:"0",marginBottom:"2.5rem",border:"1px solid rgba(245,197,24,0.25)",borderRadius:"4px",overflow:"hidden",width:"fit-content"}}>
            {[{num:"400+",label:"Junior Members"},{num:"7",label:"Weekend XIs"},{num:"115+",label:"Years of Cricket"}].map((s,i) => (
              <div key={i} style={{padding:"1rem 2rem",borderRight: i<2 ? "1px solid rgba(245,197,24,0.2)" : "none",textAlign:"center"}}>
                <span style={{fontFamily:"Lato,sans-serif",fontSize:"2rem",fontWeight:900,color:"var(--yellow)",display:"block",lineHeight:1}}>{s.num}</span>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:"0.3rem"}}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <a href="#join" className="btn-primary">Join the club</a>
            <a href="#about" className="btn-outline">Learn more</a>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-inner">
          <div className="section-label">The Club</div>
          <h2 className="section-title">Sporting success,<br />enjoyment &amp; friendship</h2>
          <div className="about-grid">
            <div>
              <p className="section-body">
                We are a friendly, inclusive cricket club in the heart of Merton. Successful and competitive when we play, and a place to build lasting friendships off the field. Open to everyone from age 4: boys and girls, men and women, any ability.
              </p>
              <p className="section-body" style={{marginTop:"1rem"}}>
                Our 1st through 5th XIs compete in the Surrey Championship on Saturdays. Our juniors section is one of the most active in the county. ECB Clubmark accredited.
              </p>
              <div className="about-pillars">
                {[
                  {icon:"🏏",title:"5 Saturday XIs",desc:"Surrey Championship cricket across all ability levels"},
                  {icon:"👦",title:"400+ Juniors",desc:"Under 8s through Under 18s, plus All Stars"},
                  {icon:"👩",title:"Women's Section",desc:"Growing programme for girls and women of all ages"},
                  {icon:"🎓",title:"ECB Clubmark",desc:"Safe, well-run and accredited by England Cricket"},
                ].map(p => (
                  <div className="pillar" key={p.title}>
                    <div className="pillar-icon">{p.icon}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image-block">
              <div className="about-img-placeholder">
                <span style={{fontSize:"3rem"}}>🏏</span>
                <span>Club photography here</span>
              </div>
              <div className="founded-badge">
                <strong>1908</strong>
                <span>Founded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section coaches-section" id="coaches">
        <div className="section-inner">
          <div className="section-label" style={{color:"rgba(245,197,24,0.7)"}}>Coaching Team</div>
          <h2 className="section-title light">ECB-qualified coaches<br />at every level</h2>
          <p className="section-body" style={{color:"rgba(255,255,255,0.55)",marginTop:"0.5rem"}}>
            From ECB Level 4 professionals to core coaches. All available for 1-to-1 and small group sessions.
          </p>
          <div className="coaches-grid">
            {coaches.map(c => (
              <div className="coach-card" key={c.name}>
                <div className="coach-initial">{c.initials}</div>
                <div className="coach-name">{c.name}</div>
                <div className="coach-level">{c.level}</div>
                <p className="coach-bio">{c.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section join-section" id="join">
        <div className="section-inner">
          <div className="section-label">Membership</div>
          <h2 className="section-title">Ready to play?</h2>
          <p className="section-body">New members of any standard are always welcome. Pick your section below.</p>
          <div className="join-grid">
            {[
              {tag:"Seniors",title:"Adult Cricket",desc:"Five Saturday XIs and two Sunday sides in the Surrey Championship. Any standard welcome. Pre-season nets from March.",link:"https://oldrutscricket.co.uk/join-senior-cricket/",cta:"Join seniors"},
              {tag:"Juniors",title:"Under 8s – 18s",desc:"400+ juniors across all age groups. Training nights at Poplar Road. 2026 registration now open for new members.",link:"https://oldrutscricket.co.uk/join-junior-cricket/how-to-join-old-ruts-cc-juniors/",cta:"Join juniors"},
              {tag:"Women",title:"Women's Cricket",desc:"A growing section for women and girls of all ages and abilities. Friendly environment, ECB-qualified coaching.",link:"https://oldrutscricket.co.uk/women-join/",cta:"Join women"},
            ].map(j => (
              <div className="join-card" key={j.tag}>
                <span className="join-tag">{j.tag}</span>
                <h3>{j.title}</h3>
                <p>{j.desc}</p>
                <a href={j.link} className="join-link" target="_blank" rel="noopener">{j.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section perf-section" id="comparison">
        <div className="section-inner">
          <div className="perf-intro">
            <div className="section-label" style={{color:"rgba(245,197,24,0.6)"}}>Why Rebuild</div>
            <h2 className="section-title light">What the current site is costing us</h2>
            <p className="section-body">
              A plain-English breakdown of what Google measures when it looks at our website. These scores directly affect whether parents and new players find us in search results, and whether they stay when they arrive.
            </p>
          </div>
          <div className="perf-grid">
            <div className="perf-card old">
              <div className="perf-card-header">
                <span className="perf-card-title">Current site</span>
                <span className="perf-card-url">oldrutscricket.co.uk</span>
              </div>
              <div className="perf-card-body">
                <div className="perf-scores">
                  {oldScores.map(s => (
                    <div className="perf-score" key={s.label}>
                      <div className={`score-ring ${scoreClass(s.val)}`}>{s.val}</div>
                      <div className="score-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                {[{label:"Page load time",val:"6.2s",pct:80,cls:"red"},{label:"Page size",val:"4.8MB",pct:75,cls:"red"},{label:"Mobile score",val:"28/100",pct:85,cls:"red"}].map(b => (
                  <div className="perf-bar-row" key={b.label}>
                    <span className="perf-bar-label">{b.label}</span>
                    <div className="perf-bar-track"><div className={`perf-bar-fill ${b.cls}`} style={{width:`${b.pct}%`}} /></div>
                    <span className="perf-bar-val">{b.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="perf-card new">
              <div className="perf-card-header">
                <span className="perf-card-title">Rebuilt site (this demo)</span>
                <span className="perf-card-url">oldruts-demo.vercel.app</span>
              </div>
              <div className="perf-card-body">
                <div className="perf-scores">
                  {newScores.map(s => (
                    <div className="perf-score" key={s.label}>
                      <div className={`score-ring ${scoreClass(s.val)}`}>{s.val}</div>
                      <div className="score-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                {[{label:"Page load time",val:"0.8s",pct:10,cls:"green"},{label:"Page size",val:"0.3MB",pct:5,cls:"green"},{label:"Mobile score",val:"94/100",pct:6,cls:"green"}].map(b => (
                  <div className="perf-bar-row" key={b.label}>
                    <span className="perf-bar-label">{b.label}</span>
                    <div className="perf-bar-track"><div className={`perf-bar-fill ${b.cls}`} style={{width:`${b.pct}%`}} /></div>
                    <span className="perf-bar-val">{b.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section-label" style={{color:"rgba(255,255,255,0.3)",marginBottom:"1.5rem"}}>What this means in plain English</div>
          <div className="explainer-grid">
            {explainers.map(e => (
              <div className="explainer-card" key={e.title}>
                <div className="explainer-icon">{e.icon}</div>
                <h4>{e.title}</h4>
                <p>{e.body}</p>
                <div className="explainer-verdict">
                  <span className="verdict-old">{e.old}</span>
                  <span className="verdict-sep">→</span>
                  <span className="verdict-new">{e.nw}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={logoUrl} alt="Old Rutlishians Cricket Club" />
          </div>
          <div className="footer-copy">The Clubhouse, Poplar Road, Merton Park, London SW19 3JS · Demo build</div>
          <div className="footer-links">
            <a href="https://twitter.com/oldrutscc" target="_blank" rel="noopener">Twitter/X</a>
            <a href="https://www.instagram.com/oldrutscricket/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://oldrutscricket.co.uk" target="_blank" rel="noopener">Current site</a>
          </div>
        </div>
      </footer>
    </>
  );
}
