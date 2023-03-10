$(document).ready(function(){
    
    $('.advertise-item').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText :[ '<i class="fas fa-chevron-left"></i>' ,'<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.video-popup').magnificPopup({
        type: 'image'
        // other options
      });

  });