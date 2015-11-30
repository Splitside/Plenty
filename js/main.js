$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplayTimeout:4000
	});

	$('.owl-carousel-fade').owlCarousel({
		animateOut: 'fadeOut',
		items:1,
		autoplay:true,
		autoplayTimeout:6000,
		loop:true
	});

	$('#menu').click(function(){
		$('.mobile-menu').slideToggle();
	});

});