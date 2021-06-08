$(document).ready(function() {

    // Category Slider
    $('.cate-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:7
          }
        }
    });


    // Popular Curses Slider
    $('.popular-slider').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav:true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
        }
    });

    // Similar Curses Slider
    $('.similar-slider').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav:true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
        }
    });



    


});


// Stricky Menu
var sticky_menu = document.getElementById("sticky_menu");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    sticky_menu.classList.add('sticky_menu');
  } else {
    sticky_menu.classList.remove('sticky_menu');
  }
}

