const nav = document.querySelector('.nav');
const webLinks = document.querySelector('.header-links');
const mainHomepage = document.getElementById('mainHomepage');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (mainHomepage) {
        if (window.scrollY > window.innerHeight * 0.98) {
            nav.classList.add('sticky');
            webLinks.classList.add('sticky');
        } 
        
        else {
            nav.classList.remove('sticky');
            webLinks.classList.remove('sticky');
        }
    } 
    
    else {
        header.classList.add('fixed');
        nav.classList.remove('sticky');
        webLinks.classList.remove('sticky');
        nav.classList.add('fixed');
        webLinks.classList.add('fixed');
    }
});

