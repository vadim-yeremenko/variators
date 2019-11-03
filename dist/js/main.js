// import 'jquery';
// import 'slick-carousel/slick/slick.min.js'

document.addEventListener('DOMContentLoaded', function() {

// Menu
    const menuBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function() {
            document.body.classList.toggle('menu-opened');
        });
    }
//main slider	
    $(".slider-banner").slick({
    	// autoplay: true,
  		autoplaySpeed: 4000,
	    speed: 1500,	   
	    slidesToScroll: 1,
	    slidesToShow: 1,
	    infinite: true,
	    centerMode: false,
	    variableWidth: false,
	    focusOnSelect: true,     
	    dots: true,  
	    arrows: false,
        appendDots: '.banner__wrapper'
	});

//service slider	
    $(".slider-service").slick({
    	// autoplay: true,
  		autoplaySpeed: 4000,
		fade: true,
	    speed: 1500,	   
	    slidesToScroll: 1,
	    slidesToShow: 1,
	    infinite: true,
	    centerMode: false,
	    variableWidth: false,
	    focusOnSelect: true,     
	    dots: true,  
	    arrows: false,
        // appendDots: '.banner__wrapper'
	})

// Fancybox
    $('[data-fancybox]').fancybox({
        smallBtn : false,
		touch: false,
    })

//accordion    
  $(".js-accordion").on("click", function (e) {
    let el = $(this).parent();
    el.find(".product__bottom").toggleClass("-is-active");
    $(this).toggleClass("-is-active");
    $(".product__bottom").not(el.find(".product__bottom")).removeClass("-is-active");
    $(".js-accordion").not(this).removeClass("-is-active");
  })
});
