$(window).on('load',function(){
  var window_width = window.innerWidth

  var padding = '0px'
  if(window_width > 800) {padding = ((window_width - 746) / 2) + 'px'}
  $('.slider_results').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: padding,
    initialSlide: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<button type="button" class="slick-prev"><span>&#xf053;</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span>&#xf054;</span></button>',
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerPadding: '0'
        }
      }
    ]
  });
});
