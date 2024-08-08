document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let errorDiv = document.getElementById("error-message");
  errorDiv.innerHTML = "";
  let isValid = true;

  if (!email.includes("@")) {
    errorDiv.innerHTML = "Email must include @.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorDiv.innerHTML = "Email must be a valid format.";
    isValid = false;
  }

  if (isValid) {
    alert("Your info has been submitted successfully");
    document.getElementById("loginForm").reset();
    errorDiv.innerHTML = "";
  }
});
