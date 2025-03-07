//get data and function::
const post = {
    username:"pranshushukla@9005",
    content:"this is my @firstpost",
    likes: 5000,
    reposts:45,
    tags:["@pranshushukla","@engineer's"]
};    
const obj = {
    1:"a",
    2:"b",
    3:"c",
    4:"d", 
    null:"e",
    true:"f",
    undefined: "g"  
};
const stu = {
    name:"pranshu",
    age:78,
    city:"basti",
    marks:90
    //delete stu.marks
};

//object of objects::
// const classinfo={
//     pranshu: {
//         grade :"A",
//         age :67,
//         education: "Phd"
//     },
//     Shivam: {
//         grade :"A+",
//         age :60,
//         education: "Phd"
//     },
//     Rishi: {
//         grade :"A++",
//         age :80,
//         education: "Phd and diploma"
//     },
//     ravi: {
//         grade :"B",
//         age :77,
//         education: "B.tech"
//     }
// };

const classdata = [
    {
     name :"pranshu ",
        grade :"A",
        age :67,
        education: "Phd",
        city:"basti"
    },
    {
     name :"Shivam", 
        grade :"A+",
        age :60,
        education: "Phd",
        city:"vanaras"
    },
    {
     name :"Rishi", 
        grade :"A++",
        age :80,
        education: "Phd and diploma",
        city:"vanaras"
    },
    {
     name : "ravi", 
        grade :"B",
        age :77,
        education: "B.tech",
        city:"basti"
    }

];
//math objects::
// Math.abs(n);
// Math.pow(a,d);
// Math.floor(n);
// Math.ceil(n);
// Math.random();

//Random Integers::
// Math.random() * 100;
//  Math.floor(Math.random() * 10)+1;

//generated random number between 1 to 100:;
Math.floor(Math.random() * 10)+1;
Math.floor(Math.random() * 5)+21;//only gives 21 between 25 random number:;

//function in js::
function hello(){
    console.log("hello");

}
hello();
hello();
hello();
hello();
hello();
hello();

function printname(){
    console.log("pranshu shukla ");
    console.log("I am a wrong wrong wrong person");
}
//for loop::
function print1to5(){
    for (i=1;i<=5;i++){
        console.log(i);
    }
}
//if and else function::
function adult(){
    let age = 9;
    if(age>=18){
        console.log("adult");
    }else{
        console.log(" hey the person is not adult");
    }
}
adult();

print1to5();
printname();
printname();
printname();
printname();
