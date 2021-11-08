$(function () {
$('.home__slider').slick({
  fade: true,
});
  $('.tar__slider').slick({
    centerMode: true,
    centerPadding: '180px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '180px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})