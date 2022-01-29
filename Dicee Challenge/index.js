
let dices = [];
let gameStarted = false;

function randInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


function reroll(){
    dices = [];
    let diceRefs = document.getElementsByClassName("dice");
    Array.from(diceRefs).forEach((element)=> {
        let ref = element.querySelector("img");
        let dice = randInt(1, 7);
        dices.push(dice);
        ref.setAttribute('src', `./images/dice${dice}.png`);
    });
    renderText();
}

function startGame(){
    gameStarted = true;
    reroll();
}

function btnClicked(){
    if(!gameStarted){
        startGame();
        console.log("game started");
    }else{
        reroll();
    }
}

function renderText(){
    let btnRef = document.getElementById("reroll-btn");
    let infoTextRef = document.getElementById("info-text");
    if(!gameStarted){
        infoTextRef.textContent = "Press Start Game to start!";
        btnRef.textContent = "Start!";
    }else{
        btnRef.textContent = "Reroll!";
        if(dices[0] > dices[1]){
            infoTextRef.textContent = "Player 1 wins!";
        }else if(dices[1] > dices[0]){
            infoTextRef.textContent = "Player 2 wins!";
        }else{
            infoTextRef.textContent = "Draw!";
        }
    }
}