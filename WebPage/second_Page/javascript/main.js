const menuList = document.querySelector('.menu-list');
const burgerMenu = document.querySelector('.burger-icon');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll("nav ul li a");
const firstLine = document.querySelector('.firstLine');
const secondLine = document.querySelector('.secondLine');
const thirdLine = document.querySelector('.thirdLine');
const submitBtn = document.querySelector('.submit');
const loader = document.querySelector('.loader');
const toShow = document.querySelector('.opaque')

// window.addEventListener("scroll", (event) => {
//     let fromTop = window.scrollY;
//     console.log(fromTop)
//     navLinks.forEach((link) => {
//       let section = document.querySelector(link.hash);
//       if (
//         section.offsetTop <= fromTop &&
//         section.offsetTop + section.offsetHeight > fromTop
//       ) {
//         link.classList.add("current");
//       } else {
//         link.classList.remove("current");
//       }
//     });
//   });

burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle('open');
    body.classList.toggle('forScroll');
    firstLine.classList.toggle('firstLineChange');
    secondLine.classList.toggle('secondLineChange');
    thirdLine.classList.toggle('thirdLineChange');
});

submitBtn.addEventListener('click', () => {
    loader.style.display = "inline-block";
})


var myScrollFunc = function() {
    var y = window.scrollY;
    console.log(`y is ${y}`);

    if (y < 100) {
        toShow.style.backgroundColor = "transparent";
        menuList.style.opacity = 1;
    } else if (y <= 649 && y >= 100) {
        toShow.style.backgroundColor = "transparent";
        menuList.style.opacity = 0;
    } else {
        toShow.style.backgroundColor = "#000";
        menuList.style.opacity = 1;
    }


    navLinks.forEach((link) => {
        let section = document.querySelector(link.hash);

        if (
          section.offsetTop <= y &&
          section.offsetTop + section.offsetHeight > y
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
};

        
window.addEventListener("scroll", myScrollFunc)     

