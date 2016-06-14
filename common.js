$(document).ready(function() {


	$("#portfolio_grid").mixItUp();

	
	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});


	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline",midClick: true, showCloseBtn: true});
	

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".animation_left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_right .resume_item").animated("fadeInRight", "fadeOutRight");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp","fadeOutDown")
	function heightDetect() { 
		$(".main_head").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

$(".top_menu ul a").click(function(){
	$(".top_menu").fadeOut(600);
	$(".sandwich").removeClass("active");
	$(".top_text").removeClass("h_opasity");
});

	$(".toggle_menu").click(function(){
		if ($(".top_menu").is(":visible")){
			$(".top_text").removeClass("h_opasity");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opasity");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		};
	});


	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);
	
	});

	 $("input, select, textarea").jqBootstrapValidation();
	 
	 $(".top_menu ul a").mPageScroll2id();
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(500).fadeOut("slow"); 
});