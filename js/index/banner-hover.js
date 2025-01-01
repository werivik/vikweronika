const mePhoto = document.getElementById('mePhoto');
const myName = document.getElementById('myName');

mePhoto.addEventListener('mouseenter', () => {
    myName.style.transition = '0.2s'
    myName.style.color = '#d36582';
})

mePhoto.addEventListener('mouseleave', () => {
    myName.style.color = '#12263a';
})