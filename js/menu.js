 $(document).ready(function() {
 	$(".img-hide").on("click" , imgMenu)
   })

 function imgMenu(){
 	$(this).css({
 		"display" : "none",
 	});
 	$(".nav-hide").css({
 		"display" : "block",
 	});
 	$("h1").css({
 		"display" : "none",
 	});
 	$(".nav-hide").dblclick(function() {
 	$(this).hide()
 	$("h1").css({
 		"display" : "block",
 	})
   });

 }