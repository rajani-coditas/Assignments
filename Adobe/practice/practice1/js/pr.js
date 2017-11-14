$("document").ready(function(){
	var x = [];
	$("div").click(function(){
		for(var i=1; i <= 5; i++){
			for(var j=1; j <= i ; j++){
					$(".output").append("<li>"+ j +"<li>");
			}
			$(".output li").css("display","inline")
			$(".output").append("<br>");
		}
			
	})
});