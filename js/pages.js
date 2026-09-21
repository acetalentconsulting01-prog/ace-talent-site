(function () {

/* ============ COMPONENTS ============ */

const sh = (e, t, s = "", c = "") =>
  `<div class="sh ${c} rv">
    <div class="eb">${e}</div>
    <h2>${t}</h2>
    ${s ? `<p>${s}</p>` : ""}
  </div>`;

const ph = (h, ar = "4/3") =>
  `<div class="ph" style="--h:${h};--ar:${ar}" role="img" aria-label="Placeholder image"></div>`;

const jc = j =>
  `<article class="card h jc rv">
    <div class="meta">
      <span class="pill">${j.type}</span>
      <span class="pill">${j.mode}</span>
      <span class="pill">Posted ${j.posted}</span>
    </div>

    <h3>${j.t}</h3>

    <p style="margin:0">Confidential client · ${j.loc}</p>
    <p style="margin:0">${j.exp} · ${j.ind}</p>

    <div class="meta">
      ${j.sk.map(s =>
        `<span class="pill" style="background:none;border:1px solid var(--line);color:var(--mut)">${s}</span>`
      ).join("")}
    </div>

    <div class="row" style="margin-top:8px">
      <a class="btn b2" href="#/jobs/${j.id}">View Details</a>
      <a class="btn b3" href="#/apply/${j.id}">Apply Now</a>
    </div>
  </article>`;

const ctaBlock = () =>
  `<section class="sec">
    <div class="w">
      <div class="cta rv">
        <h2>Let's find the right talent. Together.</h2>
        <p>
          Whether you're building a team or planning your next career move,
          ACE TALENT CONSULTING can help connect the right opportunity with the right talent.
        </p>
        <div class="row">
          <a class="btn b1" href="#/employers">Hire Talent</a>
          <a class="btn b3" href="#/jobs">Find a Job</a>
        </div>
      </div>
    </div>
  </section>`;

const faq = () =>
  `<section class="sec alt">
    <div class="w" style="max-width:820px">
      ${sh("Questions, answered", "Good partnerships start with clarity.")}
      ${FAQ.map(q =>
        `<details class="rv">
          <summary>${q[0]}</summary>
          <p>${q[1]}</p>
        </details>`
      ).join("")}
    </div>
  </section>`;

const searchBar = () =>
  `<div class="sb">
    <div class="w">
      <form class="sf" id="jsf">
        <div>
          <label for="q">Search jobs</label>
          <input id="q" placeholder="Job title, keyword or skill">
        </div>
        <div>
          <label for="l">Location</label>
          <input id="l" placeholder="City, state or location">
        </div>
        <div>
          <label for="x">Experience</label>
          <select id="x">
            <option value="">Any experience</option>
            ${EXP.map(x => `<option>${x}</option>`).join("")}
          </select>
        </div>
        <div>
          <label for="t">Job type</label>
          <select id="t">
            <option value="">Any job type</option>
            ${YN.map(x => `<option>${x}</option>`).join("")}
          </select>
        </div>
        <button class="btn b2" type="submit">Search Jobs</button>
      </form>

      <p style="text-align:right;margin:12px 4px 0">
        <a href="#/jobs" style="color:var(--blue);font-weight:600">Browse all jobs →</a>
      </p>
    </div>
  </div>`;

const page = (t, s, btns = "") =>
  `<section class="ph2">
    <div class="w">
      <h1>${t}</h1>
      <p>${s}</p>
      <div class="row">${btns}</div>
    </div>
  </section>`;

const svcCard = (s, i) =>
  `<a href="#/services/${s[0]}" style="display:grid;grid-template-columns:60px minmax(0,1fr) auto;gap:24px;align-items:center;padding:28px 8px;border-top:1px solid rgba(10,26,63,.12);text-decoration:none;color:inherit;">
    <span style="font-size:13px;font-weight:700;letter-spacing:1.5px;color:var(--blue);">
      ${String(i + 1).padStart(2, "0")}
    </span>
    <div>
      <h3 style="margin:0 0 8px;font-size:22px;color:var(--navy);">${s[1]}</h3>
      <p style="margin:0;max-width:720px;line-height:1.7;color:var(--mut);">${s[2]}</p>
    </div>
    <span style="white-space:nowrap;font-size:14px;font-weight:700;color:var(--blue);">Explore →</span>
  </a>`;


/* ============ INDUSTRIES ============ */

const industryImages = {
  "it-technology": "images/industry-it.jpg",
  "banking-financial-services": "images/industry-banking.jpg",
  "fmcg-consumer": "images/industry-fmcg.jpg",
  "healthcare-pharmaceuticals": "images/industry-healthcare.jpg",
  "manufacturing-engineering": "images/industry-manufacturing.jpg",
  "sales-marketing": "images/industry-sales.jpg",
  "retail-ecommerce": "images/industry-retail.jpg",
  "logistics-supply-chain": "images/industry-logistics.jpg",
  "gcc-hiring": "images/industry-gcc.jpg",
  "telecom": "images/industry-telecom.jpg",
  "bpo": "images/industry-bpo.jpg",
  "hospitality": "images/industry-hospitality.jpg"
};

// NOTE: renamed from IN to INDS to avoid "already declared" conflict
const INDS = [
  ["it-technology", "IT & Technology",
    "Technology recruitment for software, IT infrastructure, data, cloud, cybersecurity and digital roles."],
  ["banking-financial-services", "Banking & Financial Services",
    "Recruitment support for banking, financial services, fintech, insurance and related business functions."],
  ["fmcg-consumer", "FMCG & Consumer",
    "Sales, distribution, marketing, operations and management talent for FMCG and consumer businesses."],
  ["healthcare-pharmaceuticals", "Healthcare & Life Sciences",
    "Recruitment for healthcare, pharmaceutical, medical, life sciences and allied business functions."],
  ["manufacturing-engineering", "Manufacturing & Engineering",
    "Skilled and professional hiring across manufacturing, engineering, production, quality and operations."],
  ["sales-marketing", "Sales & Marketing",
    "Sales, business development, marketing and customer-facing professionals across industries."],
  ["retail-ecommerce", "Retail & E-commerce",
    "Talent solutions for retail, e-commerce, merchandising, store operations and digital commerce."],
  ["logistics-supply-chain", "Logistics & Supply Chain",
    "Recruitment for logistics, warehousing, supply chain, transportation and distribution functions."],
  ["gcc-hiring", "GCC & Global Capability Centres",
    "Talent acquisition support for Global Capability Centres and international business operations."],
  ["telecom", "Telecom",
    "Recruitment for telecom, network, infrastructure, sales, operations and technical roles."],
  ["bpo", "BPO & Customer Experience",
    "Hiring support for BPO, customer service, operations, voice, non-voice and customer experience roles."],
  ["hospitality", "Hospitality & Travel",
    "Recruitment for hotels, hospitality, travel, guest services, operations and management roles."]
];

const indCard = (x, i) =>
  `<a class="industry-card" href="#/industries/${x[0]}" aria-label="${x[1]} recruitment services">
    <div class="industry-front">
      <div class="industry-image">
        <img src="${industryImages[x[0]] || 'images/industry-it.jpg'}" alt="${x[1]} Recruitment Services" loading="lazy">
      </div>
      <div class="industry-name">
        ${String(i + 1).padStart(2, "0")} &nbsp; ${x[1]}
      </div>
    </div>

    <div class="industry-back">
      <div class="industry-number">${String(i + 1).padStart(2, "0")}</div>
      <h3>${x[1]}</h3>
      <p>${x[2]}</p>
      <span>Explore Industry →</span>
    </div>
  </a>`;


/* ============ PAGES ============ */

const P = {

  /* ================= HOME ================= */

  home: () => `

    <section class="hero">
      <video class="hvid" autoplay muted loop playsinline preload="metadata" poster="images/hero-poster.jpg">
        <source src="videos/hero.mp4" type="video/mp4">
      </video>

      <div class="w hg">
        <div>
          <h1>Recruitment &amp; Staffing Solutions for Businesses Across India</h1>
          <p>
            ACE Talent Consulting is a recruitment and staffing company helping
            businesses find the right talent and professionals discover the right
            career opportunities. We provide permanent recruitment, contract
            staffing, executive search and workforce solutions across multiple
            industries.
          </p>
          <div class="tag">Recruitment • Staffing • Talent Acquisition • Workforce Solutions</div>
        </div>
      </div>
    </section>

    ${searchBar()}

    <section class="sec">
      <div class="w">
        <div class="st rv">
          ${STATS.map(s =>
            `<div>
              <b ${s[0] ? `data-c="${s[0]}" data-s="${s[1]}"` : ""}>${s[0] ? "0" : s[1]}</b>
              <span>${s[2]}</span>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

    <!-- HIRE / CAREER -->
    <section class="sec alt">
      <div class="w">
        <div class="grid g2">

          <div class="card rv" style="padding:0;overflow:hidden">
            <img src="images/hire-talent.jpg" alt="ACE Talent Consulting recruitment team"
              style="width:100%;height:440px;object-fit:cover;object-position:center;display:block;">
            <div style="padding:28px">
              <h3>Looking for the right talent?</h3>
              <p>Tell us what you need and our recruitment team will help you identify relevant professionals.</p>
              <div class="row">
                <a class="btn b1" href="#/employers">Hire Talent</a>
                <a class="btn b3" href="#/employers#req">Submit Requirement</a>
              </div>
            </div>
          </div>

          <div class="card rv" style="padding:0;overflow:hidden">
            <img src="images/career-opportunity.jpg" alt="Professional exploring career opportunities"
              style="width:100%;height:440px;object-fit:cover;object-position:center;display:block;">
            <div style="padding:28px">
              <h3>Looking for your next opportunity?</h3>
              <p>Explore opportunities aligned with your skills, experience and career goals.</p>
              <div class="row">
                <a class="btn b2" href="#/jobs">Search Jobs</a>
                <a class="btn b3" href="#/candidates">Submit Resume</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="sec">
      <div class="w">
        <div class="grid g2" style="align-items:center">

          <div class="rv">
            <div class="eb">About ACE Talent Consulting</div>
            <h2>Talent that moves businesses forward.</h2>
            <p>
              ACE TALENT CONSULTING is a talent consulting, recruitment
              and staffing company focused on connecting businesses with
              capable professionals and helping candidates discover
              meaningful career opportunities.
            </p>
            <ul class="ul">
              ${[
                "Recruitment expertise",
                "Industry knowledge",
                "Candidate network",
                "Structured screening",
                "Client-focused approach",
                "Workforce solutions"
              ].map(x => `<li>${x}</li>`).join("")}
            </ul>
            <a class="btn b2" href="#/about">Discover ACE Talent Consulting</a>
          </div>

          <div class="rv">
            <img src="images/about-ace.jpg" alt="ACE Talent Consulting recruitment team"
              style="width:100%;height:460px;object-fit:cover;object-position:center;display:block;">
          </div>

        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="sec alt" id="recruitment-staffing-services">
      <div class="w">

        <div style="display:grid;grid-template-columns:0.8fr 1.4fr;gap:60px;align-items:end;margin-bottom:35px;">
          <div>
            <div class="eb">OUR SERVICES</div>
            <h2 style="margin:10px 0 0;">Recruitment &amp; Staffing Services</h2>
          </div>
          <div>
            <p style="margin:0;max-width:720px;font-size:17px;line-height:1.75;">
              ACE Talent Consulting provides recruitment and staffing
              solutions for businesses across India. From permanent hiring
              and contract staffing to executive search, talent acquisition
              and recruitment process outsourcing, we help organizations
              find the professionals they need to grow.
            </p>
          </div>
        </div>

        <div style="border-bottom:1px solid rgba(10,26,63,.12);">
          ${SV.map((s, i) => svcCard(s, i)).join("")}
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;gap:20px;margin-top:30px;flex-wrap:wrap;">
          <p style="margin:0;color:var(--mut);font-size:14px;">
            Recruitment, staffing and workforce solutions tailored to your hiring requirements.
          </p>
          <a class="btn b2" href="#/services">View All Recruitment Services</a>
        </div>

      </div>
    </section>

    <!-- HOW WE WORK -->
    <section class="sec">
      <div class="w">

        <div style="text-align:center;max-width:780px;margin:0 auto 55px;">
          <div class="eb">HOW WE WORK</div>
          <h2 style="margin:10px 0 15px;">From Hiring Requirement to the Right Hire</h2>
          <p style="margin:0;font-size:17px;line-height:1.75;color:var(--mut);">
            At ACE Talent Consulting, our recruitment process is built around
            understanding your requirement first and then connecting you with
            relevant, carefully evaluated talent.
          </p>
        </div>

        <div style="position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:0;margin-bottom:45px;">

          <div style="position:absolute;top:22px;left:8%;right:8%;height:1px;background:rgba(10,26,63,.16);z-index:0;"></div>

          ${[
            ["01", "Understand", "Role, business and hiring requirements"],
            ["02", "Source", "Targeted search across relevant talent channels"],
            ["03", "Screen", "Experience, skills and role fit evaluated"],
            ["04", "Shortlist", "Relevant candidates presented with context"],
            ["05", "Interview", "Interviews and feedback coordinated"],
            ["06", "Hire", "Offer, joining and recruitment closure"]
          ].map((x, index) =>
            `<div style="position:relative;text-align:center;z-index:1;">
              <div style="width:46px;height:46px;margin:0 auto 18px;border-radius:50%;background:${index === 5 ? "var(--blue)" : "var(--navy)"};color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;">
                ${x[0]}
              </div>
              <h3 style="margin:0 0 8px;font-size:17px;">${x[1]}</h3>
              <p style="margin:0 auto;max-width:150px;font-size:13px;line-height:1.6;color:var(--mut);">${x[2]}</p>
            </div>`
          ).join("")}

        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;margin-top:20px;">
          ${[
            ["Relevant Talent", "We focus on candidates who genuinely match the requirement."],
            ["Clear Communication", "Clients and candidates stay informed throughout the process."],
            ["End-to-End Support", "From initial search to joining, we stay involved until the hire is complete."]
          ].map(x =>
            `<div style="padding:22px 24px;border:1px solid rgba(10,26,63,.10);background:#fff;">
              <strong style="display:block;margin-bottom:7px;color:var(--navy);">${x[0]}</strong>
              <span style="font-size:14px;line-height:1.6;color:var(--mut);">${x[1]}</span>
            </div>`
          ).join("")}
        </div>

      </div>
    </section>

    <!-- INDUSTRIES -->
    <section class="sec" id="industries">
      <div class="w">

        <div class="industry-heading">
          <div class="eb">INDUSTRIES WE SERVE</div>
          <h2>Recruitment Expertise Across Key Industries</h2>
          <p>
            ACE Talent Consulting provides recruitment and staffing solutions
            across diverse industries and business functions. Our recruiters
            support organizations with permanent hiring, contract staffing,
            specialist recruitment, sales hiring and leadership talent across India.
          </p>
        </div>

        <div class="industry-grid">
          ${INDS.map(indCard).join("")}
        </div>

      </div>
    </section>

    <!-- WHY ACE -->
    <section class="sec why-flow" id="why-ace">
  <div class="w">

    <div class="why-flow-top">
      <div class="why-flow-title">
        <div class="eb">WHY ACE TALENT CONSULTING</div>

        <h2>
          A smarter approach to
          <span>recruitment &amp; staffing.</span>
        </h2>
      </div>

      <div class="why-flow-copy">
        <p>
          Finding the right talent requires more than simply filling an open
          position. ACE Talent Consulting combines targeted candidate sourcing,
          industry knowledge and structured recruitment processes to help
          businesses hire professionals who match their requirements.
        </p>

        <a href="#/about" class="why-text-link">
          Discover ACE Talent Consulting <span>↗</span>
        </a>
      </div>
    </div>


    <div class="why-flow-process">

      <div class="flow-line"></div>

      <div class="flow-item">
        <div class="flow-marker">
          <span>01</span>
        </div>

        <div class="flow-content">
          <small>UNDERSTAND</small>
          <h3>We understand the role</h3>
          <p>
            We begin by understanding your business, hiring objective,
            role requirements, skills and experience needed for the position.
          </p>
        </div>
      </div>


      <div class="flow-item">
        <div class="flow-marker">
          <span>02</span>
        </div>

        <div class="flow-content">
          <small>SOURCE</small>
          <h3>We find relevant talent</h3>
          <p>
            Our recruitment team uses focused sourcing to identify candidates
            aligned with the position, industry and business environment.
          </p>
        </div>
      </div>


      <div class="flow-item">
        <div class="flow-marker">
          <span>03</span>
        </div>

        <div class="flow-content">
          <small>SCREEN</small>
          <h3>We evaluate candidates</h3>
          <p>
            Profiles are screened against experience, skills, location,
            role suitability and other important hiring requirements.
          </p>
        </div>
      </div>


      <div class="flow-item">
        <div class="flow-marker">
          <span>04</span>
        </div>

        <div class="flow-content">
          <small>CONNECT</small>
          <h3>We coordinate the process</h3>
          <p>
            From candidate communication to interview coordination, we help
            keep the recruitment process organized and efficient.
          </p>
        </div>
      </div>


      <div class="flow-item">
        <div class="flow-marker">
          <span>05</span>
        </div>

        <div class="flow-content">
          <small>PARTNER</small>
          <h3>We support long-term hiring</h3>
          <p>
            Our recruitment partnership extends beyond a single vacancy,
            supporting ongoing talent acquisition and workforce requirements.
          </p>
        </div>
      </div>

    </div>


    <div class="why-flow-bottom">

      <div class="flow-stat">
        <strong>01</strong>
        <span>Focused<br>Talent Sourcing</span>
      </div>

      <div class="flow-stat">
        <strong>02</strong>
        <span>Industry<br>Recruitment</span>
      </div>

      <div class="flow-stat">
        <strong>03</strong>
        <span>Permanent &amp;<br>Contract Hiring</span>
      </div>

      <div class="flow-stat">
        <strong>04</strong>
        <span>Long-Term<br>Partnerships</span>
      </div>

    </div>

  </div>
</section>

    <!-- JOBS -->
    <section class="sec alt">
      <div class="w">
        <div class="row" style="justify-content:space-between;align-items:end">
          ${sh(
            "Latest opportunities",
            "A better next move may be closer than you think.",
            "Placeholder roles. Edit the JB list to publish real ones."
          )}
          <a class="btn b3" href="#/jobs" style="margin-bottom:44px">View All Jobs</a>
        </div>
        <div class="grid g3">
          ${JB.slice(0, 3).map(jc).join("")}
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="sec">
      <div class="w">
        ${sh("Trusted by businesses", "What clients say", "Placeholder testimonials. Replace before launch.")}
        <div class="grid g3">
          ${TS.map(t =>
            `<figure class="card rv" style="margin:0">
              <p>“${t[2]}”</p>
              <b>${t[0]}</b>
              <br>
              <span style="color:var(--mut)">${t[1]}</span>
            </figure>`
          ).join("")}
        </div>

        <div class="mq" style="margin-top:36px" aria-hidden="true">
          <div class="mt">
            ${Array.from({ length: 16 }, (_, i) =>
              `<span>Client logo ${String(i % 8 + 1).padStart(2, "0")}</span>`
            ).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- INSIGHTS -->
    <section class="sec alt">
      <div class="w">
        <div class="row" style="justify-content:space-between;align-items:end">
          ${sh("From the field", "Insights that help you hire better.")}
          <a class="btn b3" href="#/insights" style="margin-bottom:44px">Read all insights</a>
        </div>
        <div class="grid g3">
          ${BL.map(b =>
            `<a class="rv" href="#/insights">
              ${ph(b[3], "4/3")}
              <div class="eb" style="margin-top:16px">${b[0]}</div>
              <h3>${b[1]}</h3>
              <p>${b[2]}</p>
            </a>`
          ).join("")}
        </div>
      </div>
    </section>

    ${faq()}
    ${ctaBlock()}

  `,


  /* ================= ABOUT ================= */

  about: () => `

    ${page(
      "People. Potential. Possibilities.",
      "ACE TALENT CONSULTING is a talent consulting, recruitment and staffing company connecting businesses with capable professionals."
    )}

    <section class="sec">
      <div class="w">
        <div class="grid g3">
          ${[
            ["Who we are", "A recruitment and talent consulting partner built around people."],
            ["What we do", "Permanent hiring, contract staffing, executive search, TA, RPO and workforce solutions."],
            ["Our approach", "Understand the brief, know the person, then screen with care."],
            ["Our mission", "Connect the right people with the right opportunities."],
            ["Our vision", "To be the talent partner organizations and professionals trust."],
            ["Our values", "Clarity, care, integrity and follow-through."]
          ].map(x =>
            `<div class="card h rv">
              <h3>${x[0]}</h3>
              <p style="margin:0">${x[1]}</p>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="w">
        ${sh("Brand story", "Our milestones", "Editable placeholders.")}
        <div class="steps rv">
          ${[
            "Founded",
            "First clients",
            "Network growth",
            "Pan India reach",
            "Next chapter",
            "Add milestone"
          ].map(x =>
            `<div class="step">
              <h3>${x}</h3>
              <p>Milestone description (placeholder).</p>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

    ${ctaBlock()}

  `,


  /* ================= SERVICES ================= */

  services: () => `

    ${page(
      "Talent solutions designed around your business.",
      "From a single critical role to a workforce program."
    )}

    <section class="sec">
      <div class="w">
        <div class="industry-grid">
          ${SV.map((s, i) => svcCard(s, i)).join("")}
        </div>
      </div>
    </section>

    ${ctaBlock()}

  `,


  /* ================= SERVICE DETAIL ================= */

  service: id => {

    const s = SV.find(x => x[0] == id) || SV[0];

    return `

      ${page(
        s[1],
        s[2],
        `<a class="btn b1" href="#/employers">Talk to Our Experts</a>`
      )}

      <section class="sec">
        <div class="w">
          <div class="grid g2">

            <div class="card">
              <h3>Key benefits</h3>
              <ul class="ul">
                <li>Relevant, screened profiles</li>
                <li>Faster turnaround</li>
                <li>Dedicated recruiter support</li>
              </ul>
            </div>

            <div class="card">
              <h3>Our process</h3>
              <ul class="ul">
                ${ST.map(x => `<li><b>${x[0]}:</b> ${x[1]}</li>`).join("")}
              </ul>
            </div>

          </div>
        </div>
      </section>

      ${ctaBlock()}

    `;
  },


  /* ================= INDUSTRIES ================= */

  industries: () => `

    ${page(
      "Recruitment expertise across industries",
      "Sector understanding helps us ask better questions."
    )}

    <section class="sec">
      <div class="w">
        <div class="industry-grid">
          ${INDS.map(indCard).join("")}
        </div>
      </div>
    </section>

    ${ctaBlock()}

  `,


  /* ================= INDUSTRY DETAIL ================= */

  industry: id => {

    const x = INDS.find(i => i[0] == id) || INDS[0];

    return `

      ${page(
        x[1],
        x[2],
        `<a class="btn b1" href="#/employers">Hire Talent</a>`
      )}

      <section class="sec">
        <div class="w">
          <div class="grid g3">

            <div class="card">
              <h3>Hiring requirements</h3>
              <p>Placeholder: typical hiring needs in this sector.</p>
            </div>

            <div class="card">
              <h3>Roles we recruit for</h3>
              <p>${x[2]}</p>
            </div>

            <div class="card">
              <h3>Our approach</h3>
              <p>We learn the sector, screen for fit, and shortlist with context.</p>
            </div>

          </div>
        </div>
      </section>

      ${ctaBlock()}

    `;
  },


  /* ================= JOBS ================= */

  jobs: () => {

    const opt = (k, a) =>
      `<option value="">All</option>` +
      [...new Set(a)]
        .map(v => `<option${J[k] == v ? " selected" : ""}>${v}</option>`)
        .join("");

    const r = JB.filter(j =>
      (!J.q || (j.t + j.dept + j.sk.join("")).toLowerCase().includes(J.q.toLowerCase())) &&
      (!J.loc || j.loc.toLowerCase().includes(J.loc.toLowerCase())) &&
      (!J.type || j.type == J.type) &&
      (!J.ind || j.ind == J.ind) &&
      (!J.mode || j.mode == J.mode) &&
      (!J.dept || j.dept == J.dept) &&
      (!J.exp || j.exp == J.exp)
    );

    const n = Math.max(1, Math.ceil(r.length / 4));

    J.page = Math.min(J.page || 1, n);

    return `

      ${page(
        "Find your next opportunity",
        "Search curated opportunities from our network."
      )}

      <section class="sec">
        <div class="w jl">

          <form class="card fp" id="jf">

            <h3>Filters</h3>

            <div>
              <label>Keyword</label>
              <input name="q" value="${J.q || ""}" placeholder="Title or skill">
            </div>

            <div>
              <label>Location</label>
              <input name="loc" value="${J.loc || ""}" placeholder="City or state">
            </div>

            <div>
              <label>Experience</label>
              <select name="exp">${opt("exp", JB.map(j => j.exp))}</select>
            </div>

            <div>
              <label>Industry</label>
              <select name="ind">${opt("ind", JB.map(j => j.ind))}</select>
            </div>

            <div>
              <label>Job type</label>
              <select name="type">${opt("type", JB.map(j => j.type))}</select>
            </div>

            <div>
              <label>Department</label>
              <select name="dept">${opt("dept", JB.map(j => j.dept))}</select>
            </div>

            <div>
              <label>Work mode</label>
              <select name="mode">${opt("mode", JB.map(j => j.mode))}</select>
            </div>

            <button class="btn b2" type="submit">Search</button>
            <button class="btn b3" type="reset" id="jr">Clear</button>

          </form>

          <div>

            <p><b>${r.length}</b> jobs found</p>

            <div class="grid">
              ${
                r.slice((J.page - 1) * 4, J.page * 4).map(jc).join("")
                ||
                `<div class="card">
                  <h3>No jobs match</h3>
                  <p>
                    Try clearing a filter, or
                    <a style="color:var(--blue)" href="#/candidates">submit your resume</a>.
                  </p>
                </div>`
              }
            </div>

            <div class="pg">
              ${Array.from({ length: n }, (_, i) =>
                `<button data-pg="${i + 1}" class="${i + 1 == J.page ? "on" : ""}" aria-label="Page ${i + 1}">${i + 1}</button>`
              ).join("")}
            </div>

          </div>

        </div>
      </section>

    `;
  },


  /* ================= JOB DETAIL ================= */

  job: id => {

    const j = JB.find(x => x.id == id) || JB[0];

    const u = encodeURIComponent(location.href);

    return `

      ${page(
        j.t,
        `Confidential client · ${j.loc} · ${j.exp} · ${j.type} · ${j.mode} · Posted ${j.posted}`,
        `<a class="btn b1" href="#/apply/${j.id}">Apply Now</a>`
      )}

      <section class="sec">
        <div class="w" style="max-width:860px">

          ${[
            ["Job description", "Placeholder description for this role. Replace with the real brief."],

            ["Responsibilities",
              "<ul class='ul'>" +
              "<li>Own day-to-day delivery for the function</li>" +
              "<li>Work with stakeholders</li>" +
              "<li>Report on outcomes</li>" +
              "</ul>"
            ],

            ["Required skills",
              `<ul class='ul'>${j.sk.map(s => `<li>${s}</li>`).join("")}</ul>`
            ],

            ["Experience", j.exp],

            ["Qualifications", "Relevant degree or equivalent experience."],

            ["Benefits", "Competitive compensation and growth. Details shared during the process."]
          ].map(x =>
            `<div class="card" style="margin-bottom:16px">
              <h3>${x[0]}</h3>
              ${x[1].startsWith("<") ? x[1] : `<p style="margin:0">${x[1]}</p>`}
            </div>`
          ).join("")}

          <div class="row">
            <a class="btn b1" href="#/apply/${j.id}">Apply Now</a>

            <a class="btn b3" target="_blank" rel="noopener"
              href="https://www.linkedin.com/sharing/share-offsite/?url=${u}">LinkedIn</a>

            <a class="btn b3" target="_blank" rel="noopener"
              href="https://wa.me/?text=${u}">WhatsApp</a>

            <a class="btn b3"
              href="mailto:?subject=${encodeURIComponent(j.t)}&body=${u}">Email</a>
          </div>

        </div>
      </section>

    `;
  },


  /* ================= APPLY ================= */

  apply: id => {

    const j = JB.find(x => x.id == id);

    return `

      ${page(
        "Apply for this job",
        j ? j.t + " · " + j.loc : "Tell us about yourself."
      )}

      <section class="sec">
        <div class="w" style="max-width:860px">
          ${form("apply")}
        </div>
      </section>

    `;
  },


  /* ================= EMPLOYERS ================= */

  employers: () => `

    ${page(
      "Build your team with the right talent.",
      "From individual positions to large-scale hiring requirements, ACE TALENT CONSULTING provides recruitment and staffing solutions designed around your business.",
      `<a class="btn b1" href="#/employers#req">Submit Requirement</a>`
    )}

    <section class="sec">
      <div class="w">
        <div class="grid g3">
          ${[
            "Permanent Hiring",
            "Contract Staffing",
            "Executive Search",
            "High-Volume Hiring",
            "Talent Acquisition",
            "RPO",
            "Workforce Solutions"
          ].map(x =>
            `<div class="card h rv">
              <div class="ico">◆</div>
              <h3 style="margin:0">${x}</h3>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

    <section class="sec alt" id="req">
      <div class="w" style="max-width:860px">
        ${sh("Hiring requirement", "Tell us who you need")}
        ${form("employer")}
      </div>
    </section>

  `,


  /* ================= CANDIDATES ================= */

  candidates: () => `

    ${page(
      "Your career. Your next opportunity.",
      "Search jobs, submit your resume and explore opportunities by industry and location.",
      `<a class="btn b1" href="#/jobs">Explore Jobs</a>
       <a class="btn b3" href="#/candidates#cv">Submit Resume</a>`
    )}

    <section class="sec">
      <div class="w">
        <div class="grid g3">
          ${[
            "Search Jobs",
            "Career Opportunities",
            "Industry-wise Jobs",
            "Location-wise Jobs",
            "Career Resources"
          ].map(x =>
            `<a class="card h rv" href="#/jobs">
              <h3 style="margin:0">${x}</h3>
            </a>`
          ).join("")}
        </div>
      </div>
    </section>

    <section class="sec alt" id="cv">
      <div class="w" style="max-width:860px">
        ${sh("Submit resume", "Share your profile")}
        ${form("resume")}
      </div>
    </section>

  `,


  /* ================= CONTACT ================= */

  contact: () => `

    ${page(
      "Let's talk",
      "Tell us about your hiring needs or your next career move."
    )}

    <section class="sec">
      <div class="w">
        <div class="grid g2">

          <div>
            <h2>Get in touch</h2>
            <p>
              ACE TALENT CONSULTING is here to help you hire better
              or find a better role.
            </p>
            <p>
              <b>Phone:</b> ${CO.phone}
              <br>
              <b>Email:</b> ${CO.email}
              <br>
              <b>Address:</b> ${CO.addr}
            </p>

            <div class="ph" style="--h:220;--ar:16/9" role="img" aria-label="Map placeholder"></div>
          </div>

          ${form("contact")}

        </div>
      </div>
    </section>

  `,


  /* ================= INSIGHTS ================= */

  insights: () => `

    ${page(
      "Insights that help you hire better.",
      "Placeholder articles."
    )}

    <section class="sec">
      <div class="w">
        <div class="grid g3">
          ${BL.concat(BL).map(b =>
            `<div class="rv">
              ${ph(b[3])}
              <div class="eb" style="margin-top:16px">${b[0]}</div>
              <h3>${b[1]}</h3>
              <p>${b[2]}</p>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

  `,


  /* ================= GALLERY ================= */

  gallery: () => `

    ${page(
      "Gallery",
      "Team, events and workplace moments."
    )}

    <section class="sec">
      <div class="w">
        <div class="grid g3">
          ${Array.from({ length: 9 }, (_, i) =>
            `<div class="rv">
              ${ph(200 + i * 15, i % 3 == 1 ? "3/4" : "4/3")}
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

  `,


  /* ================= LEGAL ================= */

  legal: t => `

    ${page(
      t,
      "Placeholder content. Replace with legally reviewed text."
    )}

    <section class="sec">
      <div class="w" style="max-width:820px">
        <p>Add your ${t.toLowerCase()} here.</p>
      </div>
    </section>

  `

};

window.P = P;

})();