function menu(){
    let menuList = document.querySelector('.menu-list');
    if(menuList.style.display === "block") {
         menuList.style.display = "none";
    } else {
     menuList.style.display = "block";
    }
}