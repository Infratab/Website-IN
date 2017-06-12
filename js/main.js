$(document).ready(function($) {
	function checkScroll(){
	    var startY = $('.scroll').height() - 200  ; //The point where the navbar changes in px
	    if($(window).scrollTop() > startY){
	        $('#navbar').addClass("navbar-white");
	    }else{
	        $('#navbar').removeClass("navbar-white")
	    }
	}
	if($('#navbar').length > 0){
	    $(window).on("scroll load resize", function(){
	        checkScroll();
	    });
	}

	/*Food wastage counter */
	var totalFoodWastage = 1300000000 ;
	var totalSec = 31536000;
	var averageFoodWastage = totalFoodWastage/totalSec;
	console.log(averageFoodWastage);
	var seconds = 0;
	setInterval(function(){
		seconds++;
		$('#foodSeconds').text(seconds);
		var foodWastage = Number(parseInt(seconds * averageFoodWastage)).toLocaleString();
		$('.averageFood').text(foodWastage);

	},1000);

	function pauseVideo() {
		var div = document.getElementById("popupVideo");
		var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
		div.style.display='hide';
		var func = 'pauseVideo';
		iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
	}
	$('.modal').modal({
	      dismissible: true,
	      complete: function () {
	      	console.log('modal close');
	      	pauseVideo();
	      }
		});

	$('#playVideo').click(function () {
		$('#modal1').modal('open');
		$('.modal').modal();
		$('.modal').modal({
	      dismissible: true,
	      complete: function () {
	      	console.log('modal close');
	      	pauseVideo();
	      }
		});
		var div = document.getElementById("popupVideo");
		var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
		div.style.display='';
		var func = 'playVideo';
		iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
	});

	$('#closeVideo').click(function () {
		$('#modal1').modal('close');
		pauseVideo();
	});

	

	// $('#playVideo').click(function () {
	// 	$('#modal1').modal('open');
	// 	$('.modal').modal();
	// 	$('.modal').modal({
	//       dismissible: false
	// 	});
	// 	$('.modal-content').append('<iframe src="https://www.youtube.com/embed/9yc8u471NNw?rel=0&amp;controls=0;autoplay=1"></iframe>');
	// });

	// $('#closeVideo').click(function () {
	// 	$('#modal1').modal('close');
	// 	$('.modal-content iframe').remove();
	// })

/* Know scroll */
	$("#scrollKnowus").on("click", function(e) {
			e.preventDefault();
			$("body, html").animate({
					scrollTop: $("#knowUs").offset().top - 100
			}, 600);
	});

/* Scroll to join us */
//join us scroll
	$("#scrollJoin").on("click", function(e) {
			e.preventDefault();
			$("body, html").animate({
					scrollTop: $("#joinUs").offset().top - 100
			}, 600);
	});

});
