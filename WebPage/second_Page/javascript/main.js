
const menuList = document.querySelector('.menu-list');
const bodyScroll = document.querySelector('body');
const burgerMenu = document.querySelector('.burger-icon');
const links = document.querySelectorAll('.menu-list ul li');
const firstLine = document.querySelector('.firstLine');
const secondLine = document.querySelector('.secondLine');
const thirdLine = document.querySelector('.thirdLine');

burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle('open');
    bodyScroll.classList.toggle('forScroll');
})

burgerMenu.addEventListener('click', () => {
    firstLine.classList.toggle('firstLineChange');
    secondLine.classList.toggle('secondLineChange');
    thirdLine.classList.toggle('thirdLineChange');
})

document.addEventListener('scroll', window, function (event) {
    // get current scroll position  
    var currentScrollPos =    window.scrollTop;
    if(currentScrollPos >= 100) {
        // show your div
    }
}, false);