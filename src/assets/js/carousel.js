// Initializing slick carousel
$(document).ready(function () {
  $('.features__carousel').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
  });
});

var width = document.documentElement.clientWidth;

if (width <= 768) {

}
