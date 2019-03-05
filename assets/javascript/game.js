// var
//Array

amazingShows = ["Archer", "Boondocks", "Cowboy Bebop", "Daria", "Futurama", "Rick and Morty", "Samurai Jack"];
var newShowName;


//buttons are dynamics created so it needs to be this way. 
$(document).on("click", ".classShows", function () {
    var showName = $(this).attr("data-showName");
    var api_key = "api_key=4xwiyJAiQbV1UanpvfTtZQJnkETQG95Y";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&" + api_key + "&limit=10";
    getGifs(queryURL);
})

$(document).on("click", ".gif", function () {
    var thisGif = $(this);
    var state = $(this).attr(".gif");
    var staticURL = $(this).attr("imgStatic");
    var animateURL = $(this).attr("imgAnimate");
    // console.log(staticURL);


    if ((thisGif.attr("state") === "static")) {
        thisGif.attr("state", "animated");
        thisGif.attr("src", animateURL);
      
    } else {
        thisGif.attr("state", "static");
        thisGif.attr("src", staticURL);
      
    }
    //had to swap it out had it animated not static when page loaded. 


    // }else {

    // }
});

function renderButtons() {

    var $buttonContainer = $('.buttons');
    $buttonContainer.empty();
    //if you don't care about the index you can just do this, if you need the index, that is the 2nd parameter
    //in the amazingShows.forEach(function(showName, **iterator**){})
    amazingShows.forEach(function (showName) {
        console.log(showName);
        var $createButton = $("<button>")
            .addClass("classShows btn btn-primary")
            .attr("data-showName", showName)
            .text(showName);

        $buttonContainer.append($createButton);
    });
};

renderButtons();



function getGifs(queryURL) {
$('#gifs-appear-here').empty();
    //add for loop to go through ratings array for more DRY. 
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        // console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var showImage = $("<img>");
            showImage.addClass("gif");
            showImage.attr("state", "static"); // this needs to be "state", "static" 
            showImage.attr("src", results[i].images.fixed_height_still.url);
            showImage.attr("imgAnimate", results[i].images.fixed_height.url);
            showImage.attr("imgStatic", results[i].images.fixed_height_still.url);
            gifDiv.prepend(p);
            gifDiv.prepend(showImage);
            $("#gifs-appear-here").prepend(gifDiv);
        }
    });
};

$("#submit").on("click", function (event) {
    event.preventDefault();
    newShowName = $("#amazingShowsInput").val().trim();
    if (newShowName.length > 0) {

        amazingShows.push(newShowName);
        renderButtons();
    } else {
        alert("type something silly");
    }
})