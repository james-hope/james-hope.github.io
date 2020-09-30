const firstSlider = {
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    cubeEffect: {
        shadowOffset: 150,
        shadowScale: '1.1',
    },
    effect:'cube',
    grabCursor: true,
    keyboard: true,
    loop: true,
    mousewheel: true,
    reverseDirecton: false,
};
var swiper = new Swiper('.swiper-container', firstSlider);

var evtLeft = new KeyboardEvent('keydown', {'keyCode':37}); 
var evtRight = new KeyboardEvent('keydown', {'keyCode':39}); 
function turnLeft() {
    document.dispatchEvent (evtLeft); 
}
function turnRight() {
    document.dispatchEvent (evtRight); 
}
setTimeout(turnRight,3800)
setTimeout(turnLeft,4200)




