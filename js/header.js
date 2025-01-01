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
