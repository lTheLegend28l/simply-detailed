var scheduleNow2Position = $(".scheduleNow2").offset().top * 0.85;
let packageContainerHeight = $(".package-container-1").height();
console.log(packageContainerHeight);

// Setup
$(".exit-1").hide();
$(".exit-2").hide();
$(".exit-3").hide();
$(".scheduleNow").fadeOut(500);
$(".logo").addClass("logo-animation").addClass("logo-animation2");

let flag = true;

// Scrolling Animations
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".navbar").addClass("navbar-border");
  } else {
    $(".navbar").removeClass("navbar-border");
  }
  if (scroll > scheduleNow2Position) {
    $(".scheduleNow").fadeIn(500);
    $(".logo").removeClass("logo-animation2").removeClass("logo-animation");
  } else {
    $(".scheduleNow").fadeOut(500);
    $(".logo").addClass("logo-animation").addClass("logo-animation2");
  }
});

// More Info Animations
// More Info 1
$("#moreInfo1").click(function () {
  $("#moreInfo1").fadeOut();
  $(".package-container-2").fadeOut(300);
  $(".package-container-3").fadeOut(300);
  $(".packages-img-1").animate({ opacity: "0" }, 300);
  $(".package-1-inner-container").animate({ opacity: "0" }, 300);
  setTimeout(() => {
    $(".package-container-1")
      .addClass("package-container-1-animation")
      .animate({ height: "56vh" });
  }, 300);
  setTimeout(() => {
    $(".packages-img-1")
      .addClass("packages-img-1-animation")
      .animate({ opacity: "1" }, 500);
    $(".package-1-inner-container").addClass(
      "package-inner-container-animation"
    );
    $(".package-container-1").addClass("package-container-1-animation");;
    $(".exit-1").fadeIn();
    $(".package-1-inner-container").animate({ opacity: "1" }, 500);
    $(".packages-body-1").fadeIn().addClass("packages-body-1-animation");
  }, 1000);
});

// Exit 1
$(".exit-1").click(function () {
  $(".packages-img-1").animate({ opacity: "0" }, 300);
  $(".exit-1").fadeOut();
  $(".package-1-inner-container").animate({ opacity: "0" }, 300);
  setTimeout(() => {
    $(".package-1-inner-container").removeClass(
      "package-inner-container-animation"
    );
    $(".packages-img-1").removeClass("packages-img-1-animation");
    $(".packages-body-1").fadeOut().addClass("packages-body-1-animation");
  }, 300);
  setTimeout(() => {
    $(".package-container-1")
      .removeClass("package-container-1-animation").animate({ height: `${packageContainerHeight}px` });
  }, 600);
  setTimeout(() => {
    $(".packages-img-1").animate({ opacity: "1" }, 300);
    $(".package-1-inner-container").animate({ opacity: "1" }, 300);
    $("#moreInfo1").fadeIn();
    $(".package-container-2").fadeIn(300);
    $(".package-container-3").fadeIn(300);
  }, 1100);
});

// More info 2
$("#moreInfo2").click(function () {
  $("#moreInfo2").fadeOut();
  $(".package-container-1").fadeOut(300);
  $(".package-container-3").fadeOut(300);
  $(".packages-img-2").animate({ opacity: "0" }, 300);
  $(".package-2-inner-container").animate({ opacity: "0" }, 300);
  setTimeout(() => {
    $(".package-container-2")
      .addClass("package-container-2-animation")
      .animate({ height: "56vh" });
      $(".package-row").removeClass("col-lg-4");
  }, 300);
  setTimeout(() => {
    $(".packages-img-2")
      .addClass("packages-img-2-animation")
      .animate({ opacity: "1" }, 500);
    $(".package-2-inner-container").addClass(
      "package-inner-container-animation"
    );
    $(".package-container-2").addClass("package-container-2-animation");;
    $(".exit-2").fadeIn();
    $(".package-2-inner-container").animate({ opacity: "1" }, 500);
    $(".packages-body-2").fadeIn().addClass("packages-body-1-animation");
  }, 1000);
});
