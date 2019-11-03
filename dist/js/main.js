// import 'jquery';
// import 'slick-carousel/slick/slick.min.js'

document.addEventListener('DOMContentLoaded', function() {

// Menu
    var menuBtn = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

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
	});

// Fancybox
    $('[data-fancybox]').fancybox({
        smallBtn : false,
		touch: false,
    });

// Tabs
    function Tabs() {
        var bindAll = function() {
            var menuElements = document.querySelectorAll('[data-tab]');
            for(var i = 0; i < menuElements.length ; i++) {
                menuElements[i].addEventListener('click', change, false);
            }
        };

        var clear = function() {
            var menuElements = document.querySelectorAll('[data-tab]');
            for(var i = 0; i < menuElements.length ; i++) {
                menuElements[i].classList.remove('active');
                var id = menuElements[i].getAttribute('data-tab');
                document.getElementById(id).classList.remove('active');
            }
        };

        var change = function(e) {
            clear();
            e.preventDefault();
            e.target.classList.add('active');
            var id = e.currentTarget.getAttribute('data-tab');
            document.getElementById(id).classList.add('active');
        };

        bindAll();
    }

    var connectTabs = new Tabs();

});
