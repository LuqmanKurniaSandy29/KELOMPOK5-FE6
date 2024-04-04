$(document).ready(function () {
  $("#faq-store").click(function () {
    $(".accordion-store").show();
    $(".accordion-vape").hide();
  });
  $("#faq-vape").click(function () {
    $(".accordion-store").hide();
    $(".accordion-vape").show();
  });
});
