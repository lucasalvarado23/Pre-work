$("#button1").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
	console.log($("#button1").text());
})
$("#button3").click(function(){
    $("#box").fadeOut();
    $("#button4").fadeOut("slow");
    $("#div3").fadeOut(3000);
    console.log($("#button3").text());
});

$("#button2").on("click", function() {
	// Change funText to blue.
	$("#box").css("background-color", "blue")
	console.log($("#button2").text());
})