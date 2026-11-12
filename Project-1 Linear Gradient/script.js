let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copyCode = document.querySelector(".gradient-code");

let rgb1 = "#051937";
let rgb2 = "#008793";

let hexValue = ()=>{
    let hexCode = "0123456789abcdef";
    let color = "#";

    for(let i=0; i<6; i++){
       color = color + hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn1.addEventListener("click",()=>{
    rgb1 = hexValue();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.innerHTML = `${rgb1}`;
    btn1.style.backgroundColor = `${rgb1}`;
})