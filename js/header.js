document.addEventListener("DOMContentLoaded", () => {
    const contactLink = document.querySelector(".contact-button-header");
    const flowers = document.querySelectorAll(".flower-header");

    contactLink.addEventListener("mouseenter", () => {
        flowers.forEach(flower => {
            flower.style.display = "block";
            flower.style.opacity = "1";
            flower.style.transition = "opacity 0.3s ease";
        });
    });

    contactLink.addEventListener("mouseleave", () => {
        flowers.forEach(flower => {
            flower.style.opacity = "0";
            setTimeout(() => {
                flower.style.display = "none";
            }, 150);
        });
    });
});

function adjustHeaderFontColor() {
    const header = document.querySelector("header");
    if (!header) return;

    const headerLinks = header.querySelectorAll("a");
    if (!headerLinks.length) return;
    
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
const pageContent = document.getElementById('pageContent');

menuClose.style.display = 'none';

menuBar.addEventListener('mouseenter', () => {
    if (menuClose.style.display === 'none') {
        menuBar.style.display = 'none';
        menuBarHover.style.display = 'flex';
    }
});

menuBarHover.addEventListener('mouseleave', () => {
    if (menuClose.style.display === 'none') {
        menuBar.style.display = 'flex';
        menuBarHover.style.display = 'none';
    }
});

menuBar.addEventListener('click', () => toggleMenuLinks('open'));
menuBarHover.addEventListener('click', () => toggleMenuLinks('open'));
menuClose.addEventListener('click', () => toggleMenuLinks('close'));

function toggleMenuLinks(action) {
    if (action === 'open') {
        menuLinks.classList.add('slide-in');
        menuLinks.classList.remove('slide-out');
        menuClose.style.display = 'flex';
        menuBar.style.display = 'none';
        menuBarHover.style.display = 'none';
        pageContent.classList.add('blurred');
    } 
    
    else if (action === 'close') {
        menuLinks.classList.add('slide-out');
        menuLinks.classList.remove('slide-in');
        setTimeout(() => {
            menuClose.style.display = 'none';
            menuBar.style.display = 'flex';
            menuBarHover.style.display = 'none';
            pageContent.classList.remove('blurred');
        }, 500);
    }
}

