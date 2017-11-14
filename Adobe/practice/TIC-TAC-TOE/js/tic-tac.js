$("document").ready(function(){
	count = 1;
	var pattern1="fa fa-close";
	var pattern2="fa fa-circle-o";
	$(".game td").click(function(){
		$(this).html("<i> </i>");
			count ++;
		if(count % 2 == 0){
			
			$(this).find("i").addClass(pattern1);

		}else{
			$(this).find("i").addClass(pattern2);
		}

		if($(".game").find(".item1 i").hasClass(pattern1) && $(".game").find(".item2 i").hasClass(pattern1) && $(".game").find(".item3 i").hasClass(pattern1)){
			$(".div1").text("Player1 Won");
			
		}else if($(".game").find(".item1 i").hasClass(pattern2) && $(".game").find(".item2 i").hasClass(pattern2) && $(".game").find(".item3 i").hasClass(pattern2)){
			$(".div1").text("Player2 Won");
		}
		if ($(".game").find(".item4 i").hasClass(pattern1) && $(".game").find(".item5 i").hasClass(pattern1) && $(".game").find(".item6 i").hasClass(pattern1)){
			$(".div1").text("Player1 Won");
		}else if ($(".game").find(".item4 i").hasClass(pattern2) && $(".game").find(".item5 i").hasClass(pattern2) && $(".game").find(".item6 i").hasClass(pattern2)){
			$(".div1").text("Player2 Won");
		} 
		if ($(".game").find(".item7 i").hasClass(pattern1) && $(".game").find(".item8 i").hasClass(pattern1) && $(".game").find(".item9 i").hasClass(pattern1) ){
			$(".div1").text("Player1 Won");
		}else if ($(".game").find(".item7 i").hasClass(pattern2) && $(".game").find(".item8 i").hasClass(pattern2) && $(".game").find(".item9 i").hasClass(pattern2)){
			$(".div1").text("Player2 Won");
		}
		if ($(".game").find(".item1 i").hasClass(pattern1) && $(".game").find(".item5 i").hasClass(pattern1) && $(".game").find(".item9 i").hasClass(pattern1)){		
			$(".div1").text("Player1 Won");
		}else if ($(".game").find(".item1 i").hasClass(pattern2) && $(".game").find(".item5 i").hasClass(pattern2) && $(".game").find(".item9 i").hasClass(pattern2) ){		
			$(".div1").text("Player2 Won");
		}
		if ($(".game").find(".item3 i").hasClass(pattern1) && $(".game").find(".item5 i").hasClass(pattern1) && $(".game").find(".item7 i").hasClass(pattern1)){
			$(".div1").text("Player1 Won");
		}else if ($(".game").find(".item3 i").hasClass(pattern2) && $(".game").find(".item5 i").hasClass(pattern2) && $(".game").find(".item7 i").hasClass(pattern2)){
			$(".div1").text("Player2 Won");
		}
		if ($(".game").find(".item1 i").hasClass(pattern1) && $(".game").find(".item4 i").hasClass(pattern1) && $(".game").find(".item7 i").hasClass(pattern1) ){
			$(".div1").text("Player1 Won");
		}else if ($(".game").find(".item1 i").hasClass(pattern2) && $(".game").find(".item4 i").hasClass(pattern2) && $(".game").find(".item7 i").hasClass(pattern2)){
			$(".div1").text("Player2 Won");
		}
		if ($(".game").find(".item2 i").hasClass(pattern1) && $(".game").find(".item5 i").hasClass(pattern1) && $(".game").find(".item8 i").hasClass(pattern1)){
			$(".div1").text("Player1 Won");
		}else if ($(".game").find(".item2 i").hasClass(pattern2) && $(".game").find(".item5 i").hasClass(pattern2) && $(".game").find(".item8 i").hasClass(pattern2)){
			$(".div1").text("Player2 Won");
		}
		if ($(".game").find(".item3 i").hasClass(pattern1) && $(".game").find(".item6 i").hasClass(pattern1) && $(".game").find(".item9 i").hasClass(pattern1)){
			$(".div1").text("Player1 Won");
		}else if ($(".game").find(".item3 i").hasClass(pattern2) && $(".game").find(".item6 i").hasClass(pattern2) && $(".game").find(".item9 i").hasClass(pattern2)){
			$(".div1").text("Player2 Won");
		}
	});
		
	
});