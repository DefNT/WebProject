const form = document.getElementById("contact-form");

function isValidEmail(email) {
  const atPosition = email.indexOf("@");
  const lastDot = email.lastIndexOf(".");
  return atPosition > 0 && lastDot > atPosition + 1 && lastDot < email.length - 1;
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  document.getElementById(fieldId + "-error").textContent = message;
  if (message === "") {
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
  } else {
    field.classList.remove("is-valid");
    field.classList.add("is-invalid");
  }
}