// $("h1:first").css("border", "3px solid green");
// $("h1:last").css("border", "3px solid red");

// let newText = $("<p>")
// newText.append("<h1>I just replaced some text.</h1>")
// $("#textBox").html(newText);

// let originText = $("#textBox").text();

// $("#textBox").click(function (e) { 
//     $("#textBox").html("<h1>You Clicked Me</h1>");
// });

// $("#textBox").mouseleave(function () { 
//     $("#textBox").html(originText);
// });

$("#hide").click(function (e) { 
    $("#textBox").hide();
});

$("#show").click(function (e) { 
    $("#textBox").show();
});