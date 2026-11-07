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

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const tradition = document.getElementById("tradition").value;
    const message = document.getElementById("message").value.trim();

    const errors = { name: "", email: "", subject: "", tradition: "", message: "" };
    if (name.length < 2) errors.name = "Please enter your name (at least 2 characters).";
    if (email === "") errors.email = "Email is required.";
    else if (!isValidEmail(email)) errors.email = "Enter a valid email, for example name@example.com.";
    if (subject.length < 3) errors.subject = "Subject must be at least 3 characters.";
    if (tradition === "") errors.tradition = "Please choose a tradition.";
    if (message.length < 20) errors.message = "Message must be at least 20 characters.";

    let formIsValid = true;
    for (const fieldId in errors) {
      showError(fieldId, errors[fieldId]);
      if (errors[fieldId] !== "") { formIsValid = false; }
    }
    if (!formIsValid) {
      form.querySelector(".is-invalid").focus();
      return;
    }

    $("#form-success-text").text("Thank you, " + name + "! Your message was sent to the archive.");
    form.reset();
    $("#contact-form .is-valid").removeClass("is-valid");
    $("#form-success").hide().removeClass("d-none").fadeIn(400);
  });
}
