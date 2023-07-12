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

function handleRegistration() {
  var firstNameInput = document.getElementById("first-name-input");
  var lastNameInput = document.getElementById("last-name-input");
  var emailInput = document.getElementById("email-input");
  var passwordInput = document.getElementById("password-input");

  var firstNameValid = validateFirstName(firstNameInput.value);
  var lastNameValid = validateLastName(lastNameInput.value);
  var emailValid = validateEmail(emailInput.value);
  var passwordValid = validatePassword(passwordInput.value);

  if (firstNameValid && lastNameValid && emailValid && passwordValid) {
    alert("Registration successful!");
  } else {
    if (!firstNameValid) {
      firstNameInput.classList.add("is-invalid");
    } else {
      firstNameInput.classList.remove("is-invalid");
    }

    if (!lastNameValid) {
      lastNameInput.classList.add("is-invalid");
    } else {
      lastNameInput.classList.remove("is-invalid");
    }

    if (!emailValid) {
      emailInput.classList.add("is-invalid");
    } else {
      emailInput.classList.remove("is-invalid");
    }

    if (!passwordValid) {
      passwordInput.classList.add("is-invalid");
    } else {
      passwordInput.classList.remove("is-invalid");
    }
  }
}

document
  .getElementById("submit-btn")
  .addEventListener("click", handleRegistration);
