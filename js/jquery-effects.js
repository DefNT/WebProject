$(function () {
  $(".tradition-row").on("click", function () {
    $(this).siblings(".tradition-row").removeClass("open").find(".tradition-details").slideUp(200);
    $(this).toggleClass("open").find(".tradition-details").slideToggle(250);
  });

  $(".faq-question").on("click", function () {
    const item = $(this).closest(".faq-item");
    item.siblings(".faq-item").find(".faq-answer").slideUp(200);
    item.siblings(".faq-item").find(".faq-question").removeClass("open");
    $(this).toggleClass("open");
    $(this).next(".faq-answer").slideToggle(250);
  });

  $("#contact-form").find('input[type="text"], input[type="email"], textarea, select').on("focus blur", function (event) {
    $(this).closest(".col-12").find("label").toggleClass("label-active", event.type === "focus");
  });

  $("#form-success .btn-close").on("click", function () {
    $(this).parent().fadeOut(300);
  });
});
