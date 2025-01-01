const contactLink = document.querySelector('.custom-contact a');
const darkFlowers = document.querySelectorAll('.custom-contact .dark-flower3, .custom-contact .dark-flower1, .custom-contact .dark-flower2');
const lightFlower = document.querySelector('.custom-contact .light-flower');

const handleMouseOver = () => {
    darkFlowers.forEach((darkFlower) => {
        darkFlower.src = "/style/media/flowers/dark-pink.png";
    });
    
    if (lightFlower) {
        lightFlower.src = "/style/media/flowers/light-pink.png";
    }
};

const handleMouseOut = () => {
    darkFlowers.forEach((darkFlower) => {
        darkFlower.src = "/style/media/flowers/dark-grey.png";
    });

    if (lightFlower) {
        lightFlower.src = "/style/media/flowers/light-grey.png";
    }
};

if (contactLink) {
    contactLink.addEventListener('mouseover', handleMouseOver);
    contactLink.addEventListener('mouseout', handleMouseOut);
}
