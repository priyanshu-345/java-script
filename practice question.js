//practice question 1

let color='yellow';
trafic light system
if(color==='red'){
   console.log("stop! light color is red");
}
 else if(color==='yellow'){
   console.log("slow down light color is yellow");
}
else if(color==='green'){
   console.log("go now light color is green");
}

//practice question 2::

let size ="XL";
if(size==="XL"){
    console.log("price is Rs .560");
}
 else if(size==="L"){
    console.log("price is Rs .400");
}
else if(size==="M"){
    console.log("price is Rs .300");
}else{
    console.log("popcorn is over in the shop");
}

//practice question 3::

let str="pranshu";
if((str[0]==="d")&&(str.length>3)){
    console.log("good luck");
}
else{
    console.log("not good")
}

//practice question 4::

let num=15;
if((num%3 === 0)&&(num+1==16) || (num-1 == 12)){
    console.log("safe");
}
else{
    console.log(" not safe");
}
//parctice question 5::

let day =5;
switch(day){
    case 1:
        console.log("monday");
        break;
        case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("thrusday");
        break;
        case 5:
        console.log("friday");
        break;
        case 6:
        console.log("saturday");
        break;
        case 7:
        console.log("sunday");
        break;
        default:
        console.log("wrong day!");
        break;
} 

//practice question::
//write an arrow function that returns the sqare of a number "n"::

const square = (n)=> n*n;
console.log(square(4));

//write a function that prints " hello world" 5 times at intervals of 2s each::
setInterval(()=>{
    console.log("hello pranshu bhai");

},2000);
setTimeout(() =>{
    clearInterval(id);
    console.log("clear interval");
},10000);
