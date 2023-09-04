const form = document.getElementById("form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === "") {
    firstName.classList.add("active");
    firstNameError.classList.add("error-message");
  } else {
    firstNameError.classList.remove("error-message");
  }
  if (lastName.value === "") {
    lastName.classList.add("active");
    lastNameError.classList.add("error-message");
  } else {
    lastNameError.classList.remove("error-message");
  }
  if (email.value === "") {
    email.classList.add("active");
    emailError.classList.add("error-message");
  } else {
    emailError.classList.remove("error-message");
  }
  if (password.value === "") {
    password.classList.add("active");
    passwordError.classList.add("error-message");
  } else {
    passwordError.classList.remove("error-message");
  }
});
