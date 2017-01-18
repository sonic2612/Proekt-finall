 $(document).ready(function() {
		 $('#block').on("click" , blockEfekt);
		 // $('body').on("click" , blockEfektHide);
});

function blockEfekt(){
	$(this).css({
		"position" : "fixed",
		"top" : "30%",
		"left" : "30%",
		"z-index" : "999",
		"border" : "5px solid #808C99",
			"opacity" : "1",
	});
	$("body").css({
			"opacity" : "0.8",
		});
	$("#pd").css({
			"padding" : "6em 5em 3em",
		});
	$("#block").click(function(){
		$(this).css({
		"position" : "static",
		"top" : "none",
		"left" : "none",
		"z-index" : "none",
		"border" : "none",
			"opacity" : "1",
	});
		$("body").css({
			"opacity" : "1",
		});
	$("#pd").css({
			"padding" : "2em 1em 1em",
		});
});
}

// function blockEfektHide(){
// 	$("#block").hide();
// }