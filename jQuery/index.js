
$("#title").addClass('big-with-color');
$("button").css("background-color", "red");

let originText = $("#title").text();

$(document).keydown(function (e) { 
    $("#title").text(e.key);
});
$(document).keyup(function (e) { 
    $("#title").text(originText);
});

$("button").click(function (e) { 
    console.log("Button clicked");
    // $("#title").toggle();
    // $("#title").slideToggle();
    $("#title").animate({opacity: 0});

});

// $("button").on("click", function () {
    
// });

$("#title").before("<button>Hi</button>");
$("#title").prepend("<button>Bye</button>");

