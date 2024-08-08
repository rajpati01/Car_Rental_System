document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let usernameError = document.getElementById("username-error");
  let emailError = document.getElementById("email-error");
  let passwordError = document.getElementById("password-error");
  let confirmPasswordError = document.getElementById("confirmPassword-error");

  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";

  let isValid = true;

  if (username === "") {
    usernameError.innerHTML = "Username is required.";
    isValid = false;
  }

  if (!email.includes("@")) {
    emailError.innerHTML = "Email must include @.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.innerHTML = "Email must be a valid format.";
    isValid = false;
  }

  if (password === "") {
    passwordError.innerHTML = "Password is required.";
    isValid = false;
  }

  if (confirmPassword === "") {
    confirmPasswordError.innerHTML = "Confirm password is required.";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerHTML = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Your info has been submitted successfully");
    document.getElementById("signupForm").reset();
    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";
  }
});
