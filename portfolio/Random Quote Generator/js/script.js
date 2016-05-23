$(document).ready(function () {
        var randId, htmlQuotes, htmlImages, tweet;
        
    //================== Generate the first random quote ===========================//
        
        $.getJSON('js/quotes.json', function(json){
            randId = Math.floor(Math.random() * json.length + 1);
			htmlQuotes = "";
			htmlImages= "";
			tweet = "";
        	json = json.filter(function (val) {
          	return (val.id == randId);
        });  
       json.forEach(function(val) {
			htmlQuotes += "<p><i class='fa fa-quote-left'></i>" + val.Quote + "<i class='fa fa-quote-right' aria-hidden='true'></i></p>";
			htmlQuotes += "<p> - " + val.Author + "</p>";
			htmlImages += "<img class='img img-responsive' src='" + val.link + "'>";
			tweet += 'https://twitter.com/intent/tweet?text=' + '"' + val.Quote + '"' + ' - ' + val.Author;
        }); // --- end .forEach ---
            console.log("json.length after filter" + json.length);
			$("#quotes").html(htmlQuotes); //Change quote text
			$("#images").html(htmlImages); //Change quote image
			$('#tweet').click(function() {
				window.open(tweet);
				return false;
				}); //Tweet onClicking button
		});	// --- end .getJSON ---
        
	//============= Generate a random quote when the button is pressed==============//
	$("#newQuote").on("click", function(){
		$.getJSON('js/quotes.json', function(json){
            randId = Math.floor(Math.random() * json.length + 1);
			htmlQuotes = "";
			htmlImages = "";
			tweet = "";
        json = json.filter(function (val) {
          return (val.id == randId);
        });  
       json.forEach(function(val) {
          htmlQuotes += "<p><i class='fa fa-quote-left'></i>" + val.Quote + "<i class='fa fa-quote-right' aria-hidden='true'></i></p>";
			 htmlQuotes += "<p> - " + val.Author + "</p>";
			 htmlImages += "<img class='img img-responsive' src='" + val.link + "'>";
			 tweet += 'https://twitter.com/intent/tweet?text=' + '"' + val.Quote + '"' + ' - ' + val.Author;
        }); // --- end .forEach ---
            
        $("#quotes, #images").fadeOut(1500, function() {
            $("#quotes").html(htmlQuotes); //Change quote text
            $("#images").html(htmlImages); //Change quote image
            $("#quotes, #images").fadeIn(1500);
        }); // --- end the fadeOut/In of the Image and the quotes ---

		$('#tweet').click(function() {
				window.open(tweet);
				return false;
				}); //Tweet onClicking button
		});	// --- end .getJSON ---
	}); // --- end .onClick ---
}); // --- end document.ready ---