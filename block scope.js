/block scope::
//let sum = 78;//global scope
function calsum(a,b){
    let sum = a+b;//function scope
    console.log(sum);
  
}
calsum(34,566);
console.log(sum);

//block scope::
let age = 25;
if(age >= 18){
    let str  = "adult";
    console.log(str);

}
//lexical scope::
function outerfunc(){
    let x =56;
    let y =89;
    function innerfunc(){ //function scope
        console.log(x);
        console.log(y);
    }
    innerfunc();
}
