
const menuList = document.querySelector('.menu-list');
const burgerMenu = document.querySelector('.burger-icon');
const links = document.querySelectorAll('.menu-list ul li');
const firstLine = document.querySelector('.firstLine');
const secondLine = document.querySelector('.secondLine');
const thirdLine = document.querySelector('.thirdLine');

burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle('open');
})

burgerMenu.addEventListener('click', () => {
    firstLine.classList.toggle('firstLineChange');
    secondLine.classList.toggle('secondLineChange');
    thirdLine.classList.toggle('thirdLineChange');
})