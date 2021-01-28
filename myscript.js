$(document).ready(function() {
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
		$("th").css("background-color", "pink");
		$("td").css("background-color", "pink");
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#p1").click(function(){
		$(".disappear").hide();	
	});
	$("p").click(function(){
		$(this).css("background-color", "lightblue");
	});
	$("th").click(function(){
		$(this).css("background-color", "grey");
	});
	$("td").click(function(){
		$(this).css("background-color", "grey");
	});
});
