$("document").ready(function(){
	var pattern1, pattern2, count=1;
	pattern1 = "fa fa-close";
	pattern2 = "fa fa-circle-o";
	var abc = function(){
		var Player1 = $(".one").val();
		var Player2 = $(".two").val();
		count ++;
		if($(this).children().length){
			alert("already clicked");
			return false;
		}else if(count % 2 == 0){
			$(this).html("<i> </i>");
			$(this).find("i").addClass(pattern1);
		}else{
			$(this).html("<i> </i>");
			$(this).find("i").addClass(pattern2);
		}

			
		if($(".row").find(".item1 i").hasClass(pattern1) && $(".row").find(".item2 i").hasClass(pattern1) && $(".row").find(".item3 i").hasClass(pattern1)){
			$(".div1").text(Player1+" "+"Won");
			$(".item1").css("background-color","#cccccc");
			$(".item2").css("background-color","#cccccc");
			$(".item3").css("background-color","#cccccc");
			$(".row div").unbind();
		}else if($(".row").find(".item1 i").hasClass(pattern2) && $(".row").find(".item2 i").hasClass(pattern2) && $(".row").find(".item3 i").hasClass(pattern2)){
			$(".div1").text(Player2+" "+"Won");
			$(".item1").css("background-color","red");
			$(".item2").css("background-color","red");
			$(".item3").css("background-color","red");
		}
		if ($(".row").find(".item4 i").hasClass(pattern1) && $(".row").find(".item5 i").hasClass(pattern1) && $(".row").find(".item6 i").hasClass(pattern1)){
			$(".div1").text(Player1+" "+"Won");
			$(".item4").css("background-color","#cccccc");
			$(".item5").css("background-color","#cccccc");
			$(".item6").css("background-color","#cccccc");
		}else if ($(".row").find(".item4 i").hasClass(pattern2) && $(".row").find(".item5 i").hasClass(pattern2) && $(".row").find(".item6 i").hasClass(pattern2)){
			$(".div1").text(Player2+" "+"Won");
			$(".item4").css("background-color","red");
			$(".item5").css("background-color","red");
			$(".item6").css("background-color","red");
		} 
		if ($(".row").find(".item7 i").hasClass(pattern1) && $(".row").find(".item8 i").hasClass(pattern1) && $(".row").find(".item9 i").hasClass(pattern1) ){
			$(".div1").text(Player1+" "+"Won");
			$(".item7").css("background-color","#cccccc");
			$(".item8").css("background-color","#cccccc");
			$(".item9").css("background-color","#cccccc");
		}else if ($(".row").find(".item7 i").hasClass(pattern2) && $(".row").find(".item8 i").hasClass(pattern2) && $(".row").find(".item9 i").hasClass(pattern2)){
			$(".div1").text(Player2+" "+"Won");
			$(".item7").css("background-color","red");
			$(".item8").css("background-color","red");
			$(".item9").css("background-color","red");
		}
		if ($(".row").find(".item1 i").hasClass(pattern1) && $(".row").find(".item5 i").hasClass(pattern1) && $(".row").find(".item9 i").hasClass(pattern1)){		
			$(".div1").text(Player1+" "+"Won");
			$(".item1").css("background-color","#cccccc");
			$(".item5").css("background-color","#cccccc");
			$(".item9").css("background-color","#cccccc");
		}else if ($(".row").find(".item1 i").hasClass(pattern2) && $(".row").find(".item5 i").hasClass(pattern2) && $(".row").find(".item9 i").hasClass(pattern2) ){		
			$(".div1").text(Player2+" "+"Won");
			$(".item1").css("background-color","red");
			$(".item5").css("background-color","red");
			$(".item9").css("background-color","red");
		}
		if ($(".row").find(".item3 i").hasClass(pattern1) && $(".row").find(".item5 i").hasClass(pattern1) && $(".row").find(".item7 i").hasClass(pattern1)){
			$(".div1").text(Player1+" "+"Won");
			$(".item3").css("background-color","#cccccc");
			$(".item5").css("background-color","#cccccc");
			$(".item7").css("background-color","#cccccc");
		}else if ($(".row").find(".item3 i").hasClass(pattern2) && $(".row").find(".item5 i").hasClass(pattern2) && $(".row").find(".item7 i").hasClass(pattern2)){
			$(".div1").text(Player2+" "+"Won");
			$(".item3").css("background-color","red");
			$(".item5").css("background-color","red");
			$(".item7").css("background-color","red");
		}
		if ($(".row").find(".item1 i").hasClass(pattern1) && $(".row").find(".item4 i").hasClass(pattern1) && $(".row").find(".item7 i").hasClass(pattern1) ){
			$(".div1").text(Player1+" "+"Won");
			$(".item1").css("background-color","#cccccc");
			$(".item4").css("background-color","#cccccc");
			$(".item7").css("background-color","#cccccc");
		}else if ($(".row").find(".item1 i").hasClass(pattern2) && $(".row").find(".item4 i").hasClass(pattern2) && $(".row").find(".item7 i").hasClass(pattern2)){
			$(".div1").text(Player2+" "+"Won");
			$(".item1").css("background-color","red");
			$(".item4").css("background-color","red");
			$(".item7").css("background-color","red");
		}
		if ($(".row").find(".item2 i").hasClass(pattern1) && $(".row").find(".item5 i").hasClass(pattern1) && $(".row").find(".item8 i").hasClass(pattern1)){
			$(".div1").text(Player1+" "+"Won");
			$(".item2").css("background-color","#cccccc");
			$(".item5").css("background-color","#cccccc");
			$(".item8").css("background-color","#cccccc");
		}else if ($(".row").find(".item2 i").hasClass(pattern2) && $(".row").find(".item5 i").hasClass(pattern2) && $(".row").find(".item8 i").hasClass(pattern2)){
			$(".div1").text(Player2+" "+"Won");
			$(".item2").css("background-color","red");
			$(".item5").css("background-color","red");
			$(".item8").css("background-color","red");
		}
		if ($(".row").find(".item3 i").hasClass(pattern1) && $(".row").find(".item6 i").hasClass(pattern1) && $(".row").find(".item9 i").hasClass(pattern1)){
			$(".div1").text(Player1+" "+"Won");
			$(".item3").css("background-color","#cccccc");
			$(".item6").css("background-color","#cccccc");
			$(".item9").css("background-color","#cccccc");
		}else if ($(".row").find(".item3 i").hasClass(pattern2) && $(".row").find(".item6 i").hasClass(pattern2) && $(".row").find(".item9 i").hasClass(pattern2)){
			$(".div1").text(Player2+" "+"Won");
			$(".item3").css("background-color","red");
			$(".item6").css("background-color","red");
			$(".item9").css("background-color","red");
		}
				
	}
	$(".row div").click(abc);
	$(".reset").click(function(){
		$(".row div").html("");
		$(".row div").css("background-color","#fff");
		$(".row div").click(abc);
		count=1;			
	});

});