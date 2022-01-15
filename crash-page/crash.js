$(".drumClick").on("click",function(){
    var clickedSound = this.innerHTML;
    makeSound(clickedSound);
    animationClick(clickedSound)
});

$(document).on("keypress", function(evt){
    makeSound(evt.key);
    animationClick(evt.key);
})
function animationClick(click){
    var activeButton= document.querySelector("."+ click)
    activeButton.classList.add("Clicked");
    setTimeout(() => {
        activeButton.classList.remove("Clicked");
    }, 100);
}

function makeSound(key){
    switch (key){
        case "q":
            var audioQ = new Audio("./sounds/crash.mp3")
            audioQ.play();
        break;
        case "w":
            var audioW = new Audio("./sounds/kick-bass.mp3")
            audioW.play();
        break
        case "e":
            var audioE = new Audio("./sounds/tom-1.mp3")
            audioE.play();
        break
        case "r":
            var audioR = new Audio("./sounds/tom-2.mp3")
            audioR.play();
        break
        case "t":
            var audioT = new Audio("./sounds/tom-3.mp3")
            audioT.play();
        break
        case "y":
            var audioY = new Audio("./sounds/tom-4.mp3")
            audioY.play();
        break
        case "u":
            var audioU = new Audio("./sounds/crash.mp3")
            audioU.play();
        break
    }
}

