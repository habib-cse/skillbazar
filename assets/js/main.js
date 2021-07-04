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
              items:5
          },
          1200:{
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
              items:2
          },
          1000:{
              items:3
          },
          1200:{
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
              items:3
          },
          1200:{
              items:4
          }
        }
    });
});



var screen_size = window.innerWidth;
if(screen_size > 768) {
// Stricky Menu
    var sticky_menu = document.getElementById("sticky_menu");
    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            sticky_menu.classList.add('sticky_menu');
        } else {
            sticky_menu.classList.remove('sticky_menu');
        }
    };
}else{

    // Stricky Mobile Menu
    var sticky_mobile_menu = document.getElementById("sticky_mobile_menu");
    window.onscroll = function() {
        if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
            sticky_mobile_menu.classList.add('sticky_mobile_menu');
        } else {
            sticky_mobile_menu.classList.remove('sticky_mobile_menu');
        }
    };
}



function OpenNotify() {
    var get_id = document.getElementById('notification');
    var get_wish = document.getElementById('wishlist');
    var get_cart = document.getElementById('go_cart');
    var get_profile = document.getElementById('profile_info');

    if( get_id.style.opacity == 0 ) {
        get_id.style.opacity = 1;
        get_id.style.visibility = 'visible';

        get_wish.style.opacity = 0;
        get_wish.style.visibility = 'hidden';

        get_cart.style.opacity = 0;
        get_cart.style.visibility = 'hidden';

        get_profile.style.opacity = 0;
        get_profile.style.visibility = 'hidden';
    } else {
        get_id.style.opacity = 0;
        get_id.style.visibility = 'hidden';
    }
}


function OpenWishlist() {
    var get_id = document.getElementById('wishlist');
    var get_notify = document.getElementById('notification');
    var get_cart = document.getElementById('go_cart');
    var get_profile = document.getElementById('profile_info');

    if( get_id.style.opacity == 0 ) {
        get_id.style.opacity = 1;
        get_id.style.visibility = 'visible';

        get_cart.style.opacity = 0;
        get_cart.style.visibility = 'hidden';

        get_notify.style.opacity = 0;
        get_notify.style.visibility = 'hidden';

        get_profile.style.opacity = 0;
        get_profile.style.visibility = 'hidden';
    } else {
        get_id.style.opacity = 0;
        get_id.style.visibility = 'hidden';
    }
}


function OpenCart() {
    var get_id = document.getElementById('go_cart');
    var get_wish = document.getElementById('wishlist');
    var get_notify = document.getElementById('notification');
    var get_profile = document.getElementById('profile_info');

    if( get_id.style.opacity == 0 ) {
        get_id.style.opacity = 1;
        get_id.style.visibility = 'visible';

        get_wish.style.opacity = 0;
        get_wish.style.visibility = 'hidden';

        get_notify.style.opacity = 0;
        get_notify.style.visibility = 'hidden';

        get_profile.style.opacity = 0;
        get_profile.style.visibility = 'hidden';
    } else {
        get_id.style.opacity = 0;
        get_id.style.visibility = 'hidden';
    }
}


function OpenProfile() {
    var get_id = document.getElementById('profile_info');
    var get_cart = document.getElementById('go_cart');
    var get_wish = document.getElementById('wishlist');
    var get_notify = document.getElementById('notification');

    if( get_id.style.opacity == 0 ) {
        get_id.style.opacity = 1;
        get_id.style.visibility = 'visible';

        get_wish.style.opacity = 0;
        get_wish.style.visibility = 'hidden';

        get_notify.style.opacity = 0;
        get_notify.style.visibility = 'hidden';

        get_cart.style.opacity = 0;
        get_cart.style.visibility = 'hidden';
    } else {
        get_id.style.opacity = 0;
        get_id.style.visibility = 'hidden';
    }
}




var player = videojs('video');

player.playlist([{
  sources: [{
    src: 'assets/video/class2.mkv',
    type: 'video/mp4'
  }],
  poster: 'assets/video/posters/class1.jpg'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
}, {
  sources: [{
    src: 'http://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://www.videojs.com/img/poster.jpg'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/video/poster.png'
}]);

// Play through the playlist automatically.
player.playlist.autoadvance(0);
