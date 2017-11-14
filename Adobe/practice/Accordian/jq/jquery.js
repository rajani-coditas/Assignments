$("document").ready(function(){
	$(".section-head a").click(function(){
		$(".section").slideUp();
		$(this).parent().next().slideDown();
	})
});