//settime statement::

console.log("hii pranshu!");
setTimeout (() => {
    console.log("shukla bhawan")

}, 4000);
console.log("welcome to");

//setinterval::

console.log("hi there!");
let id  = setInterval(()=> {
    console.log("pranshu shukla");
},2000);
console.log(id);
let id2 = setInterval(()=> {
    console.log("hello jhatuu");
},3000);
console.log(id2);
clearInterval(id2);
clearInterval(id);
