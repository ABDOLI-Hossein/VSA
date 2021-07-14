$(document).ready(function(){
    $(".saSlider1").owlCarousel();
});
$('.saSlider1').owlCarousel({
    loop:true,
    animateOut: 'animate__zoomOut',
    animateIn: 'animate__zoomIn',
    margin:10,
  	mouseDrag: false,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1,
            nav:false,
            dots: true,
        }
    }
})



$('.saSlider2').owlCarousel({
    loop:false,
    margin:10,
    animateOut: 'animate__slideOutDown',
    animateIn: 'animate__slideInDown',
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1,
            nav:false,
            dots: true,
        }
    }
})
  $('.saSlider3').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots: true,
    mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1,
            nav:false,
            dots: true,
        }
    }
})

  
  
  
    $('.saRecommendations').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1,
            nav:false,
            dots: true,
        }
    }
})


$('.saPatriotSeriesOwl').owlCarousel({
    loop:false,
    margin:10,
    animateOut: 'animate__fadeOutDown',
    animateIn: 'animate__fadeInUp',
    nav:false,
    dots: true,
    mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1,
            nav:false,
            dots: true,
        }
    }
})





$(document).ready(function(){
    $(".vca-owl").owlCarousel();
});
$('.vca-owl').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:3,

        },
        1000:{
            items:4,
        	dots: true
        }
    }
})




