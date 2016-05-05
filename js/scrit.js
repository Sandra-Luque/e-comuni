$(document).ready(function(){
	$('#text_slider div:gt(0)').hide();
	setInterval(function(){
		$('#text_slider div:first').fadeOut(500).next().fadeIn(1000).end().appendTo('#text_slider');
	}, 3000);



});

