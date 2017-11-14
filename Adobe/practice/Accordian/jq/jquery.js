$("document").ready(function(){
	$(".section").slideUp();
	$(".section-head a").click(function(){
		$(this).parent().next().slideDown();
		$(this).bind("click",function(){
			$(".section").slideUp();
		})
	})
});