/*
  =========================================================
  ACE TALENT CONSULTING
  MAIN ROUTER + FOOTER + NAVIGATION
  =========================================================
*/

let J = {};


/*
  =========================================================
  GOOGLE SHEET JOB DATABASE API
  =========================================================
*/

const JOB_API_URL =
  "https://script.google.com/macros/s/AKfycbwICD54M3asYqpzwOCVMZ7SPELShfZ7XmJl1cPMJ3FsZwzqk35r-4TN5QkXDWYnHpA6/exec";


/*
  =========================================================
  HELPERS FOR GOOGLE SHEET JOB DATA
  =========================================================
*/

function cleanValue(value) {
  return String(value ?? "").trim();
}


function parseSkills(value) {
  return cleanValue(value)
    .split(/[,;\n]+/)
    .map(x => x.trim())
    .filter(Boolean);
}


function formatPostedDate(value) {
  const raw = cleanValue(value);

  if (!raw) {
    return "";
  }

  const date = new Date(raw);

  if (Number.isNaN(date.getTime())) {
    return raw;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}


/*
  Convert Google Sheet row into the job format
  already used by pages.js
*/

function normalizeSheetJob(row) {
  const id = cleanValue(row["Job ID"]);

  if (!id) {
    return null;
  }

  const jdLink = cleanValue(row["JD Document Link"]);

  return {
    id: id,
    client: cleanValue(row["Client Name"]),
    t: cleanValue(row["Job Title"]),
    loc: cleanValue(row["Location"]),
    exp: cleanValue(row["Experience"]),
    type: cleanValue(row["Job Type"]),
    mode: cleanValue(row["Work Mode"]),
    ind: cleanValue(row["Industry"]),
    dept: cleanValue(row["Department"]),
    sk: parseSkills(row["Skills"]),
    posted: formatPostedDate(row["Posted Date"]),

    /*
      Only accept an actual URL.
      Example:
      https://docs.google.com/document/...
    */
    jdUrl: jdLink.startsWith("http")
      ? jdLink
      : ""
  };
}


/*
  =========================================================
  LOAD JOBS FROM GOOGLE SHEET
  =========================================================
*/

async function loadJobsFromSheet() {
  try {
    const response = await fetch(
      JOB_API_URL + "?t=" + Date.now(),
      {
        method: "GET",
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(
        "Job API returned status " + response.status
      );
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error(
        "Job API did not return an array"
      );
    }

    const sheetJobs = data
      .map(normalizeSheetJob)
      .filter(Boolean);


    /*
      JB already exists in data.js.
      Replace its contents with Google Sheet jobs.
    */

    JB.splice(
      0,
      JB.length,
      ...sheetJobs
    );


    console.log(
      "ACE Jobs loaded from Google Sheet:",
      JB.length
    );


    /*
      Re-render current page after Sheet data loads.
    */

    route();

  } catch (error) {

    console.error(
      "Unable to load jobs from Google Sheet:",
      error
    );

    console.warn(
      "Using fallback jobs from data.js"
    );

    /*
      Keep website working even if API fails.
    */

    route();
  }
}


/*
  =========================================================
  FOOTER NAVIGATION DATA
  =========================================================
*/

const FT = [
  [
    "Company",
    [
      ["About Us", "about"],
      ["Services", "services"],
      ["Industries", "industries"],
      ["Careers", "candidates"],
      ["Gallery", "gallery"],
      ["Insights", "insights"],
      ["Contact", "contact"]
    ]
  ],

  [
    "For Employers",
    [
      ["Hire Talent", "employers"],
      ["Submit Requirement", "employers"],
      ["Workforce Solutions", "services/workforce-solutions"]
    ]
  ],

  [
    "For Candidates",
    [
      ["Find Jobs", "jobs"],
      ["Submit Resume", "candidates"],
      ["Career Advice", "insights"]
    ]
  ],

  [
    "Services",
    SV.map(s => [
      s[1],
      "services/" + s[0]
    ])
  ]
];


/*
  =========================================================
  ELEMENT SELECTOR
  =========================================================
*/

const $ = s => document.querySelector(s);


/*
  =========================================================
  SERVICES DROPDOWN
  =========================================================
*/

const serviceMenu = $("#mS");

if (serviceMenu) {
  serviceMenu.innerHTML = SV.map(
    s => `
      <a href="#/services/${s[0]}">
        ${s[1]}
      </a>
    `
  ).join("");
}


/*
  =========================================================
  INDUSTRIES DROPDOWN
  =========================================================
*/

const industryMenu = $("#mI");

if (industryMenu) {
  industryMenu.innerHTML = IN.map(
    s => `
      <a href="#/industries/${s[0]}">
        ${s[1]}
      </a>
    `
  ).join("");
}


/*
  =========================================================
  FOOTER
  =========================================================
*/

const footer = $("#ft");

if (footer) {
  footer.innerHTML = `
    <div class="footer-main">

      <div class="footer-company">

        <div class="logo">
          <b>ACE</b> TALENT
          <small>CONSULTING</small>
        </div>

        <p class="footer-tagline">
          Recruitment, staffing and workforce solutions
          for businesses across India.
        </p>

        <div class="footer-contact">

          <a href="tel:+919833763399">
            +91 9833763399
          </a>

          <a href="mailto:hr@acetalentconsulting.com">
            hr@acetalentconsulting.com
          </a>

        </div>

        <p class="footer-address">
          Swastik Chambers, 714-715, 7th Floor,<br>
          S.G. Barve Marg, Swastik Park,<br>
          Chembur East, Mumbai,<br>
          Maharashtra - 400071
        </p>

        <div class="footer-social">

          <span>
            Follow Us
          </span>

          <div class="social-icons">

            <a
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              title="LinkedIn">
              in
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              title="Instagram">
              ◎
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              title="Facebook">
              f
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
              title="YouTube">
              ▶
            </a>

          </div>

        </div>

      </div>


      ${FT.map(c => `
        <div class="footer-column">

          <h4>
            ${c[0]}
          </h4>

          ${c[1].map(
            l => `
              <a href="#/${l[1]}">
                ${l[0]}
              </a>
            `
          ).join("")}

        </div>
      `).join("")}

    </div>


    <div class="footer-bottom">

      <span>
        © 2026 ACE Talent Consulting.
        All Rights Reserved.
      </span>

      <div class="footer-legal">

        <a href="#/privacy">
          Privacy Policy
        </a>

        <span>•</span>

        <a href="#/terms">
          Terms &amp; Conditions
        </a>

      </div>

    </div>


    <div class="mylotic-credit">

      Website designed &amp; developed by

      <a
        href="#"
        target="_blank"
        rel="noopener">
        Mylotic Group
      </a>

    </div>
  `;
}


/*
  =========================================================
  ROUTER
  =========================================================
*/

function route() {

  /*
    Correct hash cleanup.

    Example:
    #/
    #/about
    #/jobs
    #/jobs/JT-001
  */

  const raw = location.hash.replace(/^#\/?/, "");

  const [path, anchor] = raw.split("#");

  const p = path.split("/");

  const k = p[0];

  let h;


  /*
    =======================================================
    HOME
    =======================================================
  */

  if (!k) {

    h = P.home();

  }


  /*
    =======================================================
    SERVICES
    =======================================================
  */

  else if (k === "services") {

    h = p[1]
      ? P.service(p[1])
      : P.services();

  }


  /*
    =======================================================
    INDUSTRIES
    =======================================================
  */

  else if (k === "industries") {

    h = p[1]
      ? P.industry(p[1])
      : P.industries();

  }


  /*
    =======================================================
    JOBS
    =======================================================
  */

  else if (k === "jobs") {

    h = p[1]
      ? P.job(p[1])
      : P.jobs();

  }


  /*
    =======================================================
    APPLY
    =======================================================
  */

  else if (k === "apply") {

    h = P.apply(p[1]);

  }


  /*
    =======================================================
    PRIVACY
    =======================================================
  */

  else if (k === "privacy") {

    h = P.legal("Privacy Policy");

  }


  /*
    =======================================================
    TERMS
    =======================================================
  */

  else if (k === "terms") {

    h = P.legal("Terms & Conditions");

  }


  /*
    =======================================================
    OTHER PAGES
    =======================================================
  */

  else {

    const pageMap = {

      about: "about",

      "for-employers": "employers",

      "for-candidates": "candidates",

      contact: "contact",

      "contact-us": "contact"

    };


    const pageName =
      pageMap[k] || k;


    h =
      P[pageName]
        ? P[pageName]()
        : P.home();

  }


  /*
    =======================================================
    RENDER PAGE
    =======================================================
  */

  const app = $("#app");

  if (app) {

    app.innerHTML = h;

  }


  /*
    =======================================================
    PAGE TITLE
    =======================================================
  */

  document.title =
    (
      k
        ? k.replace(/-/g, " ") + " | "
        : ""
    ) +
    "ACE Talent Consulting";


  /*
    =======================================================
    CLOSE MOBILE MENU
    =======================================================
  */

  const header = $("#hd");

  const menuButton = $("#bg");


  if (header) {

    header.classList.remove("open");

  }


  if (menuButton) {

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  /*
    =======================================================
    SCROLL
    =======================================================
  */

  const el =
    anchor &&
    document.getElementById(anchor);


  if (el) {

    el.scrollIntoView({
      behavior: "smooth"
    });

  } else {

    window.scrollTo(0, 0);

  }


  /*
    =======================================================
    SCROLL REVEAL ANIMATION
    =======================================================
  */

  const io =
    new IntersectionObserver(
      entries => {

        entries.forEach(e => {

          if (!e.isIntersecting) {
            return;
          }


          e.target.classList.add("in");


          /*
            Counter animation
          */

          e.target
            .querySelectorAll("[data-c]")
            .forEach(c => {

              const to =
                +c.dataset.c;

              let n = 0;


              const st = () => {

                n += Math.ceil(
                  to / 40
                );


                if (n >= to) {

                  c.textContent =
                    to +
                    (c.dataset.s || "");

                } else {

                  c.textContent =
                    n;

                  requestAnimationFrame(st);

                }

              };


              st();

            });


          io.unobserve(e.target);

        });

      },
      {
        threshold: 0.12
      }
    );


  document
    .querySelectorAll(".rv")
    .forEach(e => {
      io.observe(e);
    });


  /*
    =======================================================
    JOB SEARCH FORM
    =======================================================
  */

  const sf = $("#jsf");


  if (sf) {

    sf.onsubmit = e => {

      e.preventDefault();


      J = {

        q: $("#q")
          ? $("#q").value
          : "",

        loc: $("#l")
          ? $("#l").value
          : "",

        exp: $("#x")
          ? $("#x").value
          : "",

        type: $("#t")
          ? $("#t").value
          : "",

        page: 1

      };


      location.hash = "#/jobs";

    };

  }


  /*
    =======================================================
    JOB FILTER FORM
    =======================================================
  */

  const jf = $("#jf");


  if (jf) {

    jf.onsubmit = e => {

      e.preventDefault();


      const d =
        new FormData(jf);


      J = {
        page: 1
      };


      d.forEach(
        (v, k) => {
          J[k] = v;
        }
      );


      route();

    };


    jf.onreset = e => {

      e.preventDefault();


      J = {};


      route();

    };

  }

}


/*
  =========================================================
  HASH CHANGE
  =========================================================
*/

addEventListener(
  "hashchange",
  () => {

    if (
      !location.hash.startsWith("#/jobs") &&
      !location.hash.startsWith("#/apply")
    ) {

      J = {};

    }


    route();

  }
);


/*
  =========================================================
  CLICK EVENTS
  =========================================================
*/

document.addEventListener(
  "click",
  e => {

    /*
      Pagination
    */

    const b =
      e.target.closest("[data-pg]");


    if (b) {

      J.page =
        +b.dataset.pg;

      route();

    }


    /*
      Mobile dropdown
    */

    const d =
      e.target.closest(".dd > a");


    if (
      d &&
      window.innerWidth <= 980
    ) {

      e.preventDefault();

      d.parentElement.classList.toggle("o");

    }

  }
);


/*
  =========================================================
  MOBILE MENU
  =========================================================
*/

const mobileButton = $("#bg");


if (mobileButton) {

  mobileButton.onclick = () => {

    const header = $("#hd");


    if (!header) {
      return;
    }


    const open =
      header.classList.toggle("open");


    mobileButton.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

  };

}


/*
  =========================================================
  START WEBSITE
  =========================================================
*/

/*
  Render website immediately.
  Then load latest jobs from Google Sheet.
*/

route();

loadJobsFromSheet();