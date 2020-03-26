function slideShow() {
    let x = document.querySelector('#check-class');
    if(x.style.display === 'block') {
        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
}