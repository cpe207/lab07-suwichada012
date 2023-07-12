//simple email validation
function validateFirstName(firstName) {
  return firstName.trim().length > 0;
}

function validateLastName(lastName) {
  return lastName.trim().length > 0;
}

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function validatePassword(password) {
  return password.length >= 6;
}

function addCheckmarkIcon(input) {
  var checkmarkIcon = document.createElement("i");
  checkmarkIcon.classList.add(
    "fas",
    "fa-check",
    "position-absolute",
    "end-0",
    "top-50",
    "translate-middle-y",
    "text-success"
  );
  input.parentNode.appendChild(checkmarkIcon);
}

function removeCheckmarkIcon(input) {
  var checkmarkIcon = input.parentNode.querySelector(".fa-check");
  if (checkmarkIcon) {
    checkmarkIcon.remove();
  }
}
function removeValidationClasses(input) {
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");
}

function handleRegistration() {
  var firstNameInput = document.getElementById("first-name-input");
  var lastNameInput = document.getElementById("last-name-input");
  var emailInput = document.getElementById("email-input");
  var passwordInput = document.getElementById("password-input");

  var firstNameValid = validateFirstName(firstNameInput.value);
  var lastNameValid = validateLastName(lastNameInput.value);
  var emailValid = validateEmail(emailInput.value);
  var passwordValid = validatePassword(passwordInput.value);

  removeValidationClasses(firstNameInput);
  removeValidationClasses(lastNameInput);
  removeValidationClasses(emailInput);
  removeValidationClasses(passwordInput);

  if (firstNameValid) {
    firstNameInput.classList.add("is-valid");
    addCheckmarkIcon(firstNameInput);
  } else {
    firstNameInput.classList.add("is-invalid");
  }

  if (lastNameValid) {
    lastNameInput.classList.add("is-valid");
    addCheckmarkIcon(lastNameInput);
  } else {
    lastNameInput.classList.add("is-invalid");
  }

  if (emailValid) {
    emailInput.classList.add("is-valid");
    addCheckmarkIcon(emailInput);
  } else {
    emailInput.classList.add("is-invalid");
  }

  if (passwordValid) {
    passwordInput.classList.add("is-valid");
    addCheckmarkIcon(passwordInput);
  } else {
    passwordInput.classList.add("is-invalid");
  }

  if (firstNameValid && lastNameValid && emailValid && passwordValid) {
    alert("Registration successful!");
  }
}

function clearValidationOnInput() {
  var inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      removeValidationClasses(input);
    });
  });
}

document
  .getElementById("submit-btn")
  .addEventListener("click", handleRegistration);

clearValidationOnInput();
