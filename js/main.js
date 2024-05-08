(function ($) {
  "use strict";

  $("button, .btn, .scale").hover(
    function () {
      $(this).addClass("scale-up");
    },
    function () {
      $(this).removeClass("scale-up");
    }
  );

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".navbar").addClass("sticky-top");
    } else {
      $(".navbar").removeClass("sticky-top");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Product carousel
  $(".product-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  $("#commentForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission
    var name = $("#commentName").val();
    var email = $("#commentEmail").val();
    var website = $("#commentWebsite").val();
    var content = $("#commentContent").val();
    var date = new Date().toLocaleDateString(); // Get current date
    if (name == "" || content == "") {
      alert("Please enter your name and  your comment!");
      return;
    }

    // Construct new comment HTML
    var newComment = '<div class="d-flex mb-4">';
    newComment +=
      '<img src="/img/user.png" class="img-fluid" style="width: 45px; height: 45px;">';
    newComment += '<div class="ps-3">';
    newComment +=
      '<h6><a href="#">' +
      name +
      "</a> <small><i>" +
      date +
      "</i></small></h6>";
    newComment += "<p>" + content + "</p>";
    newComment += '<button class="btn btn-sm btn-primary">Reply</button>';
    newComment += "</div></div>";

    // Append new comment to the comments section
    $("#comments").append(newComment);

    // Clear form fields after submission
    $("#commentName").val("");
    $("#commentEmail").val("");
    $("#commentWebsite").val("");
    $("#commentContent").val("");
  });
})(jQuery);
