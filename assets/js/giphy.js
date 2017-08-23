// Holds topics
var topics = ["Looney Tunes", "Scuba", "Trending", "Evil Cats", "Laser", "Coding"];

// Loops through topics and creates buttons
$.each(topics, function(index, value){
	$("#buttons").append("<button class='btn btn-primary'>" + value + "</button>");
});

// on button click get gifs with that topic name
$(document).on("click", ".btn", function(){
	loadGif($(this).text());
});

// Switches the static image with the Gif and vice versa
$(document).on("click", ".gif", function(){
	var newDataUrl =  $(this).attr("src");
	$(this).attr("src", $(this).attr("data-url"));
	$(this).attr("data-url", newDataUrl); 
});

// Giphy api call
function loadGif(topic){
	$.ajax({
	   url: "https://api.giphy.com/v1/gifs/search?q=" + topic + "&rating=g&rating=pg&rating=pg-13&limit=10&api_key=dc6zaTOxFJmzC",
	   method: "GET"
	}).done(function(response) {
		console.log(response);
	 	// Loops through api and gets the gifs and static image and put them in a image tag
		$.each(response.data, function(index, gif){

	   	$("#images").append("<img src='" + gif.images.fixed_height_still.url + "'' class='gif' data-url='" + gif.images.fixed_height.url + "'></img>");

		});

	});
}