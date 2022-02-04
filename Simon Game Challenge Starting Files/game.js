
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;
const originTitle = $("#level-title").text();

$(document).keypress(function (e) { 
    if(!gameStarted){
        gameStarted = true;
        nextSequence();
    }
});

buttonColours.forEach(function (item) { 
    let itemId = `#${item}`
    $(itemId).click(function (e) { 
        let userChosenColour = item;
        userClickedPattern.push(userChosenColour);
        playBtnSound(userChosenColour);
        animatePress(userChosenColour);
        if(gameStarted){
            checkAnswer();
        }
    });

 });

function checkAnswer(){
    function startOver(){
        gamePattern = [];
        userClickedPattern = [];
        gameStarted = false;
        level = 0;
        $("#level-title").text(originTitle);
    }

    let indexToCheck = userClickedPattern.length - 1;
    if (userClickedPattern[indexToCheck] === gamePattern[indexToCheck]){
        // correct
        console.log("success");
        //finished
        if(userClickedPattern.length === gamePattern.length){
            let delayInMilliseconds = 1000; //1 second
            setTimeout(function(){
                nextSequence();
            }, delayInMilliseconds);
        }
    }else{
        // wrong
        console.log("failed");
        let delayInMilliseconds = 200; //1 second
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },delayInMilliseconds);
        startOver();
    }
}

function playBtnSound(color){
    let audioFile = `sounds/${color}.mp3`;
    let audio = new Audio(audioFile);
    audio.play();
}

function animatePress(color){
    let delayInMilliseconds = 100; //1 second
    let itemId = `#${color}`
    $(itemId).addClass("pressed");
    setTimeout(function(){
        $(itemId).removeClass("pressed");
    }, delayInMilliseconds);
}

function nextSequence(){
    $("#level-title").text(`Level ${level}`);
    level+=1;
    userClickedPattern = [];
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    let randomNumber = getRandomInt(0, 4); // [0-3]
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playBtnSound(randomChosenColour);
    animatePress(randomChosenColour);
}
