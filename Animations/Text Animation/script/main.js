let content = document.querySelector("#header");
let strContent = content.innerHTML;
let result = strContent.split('');
content.innerHTML = "";
for(let i = 0; i < result.length; i++) {
    content.innerHTML += `<span>${result[i]}</span>`
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = document.querySelectorAll('span')[char];
    //console.log(span)
    span.classList.add("fade");
    char++;
    if(char === result.length){
        onClearTick();
        return
    }
}

function onClearTick() {
    clearInterval(timer);
}




















// for(let i = 0; i < result.length; i++){
//     content.innerHTML += `<span>${result[i]}</span>`
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick(){
//     const span = content.querySelectorAll('span')[char];// takes the charater in span
//     console.log(span);
//     span.classList.add('fade');
//     char++;// or else it will take only the first character
//     if(char === result.length){
//         complete();
//         return;
//     }
// }

// function complete() {
//     clearInterval(timer);
//     //timer = null;
// }