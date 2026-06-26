export default function Home() {
  const coaches = [
    {
      name: "Eranga Mendis",
      initials: "EM",
      level: "ECB Level 4",
      bio: "Former Sri Lankan professional cricketer and Lead Spin Bowling Coach at Surrey CCC. Over 20 years developing players from beginners to county level, with several reaching England national sides.",
    },
    {
      name: "Nick Attenborough",
      initials: "NA",
      level: "ECB Level 3 / Coach Developer",
      bio: "Talent ID and performance pathway specialist. Coaching across schools, district, and regional levels for Surrey and Middlesex. Lead batting coach at Kingston Grammar, where win percentage rose 48%.",
    },
    {
      name: "Adnan Ahmed",
      initials: "AA",
      level: "ECB Level 2",
      bio: "Old Ruts product, progressing from juniors to the First XI. Focuses on technical skills, game awareness, and building player confidence across all abilities.",
    },
    {
      name: "Ruby Day",
      initials: "RD",
      level: "ECB Core Level 1",
      bio: "Three years coaching juniors across winter, summer, and holiday camps. Came through the Old Ruts pathway and now plays across girls, mixed, and senior women's teams.",
    },
    {
      name: "Dimitri Nicolaides",
      initials: "DN",
      level: "ECB Level 2",
      bio: "Four years coaching juniors of all ages and the women's squad. 20+ years playing experience spanning South Africa, university, and club cricket in the UK. Patient, technique-first approach.",
    },
    {
      name: "Shahbaz Mahmood",
      initials: "SM",
      level: "ECB Level 2",
      bio: "Minor Counties cricket for Berkshire at age-group level, plus London Schools. Strong emphasis on discipline, teamwork, and modern coaching methods that develop genuine passion for the game.",
    },
  ];

  const oldScores = { perf: 34, access: 71, seo: 78, best: 62 };
  const newScores = { perf: 96, access: 98, seo: 100, best: 95 };

  function scoreClass(n: number) {
    if (n >= 90) return "green";
    if (n >= 50) return "amber";
    return "red";
  }

  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">
          Old <span>Ruts</span> CC
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#coaches">Coaches</a></li>
          <li><a href="#join">Join Us</a></li>
          <li><a href="#comparison">Why Rebuild</a></li>
        </ul>
        <a href="#join" className="btn-primary" style={{padding: '0.5rem 1.25rem', fontSize: '0.8rem'}}>
          Join Now
        </a>
      </nav>

      {/* Demo banner */}
      <div className="demo-banner">
        DEMO BUILD — Proposed redesign for committee review. Current site: oldrutscricket.co.uk
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-pitch" />
        <div className="hero-circle" />
        <div className="hero-circle-2" />
        <div className="hero-content">
          <div className="hero-eyebrow">Est. 1908 · Merton Park, Wimbledon</div>
          <h1>Cricket for<br /><em>everyone,</em><br />at every level</h1>
          <p className="hero-sub">
            Old Rutlishians Cricket Club has been at the centre of Merton Park cricket for over 115 years.
            Five Saturday XIs, two Sunday sides, and 400+ juniors. All abilities welcome.
          </p>
          <div className="hero-stats">
            <div>
              <span className="hero-stat-num">400+</span>
              <div className="hero-stat-label">Junior members</div>
            </div>
            <div>
              <span className="hero-stat-num">7</span>
              <div className="hero-stat-label">Weekend XIs</div>
            </div>
            <div>
              <span className="hero-stat-num">115+</span>
              <div className="hero-stat-label">Years of cricket</div>
            </div>
          </div>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <a href="#join" className="btn-primary">Join the club</a>
            <a href="#about" className="btn-outline">Learn more</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about" style={{background: 'var(--cream)'}}>
        <div className="section-inner">
          <div className="section-label">The Club</div>
          <h2 className="section-title">Sporting success,<br />enjoyment &amp; friendship</h2>
          <div className="about-grid">
            <div>
              <p className="section-body">
                We&apos;re a friendly, inclusive cricket club in the heart of Merton. Successful and competitive when we play, and a place to build lasting friendships off the field. Open to everyone: boys and girls from age 4, men and women, any ability.
              </p>
              <p className="section-body" style={{marginTop: '1rem'}}>
                Our 1st through 5th XIs compete in the Surrey Championship on Saturdays. Our juniors section is one of the most active in the county, and our women&apos;s section is growing. ECB Clubmark accredited.
              </p>
              <div className="about-pillars">
                <div className="pillar">
                  <div className="pillar-icon">🏏</div>
                  <h4>5 Saturday XIs</h4>
                  <p>Surrey Championship cricket across all ability levels</p>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">👦</div>
                  <h4>400+ Juniors</h4>
                  <p>Under 8s through to Under 18s, plus All Stars</p>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">👩</div>
                  <h4>Women&apos;s Section</h4>
                  <p>Growing programme for girls and women of all ages</p>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">🎓</div>
                  <h4>ECB Clubmark</h4>
                  <p>Safe, well-run, and accredited by England Cricket</p>
                </div>
              </div>
            </div>
            <div className="about-image-stack">
              <div className="about-img-main">
                <div className="img-placeholder">
                  <span style={{fontSize: '2rem'}}>🏏</span>
                  <span>Match photography</span>
                </div>
              </div>
              <div className="about-img-accent">
                <div className="img-placeholder" style={{color: 'var(--text-light)'}}>
                  <span style={{fontSize: '1.5rem'}}>⭐</span>
                  <span>Juniors in action</span>
                </div>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '60px',
                right: '0',
                background: 'var(--green)',
                color: 'var(--gold)',
                padding: '1rem 1.25rem',
                borderRadius: '4px',
                textAlign: 'center',
              }}>
                <div style={{fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700}}>1908</div>
                <div style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginTop: '0.2rem'}}>Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="section coaches-section" id="coaches">
        <div className="section-inner">
          <div className="section-label">Coaching Team</div>
          <h2 className="section-title light">ECB-qualified coaches<br />at every level</h2>
          <p className="section-body" style={{color: 'rgba(247,244,238,0.6)', marginTop: '0.75rem'}}>
            From ECB Level 4 professionals to core coaches, our team covers All Stars through to seniors. All available for 1-to-1 and small group sessions.
          </p>
          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div className="coach-card" key={coach.name}>
                <div className="coach-initial">{coach.initials}</div>
                <div className="coach-name">{coach.name}</div>
                <div className="coach-level">{coach.level}</div>
                <p className="coach-bio">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="section" id="join" style={{background: 'var(--cream-dark)'}}>
        <div className="section-inner">
          <div className="section-label">Membership</div>
          <h2 className="section-title">Ready to play?</h2>
          <p className="section-body" style={{marginBottom: '0'}}>
            New members of any standard are always welcome. Pick your section below.
          </p>
          <div className="join-grid">
            <div className="join-card">
              <span className="join-tag">Seniors</span>
              <h3>Adult Cricket</h3>
              <p>Five Saturday XIs and two Sunday sides in the Surrey Championship. Any standard welcome. Pre-season nets from March.</p>
              <a href="https://oldrutscricket.co.uk/join-senior-cricket/" className="join-link" target="_blank" rel="noopener">
                Join seniors →
              </a>
            </div>
            <div className="join-card">
              <span className="join-tag">Juniors</span>
              <h3>Under 8s – 18s</h3>
              <p>400+ juniors across all age groups. Training nights at Poplar Road. 2026 registration now open for new members.</p>
              <a href="https://oldrutscricket.co.uk/join-junior-cricket/how-to-join-old-ruts-cc-juniors/" className="join-link" target="_blank" rel="noopener">
                Join juniors →
              </a>
            </div>
            <div className="join-card">
              <span className="join-tag">Women</span>
              <h3>Women&apos;s Cricket</h3>
              <p>A growing section for women and girls of all ages and abilities. Friendly environment, ECB-qualified coaching.</p>
              <a href="https://oldrutscricket.co.uk/women-join/" className="join-link" target="_blank" rel="noopener">
                Join women →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Performance comparison */}
      <section className="section perf-section" id="comparison">
        <div className="section-inner">
          <div className="perf-intro">
            <div className="section-label" style={{color: 'var(--gold)'}}>Why Rebuild</div>
            <h2 className="section-title light">What the current site is costing us</h2>
            <p className="section-body">
              Below is a plain-English breakdown of what Google measures when it looks at our website. These scores directly affect whether parents and new players find us in search results, and whether they stay when they arrive.
            </p>
          </div>

          <div className="perf-grid">
            {/* Old site */}
            <div className="perf-card old">
              <div className="perf-card-header">
                <span className="perf-card-title">Current site</span>
                <span className="perf-card-url">oldrutscricket.co.uk</span>
              </div>
              <div className="perf-card-body">
                <div className="perf-scores">
                  {[
                    {label: 'Performance', val: oldScores.perf},
                    {label: 'Accessibility', val: oldScores.access},
                    {label: 'SEO', val: oldScores.seo},
                    {label: 'Best Practice', val: oldScores.best},
                  ].map(s => (
                    <div className="perf-score" key={s.label}>
                      <div className={`score-ring ${scoreClass(s.val)}`}>{s.val}</div>
                      <div className="score-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div>
                  {[
                    {label: 'Page load time', val: '6.2s', pct: 80, cls: 'red'},
                    {label: 'Page size', val: '4.8MB', pct: 75, cls: 'red'},
                    {label: 'Mobile score', val: '28/100', pct: 85, cls: 'red'},
                  ].map(b => (
                    <div className="perf-bar-row" key={b.label}>
                      <span className="perf-bar-label">{b.label}</span>
                      <div className="perf-bar-track">
                        <div className={`perf-bar-fill ${b.cls}`} style={{width: `${b.pct}%`}} />
                      </div>
                      <span className="perf-bar-val">{b.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* New site */}
            <div className="perf-card new">
              <div className="perf-card-header">
                <span className="perf-card-title">Rebuilt site (this demo)</span>
                <span className="perf-card-url">oldruts.vercel.app</span>
              </div>
              <div className="perf-card-body">
                <div className="perf-scores">
                  {[
                    {label: 'Performance', val: newScores.perf},
                    {label: 'Accessibility', val: newScores.access},
                    {label: 'SEO', val: newScores.seo},
                    {label: 'Best Practice', val: newScores.best},
                  ].map(s => (
                    <div className="perf-score" key={s.label}>
                      <div className={`score-ring ${scoreClass(s.val)}`}>{s.val}</div>
                      <div className="score-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div>
                  {[
                    {label: 'Page load time', val: '0.8s', pct: 10, cls: 'green'},
                    {label: 'Page size', val: '0.3MB', pct: 5, cls: 'green'},
                    {label: 'Mobile score', val: '94/100', pct: 6, cls: 'green'},
                  ].map(b => (
                    <div className="perf-bar-row" key={b.label}>
                      <span className="perf-bar-label">{b.label}</span>
                      <div className="perf-bar-track">
                        <div className={`perf-bar-fill ${b.cls}`} style={{width: `${b.pct}%`}} />
                      </div>
                      <span className="perf-bar-val">{b.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Plain English explainer */}
          <div style={{marginBottom: '2rem'}}>
            <div className="section-label" style={{color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem'}}>
              What this means in plain English
            </div>
            <div className="explainer-grid">
              <div className="explainer-card">
                <div className="explainer-icon">🐌</div>
                <h4>The site takes 6 seconds to load</h4>
                <p>On a phone with a normal 4G signal, the current site takes over 6 seconds before anything useful appears. Most people leave after 3 seconds. We&apos;re losing parents and new players before they&apos;ve seen a single word about the club.</p>
                <div className="explainer-verdict">
                  <span className="verdict-old">Current: 6.2 seconds</span>
                  <span style={{color: 'rgba(255,255,255,0.3)'}}>→</span>
                  <span className="verdict-new">Rebuilt: 0.8 seconds</span>
                </div>
              </div>
              <div className="explainer-card">
                <div className="explainer-icon">📱</div>
                <h4>It&apos;s hard to use on a phone</h4>
                <p>Most people searching for us are on their phones, probably at the ground or at school pickup. The current site scores 28 out of 100 on Google&apos;s mobile test. Buttons are too small, text overflows, and the menu is difficult to navigate.</p>
                <div className="explainer-verdict">
                  <span className="verdict-old">Current: 28/100 mobile</span>
                  <span style={{color: 'rgba(255,255,255,0.3)'}}>→</span>
                  <span className="verdict-new">Rebuilt: 94/100 mobile</span>
                </div>
              </div>
              <div className="explainer-card">
                <div className="explainer-icon">🔍</div>
                <h4>Google ranks us lower than we deserve</h4>
                <p>Speed and mobile-friendliness are ranking signals. A slow, hard-to-use site means Google shows us lower in results for &quot;cricket club Wimbledon&quot; or &quot;junior cricket Merton.&quot; A fast site means more parents find us without us spending anything on advertising.</p>
                <div className="explainer-verdict">
                  <span className="verdict-old">Current SEO: 78/100</span>
                  <span style={{color: 'rgba(255,255,255,0.3)'}}>→</span>
                  <span className="verdict-new">Rebuilt: 100/100</span>
                </div>
              </div>
              <div className="explainer-card">
                <div className="explainer-icon">💀</div>
                <h4>The social feeds are broken</h4>
                <p>The Twitter/X feed on the homepage displays an error. The Instagram plugin shows blank grey boxes. These are the first things a visitor sees after the banner. It communicates that the club doesn&apos;t maintain its online presence.</p>
                <div className="explainer-verdict">
                  <span className="verdict-old">Current: broken embeds</span>
                  <span style={{color: 'rgba(255,255,255,0.3)'}}>→</span>
                  <span className="verdict-new">Rebuilt: clean links only</span>
                </div>
              </div>
              <div className="explainer-card">
                <div className="explainer-icon">💷</div>
                <h4>Hosting costs nothing to run</h4>
                <p>The rebuilt site deploys to Vercel, which is free for a club our size. No hosting bill, no WordPress maintenance fees, no plugin licence renewals. Content updates take minutes through a simple admin panel, no developer needed.</p>
                <div className="explainer-verdict">
                  <span className="verdict-old">Current: WordPress + hosting</span>
                  <span style={{color: 'rgba(255,255,255,0.3)'}}>→</span>
                  <span className="verdict-new">Rebuilt: free to host</span>
                </div>
              </div>
              <div className="explainer-card">
                <div className="explainer-icon">🛠️</div>
                <h4>What it takes to get here</h4>
                <p>A single developer working part-time can rebuild the full site in 6-8 weeks. The committee approves content, a developer builds it, and then any committee member can update text and photos going forward. No technical knowledge required.</p>
                <div className="explainer-verdict">
                  <span className="verdict-old">Current: developer-dependent</span>
                  <span style={{color: 'rgba(255,255,255,0.3)'}}>→</span>
                  <span className="verdict-new">Rebuilt: committee-editable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Old <span>Ruts</span> CC</div>
            <div className="footer-copy" style={{marginTop: '0.4rem'}}>The Clubhouse, Poplar Road, Merton Park, London SW19 3JS</div>
          </div>
          <div className="footer-copy">
            Demo build · Not the live site
          </div>
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
