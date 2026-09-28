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
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeSSPkU-YQGsWQLM3k0j3ZLGtSlLb7lqPo0vARx1F0ZkCJoJQ/viewform?usp=pp_url";


const jobApplyUrl = (job) =>
  `${GOOGLE_FORM_URL}&entry.1678710412=${encodeURIComponent(job.t)}`;


/* ================= JOB CARD ================= */

const jc = j =>
  `<article class="card h jc rv">

    <div class="meta">
      <span class="pill">${j.type}</span>
      <span class="pill">${j.mode}</span>
      <span class="pill">Posted ${j.posted}</span>
    </div>

    <h3>${j.t}</h3>

    ${
      j.client
        ? `<p style="margin:0;font-weight:600;color:var(--navy)">
            Client: ${j.client}
          </p>`
        : ""
    }

    <p style="margin:0">${j.loc}</p>

    <p style="margin:0">
      ${j.exp} · ${j.ind}
    </p>

    <div class="meta">
      ${j.sk.map(s =>
        `<span
          class="pill"
          style="background:none;border:1px solid var(--line);color:var(--mut)"
        >
          ${s}
        </span>`
      ).join("")}
    </div>

    <div
      class="row"
      style="margin-top:8px;gap:8px;flex-wrap:wrap"
    >

      <a
        class="btn b2"
        href="#/jobs/${j.id}"
      >
        View Details
      </a>

      ${
  (j.jdUrl || j["JD Document Link"])
    ? `<a
        class="btn b3"
        href="${j.jdUrl || j["JD Document Link"]}"
        target="_blank"
        rel="noopener"
      >
        View Full JD
      </a>`
    : ""
}

      <a
        class="btn b3"
        href="${jobApplyUrl(j)}"
        target="_blank"
        rel="noopener"
      >
        Apply Now
      </a>

    </div>

  </article>`;


/* ================= CTA ================= */

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

          <a
            class="btn b1"
            href="#/employers"
          >
            Hire Talent
          </a>

          <a
            class="btn b3"
            href="#/jobs"
          >
            Find a Job
          </a>

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
  `<div class="sb ace-premium-bar">
    <div class="w">

      <div class="ace-premium-inner">

        <!-- PITCH DECK -->
        <div class="ace-premium-item">

          <div class="ace-premium-icon ace-blue-icon">
            <span>↓</span>
          </div>

          <div class="ace-premium-info">
            <div class="ace-premium-label">
              EXPLORE ACE TALENT CONSULTING
            </div>

            <a
              href="documents/ACE-Talent-Consulting-Pitch-Deck.pdf"
              target="_blank"
              rel="noopener"
              class="ace-premium-title"
            >
              Explore our company profile
            </a>

            <p>
              Get insights into our vision, services,
              industries and more.
            </p>
          </div>

          <a
            href="documents/ACE-Talent-Consulting-Pitch-Deck.pdf"
            target="_blank"
            rel="noopener"
            class="ace-premium-arrow"
          >
            →
          </a>

        </div>


        <!-- SERVICES -->
        <div class="ace-premium-item">

          <div class="ace-premium-icon ace-purple-icon">
            <span>♧</span>
          </div>

          <div class="ace-premium-info">
            <div class="ace-premium-label">
              OUR RECRUITMENT EXPERTISE
            </div>

            <a
              href="#/services"
              class="ace-premium-title"
            >
              Recruitment, Staffing &amp; Workforce Solutions
            </a>

            <p>
              Discover how we help businesses
              build high-performing teams.
            </p>
          </div>

          <a
            href="#/services"
            class="ace-premium-arrow"
          >
            →
          </a>

        </div>


        <!-- WHATSAPP -->
<div class="ace-premium-item ace-contact-item">

  <div class="ace-premium-icon ace-green-icon">
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="currentColor"
        d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.37 0 .01 5.38.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.61A11.92 11.92 0 0 0 12 24c6.63 0 12-5.38 12-12 0-3.21-1.25-6.22-3.5-8.5ZM12 21.82c-1.82 0-3.61-.49-5.17-1.42l-.37-.22-3.66.96.98-3.57-.24-.37A9.78 9.78 0 0 1 2.18 12C2.18 6.58 6.59 2.18 12 2.18S21.82 6.58 21.82 12 17.41 21.82 12 21.82Zm5.39-7.34c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.4-.08-.12-.27-.19-.57-.34Z"/>
    </svg>
  </div>

  <div class="ace-premium-info">

    <div class="ace-premium-label">
      CONNECT WITH US
    </div>

    <a
      href="https://wa.me/919833763399?text=Hello%20ACE%20Talent%20Consulting%2C%20I%20would%20like%20to%20discuss%20a%20recruitment%20or%20staffing%20requirement."
      target="_blank"
      rel="noopener"
      class="ace-whatsapp-link"
    >
      <span>WhatsApp Us</span>
      <b>→</b>
    </a>

    <div class="ace-whatsapp-number">
      +91 9833763399
    </div>

    <p>
      Chat with us on WhatsApp for quick assistance and support.
    </p>

  </div>

</div>

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

        <!-- =====================================================
         OUR FOUNDERS
         ===================================================== -->

    <section class="founders-section">

      <div class="w">

        <!-- HEADER -->

        <div class="founders-intro">

          <div class="founders-intro-left">

            <div class="eb">
              OUR FOUNDERS
            </div>

            <h2>
              Experience that
              <span>shapes our approach.</span>
            </h2>

          </div>


          <div class="founders-intro-right">

            <p>
              ACE Talent Consulting is shaped by experience across
              banking, financial markets, technology, recruitment
              and project management. Our founders bring different
              professional perspectives together to build a more
              informed and people-focused approach to talent.
            </p>

          </div>

        </div>


        <!-- FOUNDER 01 -->

        <article class="founder-feature founder-feature-dark">

          <div class="founder-number">
            01
          </div>


          <div class="founder-feature-grid">

            <!-- LEFT -->

            <div class="founder-profile">

              <div class="founder-kicker">
                FOUNDER
              </div>

              <h3>
                Mahender Yogendra
              </h3>

              <p class="founder-position">
                Founder • Banking &amp; Financial Markets
              </p>


              <div class="founder-highlight">

                <div class="founder-highlight-number">
                  18+
                </div>

                <div>
                  <strong>
                    Years of Industry Experience
                  </strong>

                  <span>
                    Banking, financial markets, sales,
                    marketing and wealth management.
                  </span>
                </div>

              </div>


              <div class="founder-statement">

                <div class="statement-label">
                  FOUNDER PERSPECTIVE
                </div>

                <p>
                  Our vision is to build a recruitment and talent
                  consulting organization that understands both
                  business requirements and people. Experience across
                  banking, financial markets, private wealth, NRI
                  business and investment services has shaped our
                  belief that successful hiring starts with understanding
                  the business behind the role.
                </p>

              </div>

            </div>


            <!-- RIGHT -->

            <div class="founder-career">

              <div class="career-heading">
                Professional Journey
              </div>


              <div class="career-line">

                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      Unicon Financial Intermediaries Ltd
                    </strong>

                    <small>
                      National Head — Private Wealth,
                      NRI Business &amp; Real Estate
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      Royal Wealth Management
                    </strong>

                    <small>
                      Head — Investment Services, India
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      ABN AMRO Bank
                    </strong>

                    <small>
                      Assistant Vice President
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      DBS Cholamandalam Asset Management
                    </strong>

                    <small>
                      Regional Manager
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      ING Vysya Mutual Fund
                    </strong>

                    <small>
                      Regional Manager
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      Aviva Life Insurance Company Ltd
                    </strong>

                    <small>
                      Manager — Sales
                    </small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </article>


        <!-- FOUNDER 02 -->

        <article class="founder-feature founder-feature-light">

          <div class="founder-number">
            02
          </div>


          <div class="founder-feature-grid">

            <!-- LEFT -->

            <div class="founder-profile">

              <div class="founder-kicker">
                FOUNDER
              </div>

              <h3>
                Archana Yogendra
              </h3>

              <p class="founder-position">
                Founder • Technology, Recruitment &amp; Project Management
              </p>


              <div class="founder-highlight">

                <div class="founder-highlight-number">
                  14
                </div>

                <div>
                  <strong>
                    Years of IT Industry Experience
                  </strong>

                  <span>
                    Project management, recruitment,
                    programming and technology.
                  </span>
                </div>

              </div>


              <div class="founder-statement">

                <div class="statement-label">
                  FOUNDER PERSPECTIVE
                </div>

                <p>
                  We believe recruitment should create meaningful
                  connections between organizations and professionals.
                  Our approach combines technology experience,
                  recruitment understanding and project management
                  perspective to help businesses identify people who
                  can contribute, grow and add long-term value.
                </p>

              </div>

            </div>


            <!-- RIGHT -->

            <div class="founder-career">

              <div class="career-heading">
                Professional Journey
              </div>


              <div class="career-line">

                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      Capgemini Consulting
                    </strong>

                    <small>
                      Project Manager
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      Oracle
                    </strong>

                    <small>
                      Associate Consultant
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      SEEC Technologies Asia Pvt. Ltd.
                    </strong>

                    <small>
                      Software Engineer
                    </small>
                  </div>

                </div>


                <div class="career-item">

                  <span class="career-dot"></span>

                  <div>
                    <strong>
                      Genesis Insoft Ltd
                    </strong>

                    <small>
                      Software Engineer
                    </small>
                  </div>

                </div>

              </div>


              <div class="founder-qualification">

                <span>
                  QUALIFICATION
                </span>

                <strong>
                  MCA • IGNOU
                </strong>

                <small>
                  Java Certified Professional
                </small>

              </div>

            </div>

          </div>

        </article>


        <!-- CLOSING STATEMENT -->

        <div class="founders-closing">

          <div class="closing-line"></div>

          <p>
            Different backgrounds. One shared belief:
            <strong>
              the right people can move businesses forward.
            </strong>
          </p>

        </div>

      </div>

    </section>


    <!-- KEEP THIS -->

    ${faq()}

  <div class="w">



    <section class="client-marquee">

  <div class="w">

    <div class="client-marquee-heading">
      <div class="eb">OUR NETWORK</div>

      <h2>Connecting Talent With Leading Organizations</h2>

      <p>
        Our recruitment expertise supports businesses across technology,
        banking, consulting, FMCG and other key industries.
      </p>
    </div>

    <!-- ROW 1 : LEFT TO RIGHT -->
    <div class="logo-marquee">

      <div class="logo-track logo-track-ltr">

        <div class="logo-set">

          <div class="client-logo">
            <img src="images/client-logos/tech-mahindra.png" alt="Tech Mahindra">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/kotak-mahindra.png" alt="Kotak Mahindra Bank">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/rbl-bank.png" alt="RBL Bank">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/indusland-bank.png" alt="IndusInd Bank">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/wipro.png" alt="Wipro">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/hcltech.png" alt="HCLTech">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/birlasoft.png" alt="Birlasoft">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/infosys.png" alt="Infosys">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/ltimindtree.png" alt="LTIMindtree">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/amazon.png" alt="Amazon">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/mahindra.png" alt="Mahindra">
          </div>

        </div>

        <div class="logo-set" aria-hidden="true">

          <div class="client-logo"><img src="images/client-logos/tech-mahindra.png"></div>
          <div class="client-logo"><img src="images/client-logos/kotak-mahindra.png"></div>
          <div class="client-logo"><img src="images/client-logos/rbl-bank.png"></div>
          <div class="client-logo"><img src="images/client-logos/indusland-bank.png"></div>
          <div class="client-logo"><img src="images/client-logos/wipro.png"></div>
          <div class="client-logo"><img src="images/client-logos/hcltech.png"></div>
          <div class="client-logo"><img src="images/client-logos/birlasoft.png"></div>
          <div class="client-logo"><img src="images/client-logos/infosys.png"></div>
          <div class="client-logo"><img src="images/client-logos/ltimindtree.png"></div>
          <div class="client-logo"><img src="images/client-logos/amazon.png"></div>
          <div class="client-logo"><img src="images/client-logos/mahindra.png"></div>

        </div>

      </div>

    </div>

    <!-- ROW 2 : RIGHT TO LEFT -->
    <div class="logo-marquee">

      <div class="logo-track logo-track-rtl">

        <div class="logo-set">

          <div class="client-logo">
            <img src="images/client-logos/aditya-birla.png" alt="Aditya Birla Group">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/flipkart.png" alt="Flipkart">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/capgemini.png" alt="Capgemini">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/virtusa.png" alt="Virtusa">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/cognizant.png" alt="Cognizant">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/itc-infotech.png" alt="ITC Infotech">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/mphasis.png" alt="Mphasis">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/ibm.png" alt="IBM">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/godrej.png" alt="Godrej">
          </div>

          <div class="client-logo">
            <img src="images/client-logos/icici-bank.png" alt="ICICI Bank">
          </div>

        </div>

        <div class="logo-set" aria-hidden="true">

          <div class="client-logo"><img src="images/client-logos/aditya-birla.png"></div>
          <div class="client-logo"><img src="images/client-logos/flipkart.png"></div>
          <div class="client-logo"><img src="images/client-logos/capgemini.png"></div>
          <div class="client-logo"><img src="images/client-logos/virtusa.png"></div>
          <div class="client-logo"><img src="images/client-logos/cognizant.png"></div>
          <div class="client-logo"><img src="images/client-logos/itc-infotech.png"></div>
          <div class="client-logo"><img src="images/client-logos/mphasis.png"></div>
          <div class="client-logo"><img src="images/client-logos/ibm.png"></div>
          <div class="client-logo"><img src="images/client-logos/godrej.png"></div>
          <div class="client-logo"><img src="images/client-logos/icici-bank.png"></div>

        </div>

      </div>

    </div>

  </div>

</section>
    </section>

    ${faq()}
    ${ctaBlock()}

  `,


    /* ================= ABOUT ================= */

  about: () => `

    <section class="ace-about-image-hero">

  <img
    src="images/about-ace-hero.jpg"
    alt="ACE Talent Consulting recruitment and staffing"
  >

  <div class="ace-about-image-hero-overlay"></div>

  <div class="w ace-about-image-hero-content">

    <div class="ace-about-eyebrow">
      ABOUT ACE TALENT CONSULTING
    </div>

    <h1>
      About ACE Talent Consulting |
      Recruitment &amp; Staffing Company in India
    </h1>

    <p>
      Learn about ACE Talent Consulting, a recruitment and staffing company
      providing permanent recruitment, contract staffing, executive search,
      talent acquisition, RPO and workforce solutions across India.
    </p>

  </div>

</section>

    <!-- =====================================================
         ABOUT HERO
         ===================================================== -->

    <section class="ace-about-premium-hero">
      <div class="w">

        <div class="ace-about-hero-layout">

          <div class="ace-about-hero-content rv">

            <div class="ace-about-eyebrow">
              ABOUT ACE TALENT CONSULTING
            </div>

            <h1>
              Building stronger businesses
              <span>through the right talent.</span>
            </h1>

            <p class="ace-about-hero-text">
              ACE Talent Consulting is a recruitment and staffing company in
              India focused on connecting organizations with professionals
              who match their business requirements, skills, experience and
              workforce objectives.
            </p>

            <p class="ace-about-hero-text">
              From permanent recruitment and contract staffing to executive
              search, talent acquisition and workforce solutions, we support
              organizations across different stages of their hiring journey.
            </p>

            <div class="ace-about-hero-buttons">
              <a href="#/employers" class="btn b1">
                Hire Talent
              </a>

              <a href="#/jobs" class="btn b3">
                Explore Careers
              </a>
            </div>

          </div>


          <div class="ace-about-hero-visual rv">

            <div class="ace-about-image-wrap">

              <img
                src="images/about-ace.jpg"
                alt="ACE Talent Consulting recruitment and staffing team"
                loading="eager"
              >

              <div class="ace-about-image-overlay"></div>

              <div class="ace-about-image-caption">
                <span>RECRUITMENT • STAFFING • TALENT ACQUISITION</span>
                <strong>
                  Connecting people, businesses and opportunities.
                </strong>
              </div>

            </div>

            <div class="ace-about-floating-card">
              <span>Our focus</span>
              <strong>People + Business</strong>
              <small>
                Understanding both sides of every hiring conversation.
              </small>
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- =====================================================
         INTRODUCTION
         ===================================================== -->

    <section class="sec ace-about-story-section">

      <div class="w">

        <div class="ace-about-story-grid">

          <div class="ace-about-section-heading rv">

            <div class="eb">
              WHO WE ARE
            </div>

            <h2>
              A talent partner that looks beyond the resume.
            </h2>

            <div class="ace-about-heading-line"></div>

          </div>


          <div class="ace-about-story-copy rv">

            <p class="large">
              Recruitment is often the first connection between a business
              and a future employee. At ACE Talent Consulting, we believe
              that connection deserves attention, context and understanding.
            </p>

            <p>
              We work with organizations to understand the requirement behind
              every position — the role, responsibilities, experience,
              functional expectations, business environment and hiring
              objective.
            </p>

            <p>
              We then focus our recruitment efforts on identifying relevant
              professionals and supporting the hiring process with structured
              communication and candidate evaluation.
            </p>

            <p>
              Our work spans permanent recruitment, contract staffing,
              executive search, talent acquisition, RPO and workforce
              solutions, allowing us to support both individual hiring needs
              and broader workforce requirements.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         COMPANY POSITIONING
         ===================================================== -->

    <section class="sec alt">

      <div class="w">

        <div class="ace-about-position-grid">

          <article class="ace-about-position-card rv">

            <div class="ace-about-position-number">
              01
            </div>

            <div class="eb">
              FOR BUSINESSES
            </div>

            <h3>
              Recruitment support aligned with business requirements.
            </h3>

            <p>
              We help employers identify relevant talent for business-critical
              and ongoing hiring requirements across functions, industries,
              experience levels and locations.
            </p>

            <a href="#/employers" class="ace-about-text-link">
              Hire Talent <span>↗</span>
            </a>

          </article>


          <article class="ace-about-position-card rv">

            <div class="ace-about-position-number">
              02
            </div>

            <div class="eb">
              FOR PROFESSIONALS
            </div>

            <h3>
              Career opportunities connected to skills and experience.
            </h3>

            <p>
              We connect candidates with relevant opportunities and help
              professionals explore roles based on their experience,
              capabilities and career direction.
            </p>

            <a href="#/jobs" class="ace-about-text-link">
              Find a Job <span>↗</span>
            </a>

          </article>


          <article class="ace-about-position-card rv">

            <div class="ace-about-position-number">
              03
            </div>

            <div class="eb">
              OUR APPROACH
            </div>

            <h3>
              Structured process with a people-focused perspective.
            </h3>

            <p>
              We combine requirement understanding, focused sourcing,
              screening, communication and coordination to keep the
              recruitment journey organized.
            </p>

            <a href="#/services" class="ace-about-text-link">
              Explore Services <span>↗</span>
            </a>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         OUR SERVICES
         ===================================================== -->

    <section class="sec">

      <div class="w">

        ${sh(
          "OUR RECRUITMENT EXPERTISE",
          "End-to-end talent solutions for different hiring needs.",
          "ACE Talent Consulting provides recruitment and staffing services designed around organizational requirements, role complexity and workforce objectives."
        )}

        <div class="ace-about-expertise-grid">

          <article class="ace-about-expertise-card rv">
            <span>01</span>
            <div>
              <h3>Permanent Recruitment</h3>
              <p>
                Hiring support for organizations looking to build long-term
                teams across business functions and experience levels.
              </p>
            </div>
            <a href="#/services/permanent-recruitment">↗</a>
          </article>

          <article class="ace-about-expertise-card rv">
            <span>02</span>
            <div>
              <h3>Contract Staffing</h3>
              <p>
                Flexible staffing support for project-based, temporary and
                evolving workforce requirements.
              </p>
            </div>
            <a href="#/services/contract-staffing">↗</a>
          </article>

          <article class="ace-about-expertise-card rv">
            <span>03</span>
            <div>
              <h3>Executive Search</h3>
              <p>
                Focused talent identification for specialist, senior and
                business-critical roles.
              </p>
            </div>
            <a href="#/services/executive-search">↗</a>
          </article>

          <article class="ace-about-expertise-card rv">
            <span>04</span>
            <div>
              <h3>Talent Acquisition</h3>
              <p>
                Recruitment support aligned with hiring goals, talent
                requirements and organizational priorities.
              </p>
            </div>
            <a href="#/services/talent-acquisition">↗</a>
          </article>

          <article class="ace-about-expertise-card rv">
            <span>05</span>
            <div>
              <h3>RPO</h3>
              <p>
                Recruitment process support for organizations seeking
                structured and scalable hiring capabilities.
              </p>
            </div>
            <a href="#/services/rpo">↗</a>
          </article>

          <article class="ace-about-expertise-card rv">
            <span>06</span>
            <div>
              <h3>Workforce Solutions</h3>
              <p>
                Recruitment and staffing support that can adapt to changing
                workforce requirements.
              </p>
            </div>
            <a href="#/services/workforce-solutions">↗</a>
          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         DETAILED RECRUITMENT APPROACH
         ===================================================== -->

    <section class="sec alt">

      <div class="w">

        <div class="ace-about-process-intro rv">

          <div>
            <div class="eb">
              HOW WE WORK
            </div>

            <h2>
              A recruitment process built around clarity.
            </h2>
          </div>

          <p>
            Our approach is designed to create alignment between the
            employer's requirement and the candidate's capabilities before
            the hiring conversation moves forward.
          </p>

        </div>


        <div class="ace-about-process-grid">

          <div class="ace-about-process-card rv">
            <div class="ace-step-number">01</div>
            <span>DISCOVER</span>
            <h3>Understand the requirement</h3>
            <p>
              We understand the job role, responsibilities, experience,
              skills, location, business environment and hiring objective.
            </p>
          </div>

          <div class="ace-about-process-card rv">
            <div class="ace-step-number">02</div>
            <span>SOURCE</span>
            <h3>Identify relevant talent</h3>
            <p>
              Candidate sourcing is focused around the specific requirement
              rather than treating every vacancy the same way.
            </p>
          </div>

          <div class="ace-about-process-card rv">
            <div class="ace-step-number">03</div>
            <span>SCREEN</span>
            <h3>Review candidate suitability</h3>
            <p>
              Profiles are evaluated against relevant experience, functional
              skills, location and role expectations.
            </p>
          </div>

          <div class="ace-about-process-card rv">
            <div class="ace-step-number">04</div>
            <span>CONNECT</span>
            <h3>Coordinate the process</h3>
            <p>
              We support communication and interview coordination between
              employers and shortlisted professionals.
            </p>
          </div>

          <div class="ace-about-process-card rv">
            <div class="ace-step-number">05</div>
            <span>ALIGN</span>
            <h3>Keep stakeholders informed</h3>
            <p>
              Clear communication helps keep candidates and hiring teams
              aligned as the recruitment process progresses.
            </p>
          </div>

          <div class="ace-about-process-card rv">
            <div class="ace-step-number">06</div>
            <span>PARTNER</span>
            <h3>Support ongoing hiring</h3>
            <p>
              Our relationship can extend beyond a single vacancy to support
              recurring recruitment and workforce requirements.
            </p>
          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         INDUSTRIES
         ===================================================== -->

    <section class="sec">

      <div class="w">

        ${sh(
          "INDUSTRIES WE SERVE",
          "Recruitment support across diverse business sectors.",
          "Our industry coverage includes technology, banking and financial services, FMCG, healthcare, manufacturing, sales, retail, logistics and other business environments."
        )}

        <div class="ace-about-industry-grid">

          <a href="#/industries/it-technology" class="ace-about-industry-card rv">
            <span>01</span>
            <strong>IT &amp; Technology</strong>
            <small>Technology &amp; digital talent</small>
          </a>

          <a href="#/industries/banking-finance" class="ace-about-industry-card rv">
            <span>02</span>
            <strong>Banking &amp; Financial Services</strong>
            <small>Banking, finance &amp; financial roles</small>
          </a>

          <a href="#/industries/fmcg-consumer" class="ace-about-industry-card rv">
            <span>03</span>
            <strong>FMCG &amp; Consumer</strong>
            <small>Consumer-facing businesses</small>
          </a>

          <a href="#/industries/healthcare" class="ace-about-industry-card rv">
            <span>04</span>
            <strong>Healthcare</strong>
            <small>Healthcare talent requirements</small>
          </a>

          <a href="#/industries/manufacturing-engineering" class="ace-about-industry-card rv">
            <span>05</span>
            <strong>Manufacturing &amp; Engineering</strong>
            <small>Technical &amp; operational talent</small>
          </a>

          <a href="#/industries/sales-marketing" class="ace-about-industry-card rv">
            <span>06</span>
            <strong>Sales &amp; Marketing</strong>
            <small>Revenue and growth functions</small>
          </a>

          <a href="#/industries/retail-ecommerce" class="ace-about-industry-card rv">
            <span>07</span>
            <strong>Retail &amp; E-commerce</strong>
            <small>Retail and digital commerce roles</small>
          </a>

          <a href="#/industries/logistics-supply-chain" class="ace-about-industry-card rv">
            <span>08</span>
            <strong>Logistics &amp; Supply Chain</strong>
            <small>Operations and supply chain talent</small>
          </a>

          <div class="ace-about-industry-card rv">
            <span>09</span>
            <strong>GCC</strong>
            <small>Global capability centre hiring</small>
          </div>

          <div class="ace-about-industry-card rv">
            <span>10</span>
            <strong>Telecom</strong>
            <small>Telecom and communication roles</small>
          </div>

          <div class="ace-about-industry-card rv">
            <span>11</span>
            <strong>BPO</strong>
            <small>Customer and business operations</small>
          </div>

          <div class="ace-about-industry-card rv">
            <span>12</span>
            <strong>Hospitality</strong>
            <small>Hospitality and service roles</small>
          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         WHY ACE
         ===================================================== -->

    <section class="sec ace-about-why-section">

      <div class="w">

        <div class="ace-about-why-grid">

          <div class="ace-about-why-heading rv">

            <div class="ace-about-eyebrow light">
              WHY ACE TALENT CONSULTING
            </div>

            <h2>
              Recruitment with a business-first and people-focused approach.
            </h2>

            <p>
              Every organization has different hiring priorities. Every
              professional has a different career journey. Our role is to
              create the connection between those two perspectives.
            </p>

          </div>


          <div class="ace-about-why-list">

            <div class="ace-about-why-item rv">
              <span>01</span>
              <div>
                <h3>Requirement-focused recruitment</h3>
                <p>
                  We begin by understanding the actual requirement behind
                  the role before moving into candidate sourcing.
                </p>
              </div>
            </div>

            <div class="ace-about-why-item rv">
              <span>02</span>
              <div>
                <h3>Industry understanding</h3>
                <p>
                  Recruitment across different business sectors requires
                  context, role awareness and understanding of functional
                  expectations.
                </p>
              </div>
            </div>

            <div class="ace-about-why-item rv">
              <span>03</span>
              <div>
                <h3>Structured candidate screening</h3>
                <p>
                  Profiles are considered around skills, experience,
                  location and overall relevance to the role.
                </p>
              </div>
            </div>

            <div class="ace-about-why-item rv">
              <span>04</span>
              <div>
                <h3>Clear communication</h3>
                <p>
                  A transparent recruitment process helps employers and
                  candidates stay informed throughout the journey.
                </p>
              </div>
            </div>

            <div class="ace-about-why-item rv">
              <span>05</span>
              <div>
                <h3>Flexible hiring support</h3>
                <p>
                  From permanent positions to contract and workforce
                  requirements, the engagement can be shaped around the need.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         LEADERSHIP
         ===================================================== -->

    <section class="sec">

      <div class="w">

        ${sh(
          "OUR LEADERSHIP",
          "Experience that shapes our approach to talent.",
          "ACE Talent Consulting is led by professionals with experience spanning banking, financial markets, technology, project management, recruitment and business functions."
        )}

        <div class="ace-about-leadership-grid">

          <article class="ace-about-leader-card dark rv">

            <div class="ace-leader-index">
              01
            </div>

            <div class="ace-leader-role">
              FOUNDER
            </div>

            <h3>
              Mahender Yogendra
            </h3>

            <div class="ace-leader-focus">
              Banking • Financial Markets • Sales • Marketing • Wealth Management
            </div>

            <div class="ace-leader-experience">
              <strong>18+</strong>
              <span>Years of professional experience</span>
            </div>

            <p>
              Mahender brings professional experience across banking,
              financial markets, sales, marketing and wealth management.
              His background contributes a business and market-oriented
              perspective to the firm's approach to talent and recruitment.
            </p>

            <div class="ace-leader-tags">
              <span>Banking</span>
              <span>Financial Markets</span>
              <span>Sales</span>
              <span>Marketing</span>
              <span>Wealth Management</span>
            </div>

          </article>


          <article class="ace-about-leader-card light rv">

            <div class="ace-leader-index">
              02
            </div>

            <div class="ace-leader-role">
              FOUNDER
            </div>

            <h3>
              Archana Yogendra
            </h3>

            <div class="ace-leader-focus">
              Technology • Project Management • Recruitment
            </div>

            <div class="ace-leader-experience">
              <strong>14</strong>
              <span>Years of professional experience</span>
            </div>

            <p>
              Archana brings experience across IT, project management and
              recruitment, with professional exposure including Capgemini,
              Oracle, SEEC Technologies and Genesis Insoft. Her technology
              and project background adds a structured perspective to talent
              acquisition and recruitment.
            </p>

            <div class="ace-leader-tags">
              <span>IT</span>
              <span>Project Management</span>
              <span>Recruitment</span>
              <span>Technology</span>
            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         FOR CANDIDATES
         ===================================================== -->

    <section class="sec alt">

      <div class="w">

        <div class="ace-about-candidate-block rv">

          <div class="ace-about-candidate-number">
            CAREERS
          </div>

          <div class="ace-about-candidate-content">

            <div class="eb">
              FOR CANDIDATES
            </div>

            <h2>
              Your skills deserve the right opportunity.
            </h2>

            <p>
              Whether you are actively looking for a new role or exploring
              your next career move, ACE Talent Consulting provides access
              to recruitment opportunities across multiple industries and
              functions.
            </p>

            <p>
              Explore available jobs, review role requirements and apply for
              opportunities that match your experience and career direction.
            </p>

            <div class="ace-about-candidate-buttons">
              <a href="#/jobs" class="btn b2">
                Find a Job
              </a>

              <a href="#/candidates" class="btn b3">
                Submit Resume
              </a>
            </div>

          </div>

          <div class="ace-about-candidate-side">
            <div>
              <span>01</span>
              <strong>Explore opportunities</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Share your profile</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Move toward your next career step</strong>
            </div>
          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         EMPLOYER CTA
         ===================================================== -->

    <section class="sec">

      <div class="w">

        <div class="ace-about-final-cta rv">

          <div class="ace-about-final-copy">

            <div class="eb">
              FOR EMPLOYERS
            </div>

            <h2>
              Looking for the right talent for your business?
            </h2>

            <p>
              Share your hiring requirement with ACE Talent Consulting.
              Whether you need a single professional, multiple positions,
              contract staffing or ongoing recruitment support, we can
              understand your requirement and discuss the relevant approach.
            </p>

          </div>

          <div class="ace-about-final-actions">

            <a href="#/employers" class="btn b1">
              Submit Hiring Requirement
            </a>

            <a href="#/contact" class="btn b3">
              Contact Us
            </a>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         SEO FAQ
         ===================================================== -->

    <section class="sec alt">

      <div class="w ace-about-faq-wrap">

        <div class="ace-about-faq-heading rv">

          <div class="eb">
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2>
            About ACE Talent Consulting
          </h2>

          <p>
            Common questions about our recruitment, staffing and talent
            acquisition services.
          </p>

        </div>


        <div class="ace-about-faq-list">

          <details class="rv">
            <summary>
              What does ACE Talent Consulting do?
            </summary>
            <p>
              ACE Talent Consulting is a recruitment and staffing company
              providing permanent recruitment, contract staffing, executive
              search, talent acquisition, RPO and workforce solutions for
              organizations and professionals.
            </p>
          </details>

          <details class="rv">
            <summary>
              Does ACE Talent Consulting provide recruitment services in India?
            </summary>
            <p>
              Yes. ACE Talent Consulting provides recruitment and staffing
              support for organizations hiring across India, subject to the
              specific role, industry and hiring requirement.
            </p>
          </details>

          <details class="rv">
            <summary>
              What types of recruitment services are available?
            </summary>
            <p>
              Recruitment services include permanent hiring, contract staffing,
              executive search, talent acquisition, RPO and workforce
              solutions.
            </p>
          </details>

          <details class="rv">
            <summary>
              Can companies hire through ACE Talent Consulting?
            </summary>
            <p>
              Yes. Employers can submit their hiring requirements through the
              Hire Talent section so the recruitment team can understand the
              requirement and discuss the appropriate hiring support.
            </p>
          </details>

          <details class="rv">
            <summary>
              How can candidates apply for jobs?
            </summary>
            <p>
              Candidates can explore the available opportunities through the
              Find a Job section and apply for relevant positions. Candidates
              can also submit their resume through the Careers section.
            </p>
          </details>

          <details class="rv">
            <summary>
              Which industries does ACE Talent Consulting support?
            </summary>
            <p>
              Industry coverage includes IT and technology, banking and
              financial services, FMCG, healthcare, manufacturing, sales,
              retail, logistics, GCC, telecom, BPO and hospitality.
            </p>
          </details>
          <details class="rv">
  <summary>
    How can I contact ACE Talent Consulting?
  </summary>
  <p>
    You can contact ACE Talent Consulting at
    <strong>${CO.phone}</strong>
    or use our <a href="#/contact">Contact Us</a> page to send your enquiry.
  </p>
</details>

<details class="rv">
  <summary>
    Where can I share my CV?
  </summary>
  <p>
    Candidates can share their CV at
    <a href="mailto:hr@acetalentconsulting.com">
      hr@acetalentconsulting.com
    </a>
    or submit their profile through our
    <a href="#/candidates">Careers</a> section.
  </p>
</details>

        </div>

      </div>

    </section>

  `,
  /* ================= SERVICES ================= */

services: () => `

  <section class="services-hero">
    <div class="services-hero-overlay"></div>

    <div class="w services-hero-inner">

      <div class="services-hero-copy rv">

        <div class="eb">
          OUR SERVICES
        </div>

        <h1>
          Recruitment &amp; Staffing
          <span>Solutions for Growing Businesses</span>
        </h1>

        <p>
          ACE Talent Consulting provides recruitment and staffing services
          that help businesses identify, attract and connect with relevant
          professionals across industries, functions and experience levels.
        </p>

        <p>
          From permanent recruitment and contract staffing to executive search,
          talent acquisition, RPO and workforce solutions, we support employers
          with hiring requirements ranging from individual positions to
          ongoing workforce needs.
        </p>

        <div class="row">
          <a class="btn b1" href="#/employers">
            Hire Talent
          </a>

          <a class="btn b3" href="#/contact">
            Talk to Our Experts
          </a>
        </div>

      </div>

      <div class="services-hero-card rv">

        <div class="services-hero-card-label">
          WHAT WE OFFER
        </div>

        <h3>
          Talent solutions built around your hiring requirement.
        </h3>

        <div class="services-hero-points">

          <div>
            <b>01</b>
            <span>Permanent Recruitment</span>
          </div>

          <div>
            <b>02</b>
            <span>Contract Staffing</span>
          </div>

          <div>
            <b>03</b>
            <span>Executive Search</span>
          </div>

          <div>
            <b>04</b>
            <span>Talent Acquisition</span>
          </div>

          <div>
            <b>05</b>
            <span>RPO</span>
          </div>

          <div>
            <b>06</b>
            <span>Workforce Solutions</span>
          </div>

        </div>

      </div>

    </div>
  </section>


  <!-- INTRO -->
  <section class="sec">

    <div class="w">

      <div class="services-intro-grid">

        <div class="rv">

          <div class="eb">
            RECRUITMENT EXPERTISE
          </div>

          <h2>
            More than filling vacancies.
            We focus on finding relevant talent.
          </h2>

        </div>

        <div class="services-intro-copy rv">

          <p class="large">
            Effective recruitment starts with understanding the requirement
            behind the role.
          </p>

          <p>
            At ACE Talent Consulting, we look at the position, responsibilities,
            skills, experience, location and business context before aligning
            the recruitment approach.
          </p>

          <p>
            This helps us support organizations with a more focused approach
            to permanent hiring, contract staffing, executive recruitment and
            broader talent acquisition requirements.
          </p>

        </div>

      </div>

    </div>

  </section>


  <!-- CORE SERVICES -->
  <section class="sec alt" id="recruitment-staffing-services">

    <div class="w">

      ${sh(
        "OUR TALENT SOLUTIONS",
        "Recruitment and staffing services designed around your business.",
        "Explore our core recruitment services and discover how each solution can support different workforce and hiring requirements."
      )}

      <div class="services-list">

        ${SV.map((s, i) => `
          
          <a
            href="#/services/${s[0]}"
            class="services-list-item rv"
          >

            <div class="services-list-number">
              ${String(i + 1).padStart(2, "0")}
            </div>

            <div class="services-list-main">

              <div class="services-list-tag">
                ${i === 0 ? "LONG-TERM HIRING" :
                  i === 1 ? "FLEXIBLE WORKFORCE" :
                  i === 2 ? "SPECIALIST HIRING" :
                  i === 3 ? "TALENT STRATEGY" :
                  i === 4 ? "RECRUITMENT OPERATIONS" :
                  "WORKFORCE SUPPORT"}
              </div>

              <h3>
                ${s[1]}
              </h3>

              <p>
                ${s[2]}
              </p>

            </div>

            <div class="services-list-arrow">
              →
            </div>

          </a>

        `).join("")}

      </div>

    </div>

  </section>


  <!-- WHY THIS MATTERS -->
  <section class="sec">

    <div class="w">

      <div class="services-benefit-heading rv">

        <div>

          <div class="eb">
            WHY OUR APPROACH
          </div>

          <h2>
            Recruitment built around relevance,
            clarity and business needs.
          </h2>

        </div>

        <p>
          Hiring decisions can have a direct impact on teams, productivity
          and business growth. Our approach focuses on creating alignment
          between the employer's requirement and the professional being
          considered.
        </p>

      </div>


      <div class="services-benefit-grid">

        <div class="services-benefit-card rv">
          <span>01</span>
          <h3>Requirement-led sourcing</h3>
          <p>
            We understand the role before beginning the search for relevant
            professionals.
          </p>
        </div>

        <div class="services-benefit-card rv">
          <span>02</span>
          <h3>Focused candidate screening</h3>
          <p>
            Profiles are reviewed against experience, skills, location and
            role expectations.
          </p>
        </div>

        <div class="services-benefit-card rv">
          <span>03</span>
          <h3>Industry understanding</h3>
          <p>
            Recruitment is adapted to different industries and functional
            hiring environments.
          </p>
        </div>

        <div class="services-benefit-card rv">
          <span>04</span>
          <h3>Clear coordination</h3>
          <p>
            Structured communication helps employers and candidates stay
            aligned through the hiring journey.
          </p>
        </div>

      </div>

    </div>

  </section>


  <!-- HOW WE WORK -->
  <section class="sec alt">

    <div class="w">

      ${sh(
        "HOW WE WORK",
        "From hiring requirement to the right connection.",
        "Our recruitment process is designed to keep the hiring journey focused and organized."
      )}

      <div class="services-process">

        <div class="services-process-item rv">
          <span>01</span>
          <small>UNDERSTAND</small>
          <h3>Understand the requirement</h3>
          <p>
            We understand the role, experience, skills, location and business
            requirement.
          </p>
        </div>

        <div class="services-process-item rv">
          <span>02</span>
          <small>SOURCE</small>
          <h3>Identify relevant talent</h3>
          <p>
            We focus sourcing around professionals relevant to the requirement.
          </p>
        </div>

        <div class="services-process-item rv">
          <span>03</span>
          <small>SCREEN</small>
          <h3>Evaluate profiles</h3>
          <p>
            Candidates are reviewed against the key requirements of the role.
          </p>
        </div>

        <div class="services-process-item rv">
          <span>04</span>
          <small>CONNECT</small>
          <h3>Coordinate the process</h3>
          <p>
            We support communication, shortlisting and interview coordination.
          </p>
        </div>

        <div class="services-process-item rv">
          <span>05</span>
          <small>PARTNER</small>
          <h3>Support ongoing hiring</h3>
          <p>
            Our support can continue as the organization's hiring requirements
            evolve.
          </p>
        </div>

      </div>

    </div>

  </section>


  <!-- INDUSTRIES -->
  <section class="sec">

    <div class="w">

      ${sh(
        "INDUSTRIES WE SERVE",
        "Recruitment support across diverse sectors.",
        "Our services support organizations across technology, banking, FMCG, healthcare, manufacturing, sales, retail, logistics and other business environments."
      )}

      <div class="services-industry-grid">

        ${INDS.map((x, i) => `
          
          <a
            href="#/industries/${x[0]}"
            class="services-industry-card rv"
          >

            <span>
              ${String(i + 1).padStart(2, "0")}
            </span>

            <strong>
              ${x[1]}
            </strong>

            <small>
              Explore recruitment expertise →
            </small>

          </a>

        `).join("")}

      </div>

      <div style="margin-top:28px">
        <a class="btn b3" href="#/industries">
          View All Industries
        </a>
      </div>

    </div>

  </section>


  <!-- ENGAGEMENT -->
  <section class="sec alt">

    <div class="w">

      <div class="services-engagement rv">

        <div>

          <div class="eb">
            FOR EMPLOYERS
          </div>

          <h2>
            Tell us what you need to hire.
          </h2>

          <p>
            Whether you are hiring for one position, multiple roles,
            contract staffing requirements or ongoing recruitment support,
            start by sharing your requirement with us.
          </p>

          <a class="btn b1" href="#/employers">
            Submit Hiring Requirement
          </a>

        </div>


        <div class="services-engagement-side">

          <div>
            <span>01</span>
            <strong>Single-position hiring</strong>
          </div>

          <div>
            <span>02</span>
            <strong>Multiple-position hiring</strong>
          </div>

          <div>
            <span>03</span>
            <strong>Contract staffing</strong>
          </div>

          <div>
            <span>04</span>
            <strong>Ongoing recruitment support</strong>
          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- FAQ -->
  <section class="sec">

    <div class="w services-faq">

      ${sh(
        "FREQUENTLY ASKED QUESTIONS",
        "Recruitment & staffing services",
        "Common questions about our recruitment and staffing solutions."
      )}

      <details class="rv">
        <summary>
          What recruitment services does ACE Talent Consulting provide?
        </summary>
        <p>
          ACE Talent Consulting provides permanent recruitment, contract
          staffing, executive search, talent acquisition, RPO and workforce
          solutions for organizations.
        </p>
      </details>

      <details class="rv">
        <summary>
          Can ACE Talent Consulting support hiring across India?
        </summary>
        <p>
          Recruitment and staffing support is available for hiring
          requirements across India, depending on the role, industry,
          location and business requirement.
        </p>
      </details>

      <details class="rv">
        <summary>
          How can a company submit a hiring requirement?
        </summary>
        <p>
          Employers can use the
          <a href="#/employers">
            Hire Talent
          </a>
          section to share their requirement.
        </p>
      </details>

      <details class="rv">
        <summary>
          What is the difference between permanent recruitment and contract staffing?
        </summary>
        <p>
          Permanent recruitment supports long-term hiring needs, while
          contract staffing is designed for temporary, project-based or
          evolving workforce requirements.
        </p>
      </details>

      <details class="rv">
        <summary>
          How can candidates find opportunities?
        </summary>
        <p>
          Candidates can visit the
          <a href="#/jobs">
            Find a Job
          </a>
          section to explore current opportunities and apply for relevant roles.
        </p>
      </details>

    </div>

  </section>


  ${ctaBlock()}

`,


  /* ================= SERVICE DETAIL ================= */

service: id => {

  const data = {

    "permanent-recruitment": {
      title: "Permanent Recruitment Services",
      subtitle: "Permanent hiring solutions for organizations building strong, long-term teams.",
      eyebrow: "PERMANENT RECRUITMENT",

      introTitle: "Find the right talent for long-term business growth.",
      intro:
        "Our permanent recruitment service helps organizations identify and hire professionals for full-time roles across functions, experience levels and locations.",

      description:
        "We understand the role, business requirement, required skills and experience before sourcing relevant candidates. Our approach is focused on quality, relevance and a structured hiring process.",

      benefits: [
        "Role-specific candidate sourcing",
        "Relevant and screened profiles",
        "Support across multiple functions and experience levels",
        "Interview coordination and recruitment support",
        "Focused hiring for long-term positions",
        "Ongoing communication throughout the hiring process"
      ],

      capabilities: [
        ["01", "Requirement Understanding", "We understand the position, responsibilities, experience, skills, location and business expectations."],
        ["02", "Candidate Sourcing", "We identify professionals through focused sourcing channels aligned with the requirement."],
        ["03", "Profile Screening", "Candidate profiles are reviewed for relevant experience, skills, location and role suitability."],
        ["04", "Shortlisting", "Relevant profiles are shared with the hiring team for further evaluation."],
        ["05", "Interview Coordination", "We support communication and coordination between candidates and employers."],
        ["06", "Hiring Support", "We remain connected through the recruitment process to help maintain clear communication."]
      ],

      roles:
        "Technology, IT, Sales, Business Development, Banking, Finance, HR, Operations, Customer Support, Marketing, Engineering, Supply Chain and other business functions.",

      faq: [
        ["What is permanent recruitment?", "Permanent recruitment is focused on hiring professionals for long-term full-time positions within an organization."],
        ["What type of roles can you recruit for?", "We support hiring across technology, sales, finance, banking, HR, operations, marketing and other business functions."],
        ["Can you support hiring across India?", "Yes. Recruitment requirements can be supported across locations depending on the role, industry and business requirement."]
      ]
    },


    "contract-staffing": {
      title: "Contract Staffing Services",
      subtitle: "Flexible staffing solutions for project-based, temporary and evolving workforce requirements.",
      eyebrow: "CONTRACT STAFFING",

      introTitle: "Build workforce flexibility without slowing down your business.",
      intro:
        "Our contract staffing services help organizations manage temporary, project-based, seasonal and time-bound workforce requirements.",

      description:
        "We help businesses identify relevant professionals for defined assignments and changing workforce needs, with recruitment support aligned to the requirement.",

      benefits: [
        "Flexible workforce support",
        "Project-based hiring",
        "Temporary and time-bound staffing",
        "Faster access to relevant professionals",
        "Support for changing workforce requirements",
        "Recruitment coordination and candidate management"
      ],

      capabilities: [
        ["01", "Requirement Assessment", "We understand project duration, role requirements, skills, location and workforce expectations."],
        ["02", "Talent Sourcing", "We source professionals relevant to the required skills and assignment."],
        ["03", "Screening", "Profiles are reviewed against the defined role and project requirements."],
        ["04", "Shortlisting", "Relevant candidates are presented to the hiring team."],
        ["05", "Coordination", "We support interview scheduling and communication during the selection process."],
        ["06", "Workforce Support", "Our recruitment support can continue as workforce requirements change."]
      ],

      roles:
        "IT and technology, project teams, sales, operations, customer support, finance, administration, logistics, manufacturing and other project or business functions.",

      faq: [
        ["What is contract staffing?", "Contract staffing supports organizations with professionals hired for defined, temporary, project-based or evolving workforce requirements."],
        ["When should a company consider contract staffing?", "It can be useful when an organization needs additional workforce capacity for projects, temporary requirements, seasonal demand or changing business needs."],
        ["Can contract staffing support large teams?", "The model can be used for individual positions as well as broader workforce requirements, depending on the hiring need."]
      ]
    },


    "executive-search": {
      title: "Executive Search & Leadership Hiring",
      subtitle: "Focused recruitment support for senior, specialist and business-critical positions.",
      eyebrow: "EXECUTIVE SEARCH",

      introTitle: "Focused search for roles where the right experience matters.",
      intro:
        "Our executive search service supports organizations looking for senior professionals, specialists and leadership talent for business-critical positions.",

      description:
        "We focus on understanding the role, leadership expectations, functional expertise and business context before identifying relevant professionals.",

      benefits: [
        "Focused senior-level sourcing",
        "Leadership and specialist hiring support",
        "Role-specific candidate identification",
        "Experience and skill-based screening",
        "Confidential recruitment coordination",
        "Support for business-critical positions"
      ],

      capabilities: [
        ["01", "Role Understanding", "We understand the position, leadership expectations, responsibilities and business context."],
        ["02", "Market Mapping", "We identify relevant talent pools and professionals aligned with the requirement."],
        ["03", "Focused Search", "Candidate identification is centered around experience, expertise and role relevance."],
        ["04", "Profile Evaluation", "Relevant profiles are reviewed against the key expectations of the position."],
        ["05", "Candidate Engagement", "We coordinate communication with relevant professionals throughout the process."],
        ["06", "Hiring Coordination", "We support the employer and candidate through interviews and selection stages."]
      ],

      roles:
        "Senior management, business heads, functional leaders, technology leadership, sales leadership, finance leadership, operations leadership and specialist positions.",

      faq: [
        ["What is executive search?", "Executive search is a focused recruitment approach used for senior, leadership, specialist and business-critical positions."],
        ["Which positions can be covered?", "The service can support senior management, functional leadership, specialist and other critical roles depending on the requirement."],
        ["How is executive search different from regular recruitment?", "Executive search generally involves a more focused and targeted approach to identifying professionals for senior or specialist positions."]
      ]
    },


    "talent-acquisition": {
      title: "Talent Acquisition Services",
      subtitle: "Structured talent acquisition support aligned with your organization's hiring priorities.",
      eyebrow: "TALENT ACQUISITION",

      introTitle: "A structured approach to building the talent pipeline.",
      intro:
        "Our talent acquisition services support organizations with planned and ongoing hiring requirements across functions, locations and experience levels.",

      description:
        "We work around the organization's hiring priorities and help create a structured approach to sourcing, screening, shortlisting and recruitment coordination.",

      benefits: [
        "Structured recruitment support",
        "Ongoing talent sourcing",
        "Hiring pipeline development",
        "Role-specific candidate screening",
        "Multi-location hiring support",
        "Recruitment coordination"
      ],

      capabilities: [
        ["01", "Hiring Planning", "We understand current and upcoming hiring requirements and the roles that need to be prioritized."],
        ["02", "Talent Sourcing", "Candidate sourcing is aligned with the skills and experience required by the organization."],
        ["03", "Pipeline Building", "Relevant professionals can be identified for immediate as well as ongoing requirements."],
        ["04", "Screening", "Profiles are reviewed against the organization's defined requirements."],
        ["05", "Shortlisting", "Relevant candidates are presented for employer evaluation."],
        ["06", "Hiring Coordination", "We support communication and coordination throughout the recruitment journey."]
      ],

      roles:
        "Technology, sales, banking, finance, HR, operations, customer support, marketing, engineering, administration and other organizational functions.",

      faq: [
        ["What is talent acquisition?", "Talent acquisition is a broader approach to identifying, attracting and hiring talent based on an organization's workforce requirements."],
        ["Can you support recurring hiring?", "Yes. Talent acquisition support can be structured around ongoing or recurring recruitment requirements."],
        ["Can talent acquisition cover multiple locations?", "Yes, depending on the organization's hiring requirements and role locations."]
      ]
    },


    "rpo": {
      title: "Recruitment Process Outsourcing (RPO)",
      subtitle: "Structured recruitment process support for organizations seeking scalable hiring capabilities.",
      eyebrow: "RECRUITMENT PROCESS OUTSOURCING",

      introTitle: "Extend your recruitment capability with structured support.",
      intro:
        "Our RPO support helps organizations manage defined parts of their recruitment process or broader hiring requirements through dedicated recruitment support.",

      description:
        "The engagement can be aligned with hiring volume, role requirements, locations and recruitment objectives, creating a more organized approach to sourcing and candidate management.",

      benefits: [
        "Scalable recruitment support",
        "Dedicated recruitment coordination",
        "High-volume hiring support",
        "Multi-role recruitment",
        "Structured candidate pipeline",
        "Ongoing recruitment process support"
      ],

      capabilities: [
        ["01", "Requirement Planning", "We understand hiring volumes, role categories, locations and recruitment priorities."],
        ["02", "Sourcing", "Candidate sourcing is aligned with the agreed hiring requirements."],
        ["03", "Screening", "Profiles are reviewed according to defined role criteria."],
        ["04", "Pipeline Management", "Candidate pipelines can be maintained across multiple requirements."],
        ["05", "Interview Coordination", "We support communication and coordination across the hiring process."],
        ["06", "Ongoing Support", "Recruitment support can continue according to the agreed engagement model."]
      ],

      roles:
        "High-volume hiring, technology recruitment, sales hiring, operations, customer support, banking, finance, engineering and other recurring recruitment requirements.",

      faq: [
        ["What is RPO?", "RPO stands for Recruitment Process Outsourcing. It involves outsourcing defined recruitment activities or broader recruitment processes to an external recruitment partner."],
        ["Can RPO support high-volume hiring?", "Yes. RPO can be structured for organizations managing multiple vacancies or recurring hiring requirements."],
        ["Is RPO suitable for ongoing recruitment?", "It can be used when an organization needs continuing recruitment support aligned with its workforce requirements."]
      ]
    },


    "workforce-solutions": {
      title: "Workforce Solutions",
      subtitle: "Flexible recruitment and staffing support designed around changing business requirements.",
      eyebrow: "WORKFORCE SOLUTIONS",

      introTitle: "Workforce support that adapts as business requirements evolve.",
      intro:
        "Our workforce solutions combine recruitment and staffing support to help organizations respond to changing talent and workforce requirements.",

      description:
        "From individual hiring needs to broader workforce requirements, we align recruitment support with the organization's business context, role requirements and workforce objectives.",

      benefits: [
        "Flexible workforce support",
        "Permanent and contract hiring",
        "Multi-function recruitment",
        "Multi-location hiring support",
        "Scalable recruitment assistance",
        "Business-focused hiring coordination"
      ],

      capabilities: [
        ["01", "Workforce Assessment", "We understand the organization's hiring requirements, workforce gaps and business priorities."],
        ["02", "Hiring Strategy", "The recruitment approach is aligned with the type and scale of workforce required."],
        ["03", "Talent Sourcing", "Relevant professionals are identified across appropriate sourcing channels."],
        ["04", "Candidate Screening", "Profiles are reviewed against the requirements of each position."],
        ["05", "Recruitment Coordination", "We support shortlisting, communication and interview coordination."],
        ["06", "Ongoing Workforce Support", "Recruitment support can adapt as business and workforce requirements change."]
      ],

      roles:
        "Permanent hiring, contract staffing, project recruitment, sales, technology, operations, finance, customer support, engineering, administration and other business functions.",

      faq: [
        ["What are workforce solutions?", "Workforce solutions provide recruitment and staffing support aligned with an organization's changing talent and workforce requirements."],
        ["Can workforce solutions combine different hiring models?", "Yes. Depending on the requirement, organizations may use permanent recruitment, contract staffing or other recruitment support models."],
        ["Can you support multi-location hiring?", "Yes, depending on the role, industry, location and overall workforce requirement."]
      ]
    }

  };


  const d = data[id] || data["permanent-recruitment"];


  return `

    ${page(
      d.title,
      d.subtitle,
      `
        <a class="btn b1" href="#/employers">
          Hire Talent
        </a>

        <a class="btn b3" href="#/contact">
          Talk to Our Experts
        </a>
      `
    )}


    <!-- INTRODUCTION -->

    <section class="sec">

      <div class="w">

        <div class="service-detail-intro-grid">

          <div class="rv">

            <div class="eb">
              ${d.eyebrow}
            </div>

            <h2>
              ${d.introTitle}
            </h2>

          </div>


          <div class="service-detail-intro-copy rv">

            <p class="large">
              ${d.intro}
            </p>

            <p>
              ${d.description}
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- BENEFITS -->

    <section class="sec alt">

      <div class="w">

        <div class="service-detail-section-heading rv">

          <div>
            <div class="eb">
              WHY THIS SERVICE
            </div>

            <h2>
              Built around the way your organization hires.
            </h2>
          </div>

          <p>
            Our approach focuses on relevance, structured recruitment
            and clear coordination throughout the hiring process.
          </p>

        </div>


        <div class="service-benefit-grid">

          ${d.benefits.map((x, i) => `

            <article class="service-benefit-card rv">

              <span>
                ${String(i + 1).padStart(2, "0")}
              </span>

              <h3>
                ${x}
              </h3>

            </article>

          `).join("")}

        </div>

      </div>

    </section>


    <!-- CAPABILITIES -->

    <section class="sec">

      <div class="w">

        ${sh(
          "OUR APPROACH",
          "How we support this hiring requirement.",
          "A structured recruitment process helps keep requirements, candidates and hiring teams aligned."
        )}


        <div class="service-capability-grid">

          ${d.capabilities.map(x => `

            <article class="service-capability-card rv">

              <div class="service-capability-number">
                ${x[0]}
              </div>

              <div>

                <div class="service-capability-label">
                  ${x[1]}
                </div>

                <p>
                  ${x[2]}
                </p>

              </div>

            </article>

          `).join("")}

        </div>

      </div>

    </section>


    <!-- PROCESS -->

    <section class="sec alt">

      <div class="w">

        ${sh(
          "RECRUITMENT PROCESS",
          "From requirement to the right connection.",
          "Our process is designed to create clarity at every stage of the hiring journey."
        )}


        <div class="service-process-grid">

          ${[
            ["01", "DISCOVER", "Understand the requirement"],
            ["02", "SOURCE", "Identify relevant professionals"],
            ["03", "SCREEN", "Evaluate candidate suitability"],
            ["04", "SHORTLIST", "Present relevant profiles"],
            ["05", "CONNECT", "Coordinate interviews"],
            ["06", "SUPPORT", "Stay connected through the process"]
          ].map(x => `

            <div class="service-process-card rv">

              <span>${x[0]}</span>

              <small>${x[1]}</small>

              <h3>${x[2]}</h3>

            </div>

          `).join("")}

        </div>

      </div>

    </section>


    <!-- ROLES -->

    <section class="sec">

      <div class="w">

        <div class="service-roles-box rv">

          <div>

            <div class="eb">
              ROLES & FUNCTIONS
            </div>

            <h2>
              Recruitment support across business functions.
            </h2>

          </div>

          <p>
            ${d.roles}
          </p>

        </div>

      </div>

    </section>


    <!-- WHY ACE -->

    <section class="sec alt">

      <div class="w">

        <div class="service-why-grid">

          <div class="rv">

            <div class="eb">
              WHY ACE TALENT CONSULTING
            </div>

            <h2>
              A focused recruitment partner for your hiring requirements.
            </h2>

          </div>


          <div class="service-why-list">

            <div class="service-why-item rv">
              <span>01</span>
              <div>
                <h3>Requirement-focused approach</h3>
                <p>
                  We start with understanding the role and business requirement.
                </p>
              </div>
            </div>

            <div class="service-why-item rv">
              <span>02</span>
              <div>
                <h3>Relevant candidate sourcing</h3>
                <p>
                  Sourcing is aligned with the skills, experience and location required.
                </p>
              </div>
            </div>

            <div class="service-why-item rv">
              <span>03</span>
              <div>
                <h3>Structured screening</h3>
                <p>
                  Candidate profiles are reviewed against relevant role expectations.
                </p>
              </div>
            </div>

            <div class="service-why-item rv">
              <span>04</span>
              <div>
                <h3>Clear coordination</h3>
                <p>
                  We support communication between employers and candidates throughout the process.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- FAQ -->

    <section class="sec">

      <div class="w service-faq">

        ${sh(
          "FREQUENTLY ASKED QUESTIONS",
          d.title,
          "Common questions about this recruitment service."
        )}


        ${d.faq.map(x => `

          <details class="rv">

            <summary>
              ${x[0]}
            </summary>

            <p>
              ${x[1]}
            </p>

          </details>

        `).join("")}

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

  const j = JB.find(x => x.id == id);

  if (!j) {
    return page(
      "Job Not Found",
      "This job is no longer available."
    );
  }

  const jdUrl =
    j.jdUrl ||
    j["JD Document Link"] ||
    j.jd ||
    "";

  return `

    ${page(
      j.t,
      `${j.loc} · ${j.exp} · ${j.type} · ${j.mode} · Posted ${j.posted}`,
      `
        ${
          jdUrl
            ? `
              <a
                class="btn b3"
                href="${jdUrl}"
                target="_blank"
                rel="noopener"
              >
                View Full JD
              </a>
            `
            : ""
        }

        <a
          class="btn b1"
          href="${jobApplyUrl(j)}"
          target="_blank"
          rel="noopener"
        >
          Apply Now
        </a>
      `
    )}

    <section class="sec job-detail-section">

      <div class="w job-detail-wrap">

        ${
          j.client
            ? `
              <div class="job-client-box">
                <div class="job-client-label">CLIENT</div>
                <div class="job-client-name">${j.client}</div>
              </div>
            `
            : ""
        }

        <div class="job-detail-card">

          <div class="job-detail-label">
            ROLE OVERVIEW
          </div>

          <div class="job-info-grid">

            <div class="job-info-item">
              <span>Location</span>
              <strong>${j.loc}</strong>
            </div>

            <div class="job-info-item">
              <span>Experience</span>
              <strong>${j.exp}</strong>
            </div>

            <div class="job-info-item">
              <span>Job Type</span>
              <strong>${j.type}</strong>
            </div>

            <div class="job-info-item">
              <span>Work Mode</span>
              <strong>${j.mode}</strong>
            </div>

            <div class="job-info-item">
              <span>Industry</span>
              <strong>${j.ind}</strong>
            </div>

            <div class="job-info-item">
              <span>Department</span>
              <strong>${j.dept}</strong>
            </div>

          </div>

        </div>

        ${
          j.sk && j.sk.length
            ? `
              <div class="job-detail-card">

                <div class="job-detail-label">
                  KEY SKILLS
                </div>

                <div class="job-skills">
                  ${j.sk.map(skill =>
                    `<span class="job-skill">${skill}</span>`
                  ).join("")}
                </div>

              </div>
            `
            : ""
        }

        ${
          jdUrl
            ? `
              <div class="job-detail-card job-jd-card">

                <div class="job-detail-label">
                  FULL JOB DESCRIPTION
                </div>

                <h3>
                  View the complete job description
                </h3>

                <p>
                  Open the complete JD for responsibilities,
                  qualifications and role-specific details.
                </p>

                <a
                  class="btn b2"
                  href="${jdUrl}"
                  target="_blank"
                  rel="noopener"
                >
                  Open Full JD →
                </a>

              </div>
            `
            : ""
        }

        <div class="job-apply-panel">

          <div>
            <div class="job-detail-label">
              INTERESTED IN THIS ROLE?
            </div>

            <h3>
              Take the next step in your career.
            </h3>

            <p>
              Submit your application through our candidate form.
            </p>
          </div>

          <a
            class="btn b1"
            href="${jobApplyUrl(j)}"
            target="_blank"
            rel="noopener"
          >
            Apply Now →
          </a>

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