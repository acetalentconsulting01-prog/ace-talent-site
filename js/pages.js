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