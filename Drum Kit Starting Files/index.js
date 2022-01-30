let buttons = Array.from(document.getElementsByClassName("drum"));

buttons.forEach(function(element){
    element.addEventListener("mousedown",()=>{
        element.classList.add("pressed");
    });
    element.addEventListener("mouseup",()=>{
        element.classList.remove("pressed");
    });
});