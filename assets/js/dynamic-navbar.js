$(document).ready(function () {
  var sections = $("section");
  var nav = $(".navbar");
  var nav_height = nav.outerHeight();
  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
      var top = $(this).offset().top - nav_height;
      var bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos < bottom) {
        nav.find(".nav-link").removeClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });
});
