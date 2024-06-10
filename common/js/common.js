$( document ).ready( function() {
    wow = new WOW({
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
        }
    });
    wow.init();
});
    window.onload = function(){$(window).resize();
	var a=$("#bo_gall .gall_img img").outerHeight();
    $("#bo_gall .gall_img span").css("line-height",a+'px');

	$(window).resize();
}

$(function(){
    console.log('theme/js/common.js')
	var ww = $(window).width();
    $('.menu_trigger_wrap').click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $("#header .all_nav").addClass("on");
            $('#menu_bg').stop().fadeIn(1000);
        }else{
            $("#header .all_nav").removeClass("on");
            $('#menu_bg').stop().fadeOut(1000);
        }
    });

	// LANGUAGE 메뉴 슬라이드 다운
	$(".lang_menu").click(function(){
		$(this).toggleClass("on");
		$(this).find("ul").slideToggle();
	});
});