$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

$("#textPink").on("click", function() {
	$("#funText").css("color", "green")
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "pink")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "orange")
})


$("#boxGrow").on("click", function() {
		console.log('we in here grow');
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})