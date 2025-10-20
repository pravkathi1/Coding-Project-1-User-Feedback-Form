// step 3.1 count characters as the user types (use input or keydown event)
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");

const nameCount = document.createElement("p");
const emailCount = document.createElement("p");
const commentsCount = document.createElement("p");

nameInput.insertAdjacentElement("afterend", nameCount);
emailInput.insertAdjacentElement("afterend", emailCount);
commentsInput.insertAdjacentElement("afterend", commentsCount);

nameInput.addEventListener("input", () => {
  nameCount.textContent = `Characters: ${nameInput.value.length}`;
});
emailInput.addEventListener("input", () => {
  emailCount.textContent = `Characters: ${emailInput.value.length}`;
});
commentsInput.addEventListener("input", () => {
  commentsCount.textContent = `Characters: ${commentsInput.value.length}`;
});

// step 3.2 display tooltips on field mouseover and hide on mouseout
const tooltipData = {
  name: "Enter your full name.",
  email: "Enter a valid email address.",
  comments: "Tell us what you think about your experience.",
};
[nameInput, emailInput, commentsInput].forEach((field) => {
  const tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.style.display = "none";
  tooltip.textContent = tooltipData[field.id];
  field.insertAdjacentElement("afterend", tooltip);

  field.addEventListener("mouseover", () => (tooltip.style.display = "inline"));
  field.addEventListener("mouseout", () => (tooltip.style.display = "none"));
});

// step 3.3 prevent submission if fields are empty
const form = document.getElementById("feedback-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop actual submission

  // remove old error messages
  document.querySelectorAll(".error").forEach((err) => err.remove());

  let valid = true;

  [nameInput, emailInput, commentsInput].forEach((field) => {
    if (field.value.trim() === "") {
      const error = document.createElement("p");
      error.className = "error";
      error.textContent = `${field.previousElementSibling.textContent} cannot be empty.`;
      field.insertAdjacentElement("afterend", error);
      valid = false;
    }
  });

  // If valid, we’ll handle displaying feedback in the next step
  if (valid) console.log("Form is valid!");
});

// step 3.4 append valid feedback entries

const responseSection = document.getElementById("response");
const feedbackDisplay = document.createElement("div");
feedbackDisplay.id = "feedback-display";
responseSection.appendChild(feedbackDisplay);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // reuse validation logic
  document.querySelectorAll(".error").forEach((err) => err.remove());
  let valid = true;

  [nameInput, emailInput, commentsInput].forEach((field) => {
    if (field.value.trim() === "") {
      const error = document.createElement("p");
      error.className = "error";
      error.textContent = `${field.previousElementSibling.textContent} cannot be empty.`;
      field.insertAdjacentElement("afterend", error);
      valid = false;
    }
  });

  // if all inputs are valid, add a feedback entry
  if (valid) {
    const entry = document.createElement("div");
    entry.className = "feedback-entry";
    entry.innerHTML = `
      <strong>${nameInput.value}</strong> (${emailInput.value})<br>
      ${commentsInput.value}
      <hr>
    `;
    feedbackDisplay.appendChild(entry);

    // reset form
    form.reset();
  }
});

// step 4: event bubbling and delegation
const feedbackSection = document.getElementById("feedback-section");

feedbackSection.addEventListener("input", (event) => {
  // check which field triggered the event
  const target = event.target;

  if (target.matches("#name")) {
    console.log("Name field changed:", target.value);
  } else if (target.matches("#email")) {
    console.log("Email field changed:", target.value);
  } else if (target.matches("#comments")) {
    console.log("Comments field changed:", target.value.length, "characters");
  }
});

// you can also listen for focus or blur using delegation
feedbackSection.addEventListener("focus", (event) => {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    event.target.style.borderColor = "#006747"; // highlight field
  }
}, true); // useCapture = true to catch focus before it bubbles

feedbackSection.addEventListener("blur", (event) => {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    event.target.style.borderColor = "#ccc"; // reset border
  }
}, true);

// step 5 stoppropagation

document.body.addEventListener("click", () => {
  console.log("Background clicked!");
});

const formContainer = document.getElementById("feedback-form");

formContainer.addEventListener("click", (event) => {
  // stop this click from reaching the body listener
  event.stopPropagation();
  console.log("Click happened inside the form — not passed to background.");
});
