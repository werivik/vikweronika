const aboutMeImageContainer = document.querySelector('.aboutme-image');
const imageSources = [
    "/style/media/me/meblackandgrey.png",
    "/style/media/me/meblackandgrey.png",
    "/style/media/me/meblackandgrey.png"
];
let currentIndex = 0;

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
    }, 3000);
}

setInterval(changeImage, 10000);