// 1. Video Slider Logic
let currentIdx = 0;
const slides = document.getElementById('videoSlides');
const totalVideos = 5;

function moveSlide(step) {
    currentIdx = (currentIdx + step + totalVideos) % totalVideos;
    slides.style.transform = `translateX(-${currentIdx * 100}%)`;
}

// 2. Image Scrolling Movement (Side-to-Side)
window.onscroll = function() {
    let value = window.scrollY;
    
    const imgLeft = document.getElementById('imgLeft');
    const imgRight = document.getElementById('imgRight');

    // Move left image to the left and right image to the right as you scroll down
    if(imgLeft && imgRight) {
        imgLeft.style.transform = `translateX(-${value * 0.1}px) rotate(-5deg)`;
        imgRight.style.transform = `translateX(${value * 0.1}px) rotate(5deg)`;
    }
};