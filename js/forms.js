/*
=========================================================
ACE TALENT CONSULTING
FORM CONFIGURATION + VALIDATION + SUBMISSION
=========================================================
*/


/*
=========================================================
CONSTANTS
=========================================================
*/

const YN = [
  "Full-time",
  "Contract",
  "Internship"
];

const EXP = [
  "0–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years"
];


/*
=========================================================
GOOGLE APPS SCRIPT URL
=========================================================
*/

const HIRING_REQUIREMENTS_API =
  "https://script.google.com/macros/s/AKfycbwICD54M3asYqpzwOCVMZ7SPELShfZ7XmJl1cPMJ3FsZwzqk35r-4TN5QkXDWYnHpA6/exec";


/*
=========================================================
FORM CONFIGURATION
=========================================================
*/

const FM = {

  employer: {
    btn: "Submit Hiring Requirement",
    ok: "Requirement received. Our recruitment team will contact you shortly.",

    f: [
      ["name", "Name", "text", 1],
      ["company", "Company name", "text", 1],
      ["email", "Business email", "email", 1],
      ["phone", "Phone", "tel", 1],
      ["title", "Job title", "text", 1],
      ["dept", "Department"],
      ["pos", "Number of positions", "number"],
      ["exp", "Experience required", "select", 0, EXP],
      ["loc", "Location"],
      [
        "type",
        "Employment type",
        "select",
        0,
        YN
      ],
      [
        "mode",
        "Work mode",
        "select",
        0,
        [
          "On-site",
          "Hybrid",
          "Remote"
        ]
      ],
      [
        "time",
        "Hiring timeline",
        "select",
        0,
        [
          "Immediate",
          "Within 30 days",
          "1–3 months"
        ]
      ],
      [
        "desc",
        "Job description / requirement",
        "textarea",
        0
      ]
    ]
  },


  resume: {
    btn: "Submit Resume",
    ok: "Resume submitted. We will reach out when a role matches your profile.",

    f: [
      ["name", "Full name", "text", 1],
      ["email", "Email", "email", 1],
      ["phone", "Phone", "tel", 1],
      ["loc", "Location"],
      ["exp", "Experience", "select", 0, EXP],
      ["skills", "Skills"],
      ["role", "Preferred role"],
      ["ploc", "Preferred location"],
      ["cv", "Resume upload", "file", 1]
    ]
  },


  apply: {
    btn: "Submit Application",
    ok: "Application submitted. Thank you for applying.",

    f: [
      ["name", "Full name", "text", 1],
      ["email", "Email", "email", 1],
      ["phone", "Phone", "tel", 1],
      ["loc", "Current location"],
      [
        "exp",
        "Total experience",
        "select",
        0,
        EXP
      ],
      ["co", "Current company"],
      ["des", "Current designation"],
      ["role", "Expected role"],
      ["ploc", "Preferred location"],
      [
        "np",
        "Notice period",
        "select",
        0,
        [
          "Immediate",
          "15 days",
          "30 days",
          "60 days",
          "90 days"
        ]
      ],
      ["li", "LinkedIn profile", "url"],
      ["cv", "Resume upload", "file", 1],
      ["cl", "Cover letter", "textarea"]
    ]
  },


  contact: {
    btn: "Send Message",
    ok: "Message sent. We will get back to you soon.",

    f: [
      ["name", "Name", "text", 1],
      ["email", "Email", "email", 1],
      ["phone", "Phone", "tel"],
      ["company", "Company"],
      ["subject", "Subject", "text", 1],
      ["msg", "Message", "textarea", 1]
    ]
  }

};


/*
=========================================================
FIELD BUILDER
=========================================================
*/

const fld = ([
  name,
  label,
  type = "text",
  required = 0,
  options
]) => {

  const id = "f_" + name;

  const requiredAttr = required
    ? " data-req"
    : "";

  let element = "";


  if (type === "select") {

    element = `
      <select
        id="${id}"
        name="${name}"
        ${requiredAttr}
      >
        <option value="">Select</option>

        ${options
          .map(option => `
            <option value="${option}">
              ${option}
            </option>
          `)
          .join("")
        }

      </select>
    `;

  } else if (type === "textarea") {

    element = `
      <textarea
        id="${id}"
        name="${name}"
        rows="4"
        ${requiredAttr}
      ></textarea>
    `;

  } else {

    element = `
      <input
        id="${id}"
        name="${name}"
        type="${type}"
        ${requiredAttr}
        ${
          type === "file"
            ? 'accept=".pdf,.doc,.docx"'
            : ""
        }
      >
    `;
  }


  return `
    <div class="fld ${
      type === "textarea" || type === "file"
        ? "full"
        : ""
    }">

      <label for="${id}">
        ${label}${required ? " *" : ""}
      </label>

      ${element}

      <div
        class="em"
        role="alert"
      ></div>

    </div>
  `;
};


/*
=========================================================
FORM BUILDER
=========================================================
*/

const form = (
  key,
  extra = ""
) => {

  const config = FM[key];

  if (!config) {
    return "";
  }


  return `
    <form
      data-form
      data-ok="${config.ok}"
      novalidate
      class="card"
    >

      <div class="fg">

        ${config.f
          .map(fld)
          .join("")
        }

        <div class="fld full">

          <label style="font-weight:400">

            <input
              type="checkbox"
              data-req
              style="
                width:auto;
                min-height:0;
                margin-right:8px;
              "
            >

            I agree to the

            <a
              href="#/terms"
              style="color:var(--blue)"
            >
              terms
            </a>

            and

            <a
              href="#/privacy"
              style="color:var(--blue)"
            >
              privacy policy
            </a>.

            *

          </label>

          <div
            class="em"
            role="alert"
          ></div>

        </div>

        ${extra}

      </div>

      <button
        type="submit"
        class="btn b2"
        style="margin-top:8px"
      >
        ${config.btn}
      </button>

    </form>
  `;
};


/*
=========================================================
VALIDATION
=========================================================
*/

function validateForm(formElement) {

  let valid = true;

  const requiredFields =
    formElement.querySelectorAll("[data-req]");


  requiredFields.forEach(field => {

    const wrapper =
      field.closest(".fld");

    const errorElement =
      wrapper
        ? wrapper.querySelector(".em")
        : null;

    const value =
      field.type === "checkbox"
        ? field.checked
        : field.value.trim();

    let message = "";


    if (field.type === "checkbox") {

      if (!field.checked) {
        message =
          "Accept the terms to continue.";
      }

    } else if (!value) {

      message =
        "This field is required.";
    }


    if (
      !message &&
      field.type === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {

      message =
        "Enter a valid email address.";
    }


    if (
      !message &&
      field.type === "tel" &&
      !/^[+\d][\d\s-]{7,}$/.test(value)
    ) {

      message =
        "Enter a valid phone number.";
    }


    if (wrapper) {

      wrapper.classList.toggle(
        "err",
        Boolean(message)
      );
    }


    if (errorElement) {
      errorElement.textContent = message;
    }


    if (message) {
      valid = false;
    }

  });


  if (!valid) {

    formElement
      .querySelector(
        ".err input, .err select, .err textarea"
      )
      ?.focus();
  }


  return valid;
}


/*
=========================================================
NORMAL FORM SUCCESS
=========================================================
*/

function showFormSuccess(
  formElement,
  message
) {

  formElement.outerHTML = `
    <div class="card ok">

      <i>✓</i>

      <h3>
        Thank you!
      </h3>

      <p>
        ${message}
      </p>

      <a
        class="btn b2"
        href="#/"
      >
        Back to home
      </a>

    </div>
  `;
}


/*
=========================================================
NORMAL WEBSITE FORMS
=========================================================
*/

document.addEventListener(
  "submit",
  event => {

    const formElement =
      event.target.closest(
        "form[data-form]"
      );


    if (!formElement) {
      return;
    }


    /*
    Hiring popup is handled separately.
    */

    if (
      formElement.id ===
      "hiringRequirementForm"
    ) {
      return;
    }


    event.preventDefault();


    if (!validateForm(formElement)) {
      return;
    }


    const button =
      formElement.querySelector(
        'button[type="submit"]'
      );


    if (button) {

      button.disabled = true;
      button.textContent =
        "Submitting…";
    }


    setTimeout(() => {

      showFormSuccess(
        formElement,
        formElement.dataset.ok
      );

    }, 900);

  }
);


/*
=========================================================
GET POPUP FIELD
=========================================================
*/

function getHiringField(
  formElement,
  selectors
) {

  for (const selector of selectors) {

    const element =
      formElement.querySelector(selector);

    if (element) {
      return element;
    }
  }

  return null;
}


/*
=========================================================
HIRING REQUIREMENT POPUP
=========================================================
*/

document.addEventListener("submit", function (event) {

  const hiringForm =
    event.target.closest("#hiringRequirementForm");

  if (!hiringForm) {
    return;
  }

  event.preventDefault();

  const fields =
    hiringForm.querySelectorAll(
      "input:not([type='submit']):not([type='button']):not([type='checkbox']), textarea"
    );

  const values = [];

  fields.forEach(field => {
    values.push(field.value.trim());
  });

  const contactPerson = values[0] || "";
  const company = values[1] || "";
  const phone = values[2] || "";
  const email = values[3] || "";
  const profile = values[4] || "";

  if (
    !contactPerson ||
    !company ||
    !phone ||
    !email ||
    !profile
  ) {
    alert("Please fill all required fields.");
    return;
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    alert("Please enter a valid email address.");
    return;
  }

  if (
    !/^[+\d][\d\s-]{7,}$/.test(phone)
  ) {
    alert("Please enter a valid phone number.");
    return;
  }

  const button =
    hiringForm.querySelector(
      'button[type="submit"], input[type="submit"]'
    );

  if (button) {
    button.disabled = true;

    if (button.tagName === "BUTTON") {
      button.textContent = "Submitting...";
    }
  }

  const iframe =
    document.createElement("iframe");

  iframe.name =
    "aceHiring_" + Date.now();

  iframe.style.display = "none";

  document.body.appendChild(iframe);

  const form =
    document.createElement("form");

  form.method = "POST";

  form.action =
    HIRING_REQUIREMENTS_API;

  form.target =
    iframe.name;

  form.style.display = "none";

  function addInput(name, value) {

    const input =
      document.createElement("input");

    input.type = "hidden";
    input.name = name;
    input.value = value;

    form.appendChild(input);
  }

  addInput(
    "contactPersonName",
    contactPerson
  );

  addInput(
    "companyName",
    company
  );

  addInput(
    "phone",
    phone
  );

  addInput(
    "email",
    email
  );

  addInput(
    "profile",
    profile
  );

  document.body.appendChild(form);

  form.submit();

  setTimeout(function () {

    hiringForm.innerHTML = `
      <div style="text-align:center;padding:25px 10px;">
        <div style="font-size:48px;margin-bottom:10px;">
          ✓
        </div>

        <h3>Thank You!</h3>

        <p>
          Your hiring requirement has been received.
          Our recruitment team will contact you shortly.
        </p>
      </div>
    `;

  }, 1000);

  setTimeout(function () {

    form.remove();
    iframe.remove();

  }, 5000);

  setTimeout(function () {

    const popup =
      document.getElementById("hiringPopup");

    if (popup) {
      popup.style.display = "none";
    }

  }, 3500);

});


/*
=========================================================
END OF FORMS.JS
=========================================================
*/