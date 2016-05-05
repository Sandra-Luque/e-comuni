 var $nav = $('.g-menu');
 var $navTop = $nav.offset().top;

 var pegarNav = function(){
 	var $scrollTop = $(window).scrollTop();
 	if ($scrollTop >= $navTop){
 		$nav.addClass('sticky')
 	}else{
 		$nav.removeClass('sticky')
 	}
}
$(window).on('scroll',pegarNav);
//$(window).on('scroll',function(){
	//var $scrollTop = $(window).scrollTop();
	//$('body').css('background','red');
	//('nav').text('el scrollTop es' + $scrollTop +'px' );
//});