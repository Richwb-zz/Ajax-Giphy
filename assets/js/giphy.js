var topics = ["Looney Tunes", "Scuba", "Troll", "Evil Cats", "Laser", "Coding"];

$.each(topics, function(index, value){
	$(".container").append("<button class='btn btn-primary'>" + value + "</button>");
});


$(document).on("click", ".btn", function(){
	loadGif($(this).text());
});



function loadGif(topic){
	$.ajax({
	   url: "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=dc6zaTOxFJmzC",
	   method: "GET"
	 }).done(function(response) {
		
		$.each(response.data, function(index, gif){

	   	$(".container").append("<img src='" + gif.images.original_still.url + "'' class='gif' data-url='" + gif.images.original.url + "'></img>");

		});

	});
}