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
});