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
