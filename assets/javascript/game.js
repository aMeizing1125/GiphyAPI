// var


//Array

amazingShows = ["Archer", "Boondocks", "Cowboy Bebop", "Daria", "Futurama", "Rick and Morty", "Samurai Jack"];
rating = ["y", "g", "pg", "pg-13", "r"];
var newShowName;

//buttons are dynamics created so it needs to be this way. 
$(document).on("click", ".classShows", function () {
    var showName = $(this).attr("data-showName");
    var api_key = "api_key=4xwiyJAiQbV1UanpvfTtZQJnkETQG95Y";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&" + api_key;
    getGifs(queryURL);
})



function renderButtons() {

    var $buttonContainer = $('.buttons');
    $buttonContainer.empty();
    //if you don't care about the index you can just do this, if you need the index, that is the 2nd parameter
    //in the amazingShows.forEach(function(showName, **iterator**){})
    amazingShows.forEach(function (showName) {
        console.log(showName);
        var $createButton = $("<button>")
            .addClass("classShows")
            .attr("data-showName", showName)
            .text(showName);

        $buttonContainer.append($createButton);
    });
};

renderButtons();

$("#submit").on("click", function (event) {
    event.preventDefault();
    //commented this out since newShowname.length isn't right and I need it to be. 
    // if (newShowName.length > 0) {
    newShowName = $("#amazingShowsInput").val().trim();
    amazingShows.push(newShowName);
    renderButtons();
    // }else {
    // alert("type something silly");
    // }

})

function getGifs(queryURL) {

    //add for loop to go through ratings array for more DRY. 
    $.ajax({
        // this line below isn't right after .something()

        url: queryURL,
        method: "GET",
        // data: {
        //     api_key: "4xwiyJAiQbV1UanpvfTtZQJnkETQG95Y",
        //     rating: "y",
        //     limit: 3,
        //     // q: ,       
        // },
    }).then(function (response) {
        // //activity06
        // $("#movie-view").text(JSON.strigify(response, null, 2))
        // //class activity
        // // this is in the function so we don't need to repeat. DRY
        // var newRow = $("<tr>"); //creates row Rename <img>? 
        // var newTitle = $("<td>").text(response.Title);//calls the new data
        // // Create and save a reference to new empty table row
        // var titleID = $("<td>").text(response.Title);
        // newRow.append(newTitle);
        // newRow.append(newYear);
        // newRow.apped(newActors);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var showImage = $("<img>");
            showImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(showImage);
            $("#gifs-appear-here").prepend(gifDiv);
        }
    });
};
//WORK IN PROGRESS HERE!!! ***
//OPTION 1 
// $(document).on('click', 'img', function () {
//     var state = $(this).attr("data-state");
//     if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-animate", "animate");
//     } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still")
//     }
// })
//OPTION 2 found online stackoverflow. My brain finds this easier to read and create tahn the above. particularly the this inside of this already
//  $("#photo").append('<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
// $(document).on('click', '.gif', function() {
//     var src = $(this).attr("src");
//   if($(this).hasClass('playing')){
//      //stop
//      $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
//      $(this).removeClass('playing');
//   } else {
//     //play
//     $(this).addClass('playing');
//     $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
//   }
// });

function createButton() {
}
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

//       });
//   });