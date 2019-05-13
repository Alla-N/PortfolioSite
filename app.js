/*слайдер*/

$('.sloganSlider').slick({
  	dots:true,
  	autoplay:true,
  	autoplaySpeed:2000,
  	responsive:true,
	pauseOnDotsHover:true,
  	
  })

/*плавный переход по якорной ссылке*/


 $(document).on('click', '#downButton', function() {
  var linkID = $(this).attr('href');
  $('html, body').animate({ 
    scrollTop: $(linkID).offset().top 
  }, 1500);
});

  $(document).on('click', '#backToTop', function() {
  var linkID = $(this).attr('href');
  $('html, body').animate({ 
    scrollTop: $(linkID).offset().top 
  }, 1000);
});

 /*анимация прогресса*/

//  setTimeout(function () {

//  jQuery(function($){
// $(".skils").viewportChecker({
// callbackFunction:function(){

// 	$("[class*='progress'] > span").each(function() {

//         $(this)

//                 .data("origWidth", $(this).width())

//                 .width(0)

//                 .animate({

//                         width: $(this).data("origWidth")

//                 }, 4000);

// });	
// }
// });
// });


// },4000);


setInterval(function () {

 jQuery(function($){

  $("[class*='progress'] > span").each(function() {

        $(this)

                .data("origWidth", $(this).width())

                .width(0)

                .animate({

                        width: $(this).data("origWidth")

                }, 3000);

}); 
});


},4000);

