$(document).ready(function(){

  ///header scroll fixed-------------
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.header-main').addClass('fixed');

        } else {
            $('.header-main').removeClass('fixed');
        }
  });
  // Mobile responsive menu------------
  $('.toggle-btn .open').click(function(){
    $(this).hide();
    $('.toggle-btn .close').show(200);
    $('ul.main-menu').show()
  })
  $('.toggle-btn .close').click(function(){
    $(this).hide();
    $('.toggle-btn .open').show();
    $('ul.main-menu').hide(500)
  })
 
  //Slick slider activation========
  $('.slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
//testimonial activation-------------
$('.single-item').slick({
  prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
});

  // counter up activation---------
  $('.counter').counterUp({
    delay: 10,
    time: 2000
    });
    //Brand logo slider activation-----------
    $('.brand').slick({
      dots: false,
      infinite: true,
      arrows:false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

// Wow slider ---------
  new WOW().init();
// Aos animation -------
  AOS.init();

// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});


})