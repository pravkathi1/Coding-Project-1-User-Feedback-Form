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

