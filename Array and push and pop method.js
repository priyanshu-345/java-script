let s1="pranshu";
let s2="Rishi";
let s3="vivek";
let s4="Aman";
let student=["pranshu ","Aman","gaurav","rajat"];

//creating array:;

let info=["pranshu",67,67.9];
let emparray = [];
//mutable::
let name="Amit";
let fruits=["apple","mango","litchi"];
fruits[3] = "pinapple"; 

//push and pop methods::

let cars=["fortuner","bmw","audi","baleno"];
cars.push("toyota");
cars.push("maruti");
cars.pop();
cars.shift();
cars.unshift("range rover");

//practice Question::
 
let months=["july","april","may","march","june","january","august"];
months.shift();
months.unshift("feb");
//indexof and includes::

let primary = ["pranshu","gaurav","adity"];
primary.includes("bob");//gives false value because that is not given the array
primary.indexOf("pranshu")//give index value
//concatenate
let pri=["red","yellow","blue"];
let sec=["orange","green","violet"];

pri.reverse();

//array slice
let car=["bmw","fortuner","mustank","range rover","mansuri "];
car.slice();
car.slice(1);
car.slice(car.length-1);
car.slice(-1);
car.slice(-2);

 //array method in splice::
 let color= ["pranshu","gaurav","aditya","rishi","vivek","shivam"];
 color.splice(2);
 color.splice(1,"pranshu","rishi");
 color
 color.push("pranu");
 color.pop("manu");
 color.splice(1,0,"ravi");

//sort::
let cars1=["fortuner","bmw","audi","baleno","range rover","mansuri"];
cars1.sort();

//practice qoestion//
let month=["january","feb","may","april","march","june","july"];
month.splice(0,2,"august","september");
let lang=["java","pyhton","css","javascript","c++","c","mongoDB"];
lang.reverse();
lang.push("mySQL");
lang.reverse().indexOf("javascript");

//array references::

"name"="name"
[1] = [1]
//constant array::
const arr=[1,2,3,4];
arr.push(5);
arr.pop(99);
//nested arrays::
let num =[[2,3],[4,6],[8,9],[7,9]];
num[0];
num[0][0];
num.length;
num[2][1];

//practice question::tic-tac-toe
let game=[["x",null,0],[null,"X",null],[0,null,"X"]];
console.log(game);

