// import 'jquery';
// import 'slick-carousel/slick/slick.min.js'

document.addEventListener('DOMContentLoaded', () => {

// Menu
    const menuBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
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
	})
});
