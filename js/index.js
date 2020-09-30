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
    speed: 800,
};

var swiper = new Swiper('.swiper-container', firstSlider);

//VERSION 1 => BOLD

// var evtLeft = new KeyboardEvent('keydown', {'keyCode':37}); 
// var evtRight = new KeyboardEvent('keydown', {'keyCode':39}); 
// function turnLeft() {
//     document.dispatchEvent (evtLeft); 
// }
// function turnRight() {
//     document.dispatchEvent (evtRight); 
// }
// setTimeout(turnRight,3800)
// setTimeout(turnLeft,4200)

//VERSION 2 => ROTATE FIRST

// swiper.slideNext(2000);
// swiper.once('slideNextTransitionEnd',function(){
//     swiper.removeSlide(0);
//     })    

//VERSION 3 => ROTATE LATER

const check = setTimeout(mySlide, 4000);
swiper.once('transitionStart', function(){
    clearInterval(check);
})
function mySlide(){
    swiper.slideNext(2000);
}


