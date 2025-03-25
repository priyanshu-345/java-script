let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color update");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255); 
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`; // Only use red, green, and blue
    return color;
}

let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("ya I am here");//just click the sentence the print out the state ment
});
let btn1  = document.querySelector("button");
btn1.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
});


function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}
btn1.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor); 
