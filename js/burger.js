$(document).ready(function() {
	
	$('.burger img').click(function() {
		$('nav ul').slideToggle(500);
	});
	
	$(window).resize(function() {
		if ($(window).width() > 587 ) {
			$('nav ul').removeAttr('style');
		}
	});
	
});
