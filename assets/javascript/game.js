// var


//Array

amazingShows = ["Archer", "Boondocks", "Cowboy Bebop", "Daria", "Futurama", "Rick and Morty", "Samurai Jack"];
rating = ["y", "g", "pg", "pg-13", "r"];

$("button").on("click", function () {
    var showName = $(this).attr("data-showName");
    var api_key = "4xwiyJAiQbV1UanpvfTtZQJnkETQG95Y";
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + showName  + api_key;
})


var search =


    function renderButtons() {

        var $buttonContainer = $('.buttons');
        $buttonContainer.empty();
        //if you don't care about the index you can just do this, if you need the index, that is the 2nd parameter
        //in the amazingShows.forEach(function(showName, **iterator**){})
        amazingShows.forEach(function (showName) {
            console.log(showName);
            var $createButton = $("<button>")
                .addClass("classShows")
                .attr("data-name", showName)
                .text(showName);

            $buttonContainer.append($createButton);
        });
    };



$("#addShow").on("click", function (event) {
    event.preventDefault();
    var showName = $("#amazingShowsInput").val().trim();
    amazingShows.push(showName);
    renderButtons();
})


//add for loop to go through ratings array for more DRY. 
$.ajax({
    // this line below isn't right after .something()

    url: queryURL,
    method: "GET",
    data: {
        api_key: "4xwiyJAiQbV1UanpvfTtZQJnkETQG95Y",
        rating: "y",
        limit: 3,
        // q: ,       

    },
}).then(function (response) {
    console.log(response);
    //activity06
    $("#movie-view").text(JSON.strigify(response, null, 2))
    //class activity
    // this is in the function so we don't need to repeat. DRY
    var newRow = $("<tr>"); //creates row Rename <img>? 
    var newTitle = $("<td>").text(response.Title);//calls the new data

    // Create and save a reference to new empty table row
    var titleID = $("<td>").text(response.Title);
    newRow.append(newTitle);
    newRow.append(newYear);
    newRow.apped(newActors);
});
//renamed class .button

// $("button").on("click", function() {
//     var person = $(this).attr("data-person");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       person + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       .then(function(response) {
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//           var gifDiv = $("<div>");

//           var rating = results[i].rating;

//           var p = $("<p>").text("Rating: " + rating);

//           var personImage = $("<img>");
//           personImage.attr("src", results[i].images.fixed_height.url);

//           gifDiv.prepend(p);
//           gifDiv.prepend(personImage);

//           $("#gifs-appear-here").prepend(gifDiv);
//         }
//       });
//   });