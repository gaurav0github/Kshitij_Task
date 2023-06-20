var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  initialSlide: 4,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiperContainer = document.querySelector('.mySwiper');

swiperContainer.addEventListener('mouseenter', function() {
  swiper.autoplay.start();
});

swiperContainer.addEventListener('mouseleave', function() {
  swiper.autoplay.stop();
});

$(window, document, undefined).ready(function() {

    $('.input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
    
    });
  
  
  $('#tab1').on('click' , function(){
      $('#tab1').addClass('login-shadow');
     $('#tab2').removeClass('signup-shadow');
  });
  
  $('#tab2').on('click' , function(){
      $('#tab2').addClass('signup-shadow');
     $('#tab1').removeClass('login-shadow');
  
  
  });

  $(document).ready(function(){
    $('.my-sidebar').slimscroll({
        height: '100%',
        size: '3px',
        position: 'right',
        color: '#333',
        railOpacity: 0.4,
        wheelStep: 10
    });
});

document.querySelector(".first-button").addEventListener("click", function () {
  document.querySelector(".animated-icon1").classList.toggle("open");
});