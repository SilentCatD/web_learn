"use strict";


let buttons = Array.from(document.getElementsByClassName("drum"));


document.addEventListener('keydown', (event)=>{
    downBtnAndKeyToSound(event.key);
});

document.addEventListener('keyup', (event)=>{
    upBtnAndKeyToSound(event.key);
});


buttons.forEach((element)=>{
    element.addEventListener("mousedown",()=>{
        downBtnAndKeyToSound(element.classList[0]);
    });
    element.addEventListener("mouseup",()=>{
        upBtnAndKeyToSound(element.classList[0]);
    });
});



function downBtnAndKeyToSound(key){
    let audioFileName;
    switch(key){
        case 'w':
            audioFileName = "./sounds/tom-1.mp3";
            break;
        case 'a':
            audioFileName = "./sounds/tom-2.mp3";
            break;
        case 's':  
            audioFileName = "./sounds/tom-3.mp3";
            break;
        case 'd':
            audioFileName = "./sounds/tom-4.mp3";
            break;
        case 'j':
            audioFileName = "./sounds/snare.mp3";
            break;
        case 'k':
            audioFileName = "./sounds/crash.mp3";
            break;
        case 'l':
            audioFileName = "./sounds/kick-bass.mp3";
            break;
        default:
            console.log(key);
            return;
    }
    let btnRef = document.querySelector(`.${key}`);
    let audio = new Audio(audioFileName);
    btnRef.classList.add("pressed");
    audio.play();
}

function upBtnAndKeyToSound(key){
    switch(key){
        case 'w':
            break;
        case 'a':
            break;
        case 's':  
            break;
        case 'd':
            break;
        case 'j':
            break;
        case 'k':
            break;
        case 'l':
            break;
        default:
            console.log(key);
            return;
    }
    let btnRef = document.querySelector(`.${key}`);
    btnRef.classList.remove("pressed");
}