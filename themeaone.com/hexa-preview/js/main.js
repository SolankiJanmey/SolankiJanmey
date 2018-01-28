(function ($) {
"use strict";

/*--
	Preloader
-----------------------------------*/
$(window).on('load', function(){
	$('.preloader').fadeOut('slow');
});
/*--
	Smooth Scroll
-----------------------------------*/
$('.button.ss').on('click', function() {
	$.smoothScroll({
	  offset: -0,
	  scrollTarget: this.hash,
	speed: 1000,
	});
	return false;
});	

	
})(jQuery);	