$(document).ready(function(){
	
	//Scroll to Home
	$("#scrollHome").click(function() {
		$('html, body').animate({
			scrollTop: $("#home").offset().top
		}, 1000);
	});
	
	//Scroll to About
	$("#scrollAbout").click(function() {
		$('html, body').animate({
			scrollTop: $(".about").offset().top
		}, 1000);
	});
	
	//Scroll to potfolio
	$("#scrollPortfolio").click(function() {
		$('html, body').animate({
			scrollTop: $("#port").offset().top
		}, 1000);
	});
	
	//Scroll to contact form
	$("#scrollContact").click(function() {
		$('html, body').animate({
			scrollTop: $(".contact").offset().top
		}, 1000);
	});
	
	//Tribute page hover
	$("#site1").hover( function() {
		$(this).css("background-color", "#666");
		$("#span1").css("color", "#EEE");
	}, function() {
		$(this).css("background-color", ""); 
		$("#span1").css("color", "#333");
	});
	
	//Random quote generator hover
	$("#site2").hover( function() {
		$(this).css("background-color", "#666");
		$("#span2").css("color", "#EEE");
	}, function() {
		$(this).css("background-color", "");
		$("#span2").css("color", "#333");
	});
	
	//Local weather application hover
	$("#site3").hover( function() {
		$(this).css("background-color", "#666");
		$("#span3").css("color", "#EEE");
	}, function() {
		$(this).css("background-color", "");
		$("#span3").css("color", "#333");
	});
	
	//Wikipedia viewer hover
	$("#site4").hover( function() {
		$(this).css("background-color", "#666");
		$("#span4").css("color", "#EEE");
	}, function() {
		$(this).css("background-color", "");
		$("#span4").css("color", "#333");
	});
	
	//Twitch.TV JSON API hover
	$("#site5").hover( function() {
		$(this).css("background-color", "#666");
		$("#span5").css("color", "#EEE");
	}, function() {
		$(this).css("background-color", "");
		$("#span5").css("color", "#333");
	});
	
	//More in progress hover
	$("#site6").hover( function() {
		$(this).css("background-color", "#666");
		$("#span6").css("color", "#EEE");
	}, function() {
		$(this).css("background-color", "");
		$("#span6").css("color", "#333");
	});
	
	//scrollHome hover
	$("#scrollHome").hover( function() {
		$(this).css("background-color", "#DDD");
		$("#scrollHome").css("color", "#222");
	}, function() {
		$(this).css("background-color", "");
		$("#scrollHome").css("color", "#ECECEC");
	});
	
	//scrollAbout hover
	$("#scrollAbout").hover( function() {
		$(this).css("background-color", "#DDD");
		$("#scrollAbout").css("color", "#222");
	}, function() {
		$(this).css("background-color", "");
		$("#scrollAbout").css("color", "#ECECEC");
	});
	
	//scrollPortfolio hover
	$("#scrollPortfolio").hover( function() {
		$(this).css("background-color", "#DDD");
		$("#scrollPortfolio").css("color", "#222");
	}, function() {
		$(this).css("background-color", "");
		$("#scrollPortfolio").css("color", "#ECECEC");
	});
	
	//scrollContact hover
	$("#scrollContact").hover( function() {
		$(this).css("background-color", "#DDD");
		$("#scrollContact").css("color", "#222");
	}, function() {
		$(this).css("background-color", "");
		$("#scrollContact").css("color", "#ECECEC");
	});
	
	//btn1 hover
	$("#btn1").hover( function() {
		$(this).css("background-color", "#DDD");
		$("#btn1").css("color", "black");
	}, function() {
		$(this).css("background-color", "");
		$("#btn1").css("color", "#333");
	});
	
	//btn2 hover
	$("#btn2").hover( function() {
		$(this).css("background-color", "#DDD");
		$("#btn2").css("color", "#006400");
	}, function() {
		$(this).css("background-color", "");
		$("#btn2").css("color", "#333");
	});
	
	
	//btn3 hover
	$("#btn3").hover( function() {
		$(this).css("background-color", "#DDD");
		$("#btn3").css("color", "#1C87BD");
	}, function() {
		$(this).css("background-color", "");
		$("#btn3").css("color", "#333");
	});
});