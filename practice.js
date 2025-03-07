//practice question::
let greet = "hello"; //global scope
function changegreet(){
    let greet  = "namaste";//function scope
    console.log(greet);
    function innergreet(){
        console.log(greet);//lexical scope
    }
    innergreet();
}
//try and catch statement::
console.log("pranshu");
console.log("hello");
//let a= 78; if you defiend as let statement::
try{
    console.log(a);
}catch{
    console.log("caught an error .. a is not defiend");
}
console.log("akhilesh shukla");
console.log("vivek verma");
console.log("ravi shukla");

//miscellaneous topics::
//arrow function::
const add = (a,b)=>{
    console.log(a+b);
};
//cube of the any no
const cube  =(n)=>{
    return n*n*n;

};
//power of any no
const power = (m)=>{
    return m*m
};
const fun = ()=>{
    console.log("hello pranshu shukla");
};

//implicit return::
const mul = (a,b)=>(
    a*b//have a change ()
);
const cube1 =(b) => b*b*b;//one single line::

//practice question  for sum of the numbers from 1 to n::
function getsum(n){
    let sum  = 0;
    for(let i =1;i<=n;i++){
        sum += i;
    }
    return sum; 
}

 //practice question of the table in mathematics::
 function printtable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
 }
 printtable(6);


//practice question average of the three numbers::

function sum(a,b){
    console.log(a+b);
}
function average(a,b,c){
    let avg =(a+b+c)/3;
    console.log(avg);
}
 average(7899,6877,987758); 
 sum(45,67);

//function practice question::
function poem(){
    console.log("Twinkle twinkle little star");
    console.log("how i wonder what you are");

}
poem();
//function practice question dice :: 
function ludo(){
 let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
}
ludo();
ludo();
ludo();
ludo();
ludo();
ludo();
ludo();
