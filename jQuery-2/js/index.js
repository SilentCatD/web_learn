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

// $("#hide").click(function (e) { 
//     $("#textBox").hide();
// });

// $("#show").click(function (e) { 
//     $("#textBox").show();
// });

// $(".textCopy").hover(function () {
//         // over
//         $(this).addClass("highlight");
        
//     }, function () {
//         // out
//         $(this).removeClass("highlight");
//     }
// );

// $("#fadeIn").click(function (e) { 
//     $("#textBox").fadeIn("slow", "linear", function (param) {  
//         alert("I'm done fading in.")
//     });
// });

// $("#fadeOut").click(function (e) { 
//     $("#textBox").fadeOut("fast", "swing", function (param) {  
//         alert("I'm done fading out.")
//     });
// });


$("#slideUp").click(function (e) { 
   $("#textBox").slideUp();
});

$("#slideDown").click(function (e) { 
    $("#textBox").slideDown();
});

$("#slideToggle").click(function (e) { 
    $("#textBox").slideToggle();    
});