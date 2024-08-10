
var keys = ['a', 'w', 's', 'd', 'j', 'k', 'l'];

var numberOfDrum = document.querySelectorAll(".drum").length;

function playSound(input) {

    var backgroundImage = window.getComputedStyle(input).backgroundImage;
    var baseIndex = backgroundImage.indexOf('images/') + 'images/'.length;
    var endIndex = backgroundImage.indexOf('.png');
    var sound = backgroundImage.substring(baseIndex, endIndex);

    var audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();

}

for (var i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumClass = this;
        var buttonInnerHTML = this.innerHTML;
        playSound(drumClass);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener('keypress', function (event) {
    var drumElement = document.querySelector(`.${event.key}.drum`);
    if (drumElement) {
        playSound(drumElement);
        buttonAnimation(event.key);
    }
})

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}
