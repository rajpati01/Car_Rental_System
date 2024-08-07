document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Clear previous error messages
    clearErrors();

    // Validate Full Name
    if (fullName.value.trim() === "") {
      showError(fullName, "Full Name is required.");
      valid = false;
    }

    // Validate Email
    if (email.value.trim() === "") {
      showError(email, "Email Address is required.");
      valid = false;
    } else if (!validateEmail(email.value.trim())) {
      showError(email, "Email Address is not valid.");
      valid = false;
    }

    // Validate Phone Number
    if (phone.value.trim() === "") {
      showError(phone, "Phone Number is required.");
      valid = false;
    } else if (!validatePhone(phone.value.trim())) {
      showError(phone, "Phone Number is not valid.");
      valid = false;
    }

    // Validate Message
    if (message.value.trim() === "") {
      showError(message, "Message is required.");
      valid = false;
    }

    // If all inputs are valid, show success message
    if (valid) {
      alert("Your info has been submitted successfully.");
      form.submit();
    }
  });

  function showError(input, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.innerText = message;
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }

  function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach((error) => error.remove());
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  }
});
