document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const postalCode = document.getElementById("postcode");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("passwordconfirm");
  const submitButton = document.getElementById("submit");

  function validateField(field, messageElement, message) {
    if (field.value === "" || field.value == null) {
      messageElement.innerText = message;
      field.classList.add("input-error");
      return false;
    } else {
      messageElement.innerText = "";
      field.classList.remove("input-error");
      return true;
    }
  }

  function validatePasswordField(
    password,
    passwordConfirm,
    passwordError,
    confirmPasswordError
  ) {
    let isValid = true;
    if (password.value.length <= 6) {
      passwordError.innerText = "Password must be longer than 6 characters";
      password.classList.add("input-error");
      isValid = false;
    } else {
      passwordError.innerText = "";
      password.classList.remove("input-error");
    }
    if (password.value !== passwordConfirm.value) {
      confirmPasswordError.innerText = "Passwords do not match";
      passwordConfirm.classList.add("input-error");
      isValid = false;
    } else {
      confirmPasswordError.innerText = "";
      passwordConfirm.classList.remove("input-error");
    }
    return isValid;
  }

  function handleBlur(event) {
    const errorElementId = event.target.id + "-error";
    const errorElement = document.getElementById(errorElementId);

    if (event.target === email) {
      validateField(email, errorElement, "Email is required");
    } else if (event.target === country) {
      validateField(country, errorElement, "Country is required");
    } else if (event.target === postalCode) {
      validateField(postalCode, errorElement, "Postal code is required");
    } else if (event.target === password || event.target === passwordConfirm) {
      const passwordError = document.getElementById("password-error");
      const confirmPasswordError = document.getElementById(
        "passwordconfirm-error"
      );
      validatePasswordField(
        password,
        passwordConfirm,
        passwordError,
        confirmPasswordError
      );
    }
  }

  function validateAllFields() {
    const emailError = document.getElementById("email-error");
    const countryError = document.getElementById("country-error");
    const postcodeError = document.getElementById("postcode-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById(
      "passwordconfirm-error"
    );

    let isEmailValid = validateField(email, emailError, "Email is required");
    let isCountryValid = validateField(
      country,
      countryError,
      "Country is required"
    );
    let isPostcodeValid = validateField(
      postalCode,
      postcodeError,
      "Postal code is required"
    );
    let isPasswordValid = validatePasswordField(
      password,
      passwordConfirm,
      passwordError,
      confirmPasswordError
    );

    return isEmailValid && isCountryValid && isPostcodeValid && isPasswordValid;
  }

  email.addEventListener("blur", handleBlur);
  country.addEventListener("blur", handleBlur);
  postalCode.addEventListener("blur", handleBlur);
  password.addEventListener("blur", handleBlur);
  passwordConfirm.addEventListener("blur", handleBlur);

  submitButton.addEventListener("click", function (event) {
    if (!validateAllFields()) {
      event.preventDefault();
    }
  });
});
