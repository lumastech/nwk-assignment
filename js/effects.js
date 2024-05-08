$(document).ready(function () {
  $("button").hover(
    function () {
      $(this).addClass("scale-up");
    },
    function () {
      $(this).removeClass("scale-up");
    }
  );
});
