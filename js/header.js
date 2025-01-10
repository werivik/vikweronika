function adjustHeaderFontColor() {
    const header = document.querySelector("header");
    if (!header) return;

    const headerLinks = header.querySelectorAll("a");
    const backgroundColor = window.getComputedStyle(header).backgroundColor;
    const rgb = backgroundColor.match(/\d+/g).map(Number);

    if (rgb.length === 3) {
        const luminance = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
        const fontColor = luminance < 0.5 ? "white" : "#12263a";

        headerLinks.forEach(link => {
            link.style.color = fontColor;
        });
    }
}

document.addEventListener("DOMContentLoaded", adjustHeaderFontColor);

const menuBar = document.getElementById('menuBar');
const menuBarHover = document.getElementById('menuBarHover');
const menuClose = document.getElementById('menuClose');
const menuLinks = document.getElementById('menuLinks');

menuLinks.style.display = 'none';
menuClose.style.display = 'none';

menuBar.addEventListener('mouseenter', () => {
    if (menuLinks.style.display === 'none') {
        menuBar.style.display = 'none';
        menuBarHover.style.display = 'flex';
    }
});

menuBarHover.addEventListener('mouseleave', () => {
    if (menuLinks.style.display === 'none') {
        menuBar.style.display = 'flex';
        menuBarHover.style.display = 'none';
    }
});

menuBar.addEventListener('click', toggleMenuLinks);
menuBarHover.addEventListener('click', toggleMenuLinks);
menuClose.addEventListener('click', toggleMenuLinks);

function toggleMenuLinks() {
    if (menuLinks.style.display === 'none') {
        menuLinks.style.display = 'flex';
        menuBar.style.display = 'none';
        menuBarHover.style.display = 'none';
        menuClose.style.display = 'flex';
    } 
    else {
        menuLinks.style.display = 'none';
        menuClose.style.display = 'none';
        menuBar.style.display = 'flex';
    }
}