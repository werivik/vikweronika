const aboutMeImageContainer = document.querySelector('.aboutme-image');
const imageSources = [
    "/style/media/me/womanincity.jpeg",
    "/style/media/me/womananddog.jpeg",
    "/style/media/me/womanbydesk.jpeg"
];
let currentIndex = 0;
let slideshowInterval;
let isSlideshowRunning = true;

function changeImage() {
    const newImage = document.createElement('img');
    newImage.src = imageSources[(currentIndex + 1) % imageSources.length];
    newImage.style.position = "absolute";
    newImage.style.top = "55%";
    newImage.style.left = "200%";
    newImage.style.width = "80%";
    newImage.style.height = "86%";
    newImage.style.objectFit = "cover";
    newImage.style.transform = "translate(-50%, -50%)";
    newImage.style.transition = "left 1s ease-in-out";

    aboutMeImageContainer.appendChild(newImage);

    setTimeout(() => {
        newImage.style.left = "50%";
    }, 10);

    setTimeout(() => {
        const currentImage = aboutMeImageContainer.querySelector('img:first-child');
        aboutMeImageContainer.removeChild(currentImage);
        currentIndex = (currentIndex + 1) % imageSources.length;
    }, 1000);
}

function startSlideshow() {
    if (!isSlideshowRunning) {
        isSlideshowRunning = true;
        slideshowInterval = setInterval(changeImage, 8000);
    }
}

function stopSlideshow() {
    if (isSlideshowRunning) {
        isSlideshowRunning = false;
        clearInterval(slideshowInterval);
    }
}

function handleScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > 0.85 * viewportHeight) {
        stopSlideshow();
    } 
    
    else {
        startSlideshow();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    startSlideshow();
    window.addEventListener('scroll', handleScroll);
});
