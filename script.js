function newQuote() {
	// using quotesdesign on generating random quotes
	$.ajax( {
		url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
		success: function(data) {
			$('#randQt').text(data[0].title);
			$('#randQ').html(data[0].content);
		},
		cache: false
	});
}

function tweet(){
	var quote = $("#randQ p").text()
	var author = $("#randQt").text()
	window.open("http://twitter.com/intent/tweet?text='" + quote + "' -" + author);
}

$(document).ready(function() {
	newQuote() // generate one quote on load
	$("#reload").on("click", function(){
		newQuote()
	})
	$("#tweet").on("click", function(){
		tweet()
	})
});

