$(document).ready(function() {

	$.fn.justme = function(callback){
	    callback.apply(this[0]);
	    return this;
	};

	setTimeout(function() {
		$('#Layer_1 g path').attr('class', 'shrink');
		$('svg').attr('class', 'shrink');
	}, 2000);

	setTimeout(function(index) {
		// function animateimg(){
		//     $('svg').justme(function(i){
		//     	console.log("yeah");
		//         var x = $('.header'+ i).offset().left;
		//         var y = $('.header'+ i).offset().top;
		        
		//         var xi = $(this).offset().left;
		//         var yi = $(this).offset().top;
		//         $(this).css('left', xi).css('top', yi);
		       
		//              $(this).animate({
		// 		        left: x,
		// 		        top: y
		//              })
		//     });
		// }
		// console.log('yo');
		// animateimg();
		$('svg').animate({
			top: -50%
			left: 50
		}).prependTo($(".header")).css({
		      top: 'auto',
		      left: 'auto',
		      right: 'auto',
		      bottom: 'auto'

		});
    }, 5000);


// 	setTimeout(function() {
// 		// var div2Pos = $(".header").position();
// 		// $("svg").css({
// 		//     position: 'absolute',
// 		//     top: $("svg").position().top,
// 		//     left: $("svg").position().left,
// 		//     bottom: 'auto',
// 		//     right: 'auto'
// 		// });
// 		// $("svg").animate({
// 		//     top: div2Pos.top
// 		// }, 3000);

// 	}, 7000);
});
