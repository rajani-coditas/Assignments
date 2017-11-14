$("document").ready(function(){
	//Addition
	$(".add").click(function(){
	  var a = $(".cal1").val();
	  var b = $(".cal2").val();
	  $(".result").val(+a + +b);
 	});

 	//substraction

 	$(".sub").click(function(){
	  var a = $(".cal1").val();
	  var b = $(".cal2").val();
	  $(".result").val(+a - +b);
 	});

 	//multiplication

 	$(".mul").click(function(){
	  var a = $(".cal1").val();
	  var b = $(".cal2").val();
	  $(".result").val(+a * +b);
 	});

 	//division

 	$(".division").click(function(){
	  var a = $(".cal1").val();
	  var b = $(".cal2").val();
	  $(".result").val(+a / +b); 
 	});
 });