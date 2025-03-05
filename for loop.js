console.log["1"]; 
console.log["2"];
console.log["3"];
console.log["4"];
console.log["5"];

//reverse printing process::
for(let i=1;i<=100;i++){
   console.log(i);
}
for(let i=10;i>=1;i--){
    console.log(i);//reverse print::
}

//odd numbers::
for (let i=1;i<=60;i=i+2){
    console.log(i);
}
console.log("backwards");
for (let i=15;i>=1;i=i-2){
    console.log(i);
}

//even numbers::
console.log("even number");
for(let i=2;i<=34;i=i+2){
    console.log(i);
}

//infinite loop::
for(let i=1; ; i++){
   console.log(i);
}
for(let i=5;i<=200;i=i+   5){
    console.log(i);
}
let n =prompt("write your numbers");
n= parseInt(n);
for(let i=n; i<=n*100;i=i*n){
    console.log(i);
}

//nested loop::
for (let i=1;i<=4;i++){
    console.log("outer loop ${i}");
    for(let j=1;j<=5;j++){
        console.log(j);
    }
}

//loops with arrays::
let fruits = ["mango","apple","banana","litchi","orange","pineapple"];
fruits.push("pranshu");
for(let i=0;i<fruits.length;i++){//let apply thr even and odd case::
   console.log(i,fruits[i]);
}
for(let i=fruits.length-1;i>=0; i--){//reverse print::
    console.log(i,fruits[i]);
}
//nested loop with nested array::
let hero= [["ironman","thor","spiderman"],["superman","wonder woman","flash"]];
for(let i=0;i<hero.length;i++){
   console.log(i,hero[i],hero[i].length);
   for (let j=0;j<hero[i].length;j++){
       console.log('j=${j},${hero[i][j] ');
   }
}
let student = [["aman,98"],["pranshu,90"],["ravi,78"]];
for(let i=0;i<student.length;i++){
    console.log('info of student no#${i}');
    for(let j=0; j<student[i].length;j++){
        console.log(student[i][j]);
    }
}
let cars=["fortuner","bmw","range rover","maruti","baleno"];
for(cars of cars){
    console.log(cars);

}
for(char of "pranshu"){
    console.log(char);
}

//loops with arrays::
let fruits = ["mango","apple","banana","litchi","orange","pineapple"];
fruits.push("pranshu");
for(let i=0;i<fruits.length;i++){//let apply thr even and odd case::
   console.log(i,fruits[i]);
}
for(let i=fruits.length-1;i>=0; i--){//reverse print::
    console.log(i,fruits[i]);
}
//nested loop with nested array::
let hero= [["ironman","thor","spiderman"],["superman","wonder woman","flash"]];
for(let i=0;i<hero.length;i++){
   console.log(i,hero[i],hero[i].length);
   for (let j=0;j<hero[i].length;j++){
       console.log('j=${j},${hero[i][j] ');
   }
}
let student = [["aman,98"],["pranshu,90"],["ravi,78"]];
for(let i=0;i<student.length;i++){
    console.log('info of student no#${i}');
    for(let j=0; j<student[i].length;j++){
        console.log(student[i][j]);
    }
}
let cars=["fortuner","bmw","range rover","maruti","baleno"];
for(cars of cars){
    console.log(cars);

}
for(char of "pranshu"){
    console.log(char);
}

//nested for loop::
let main=[["pranshu","manu","vivek","shivam","rishi"],["ironman","thor","wanda","sam"]];
for(list of main){
    for(main of list){
        console.log(main); 
    }
}
let main=[["pranshu","manu","vivek","shivam","rishi"],["ironman","thor","wanda","sam"]];
for(list of main){
    for(main of list){
        console.log(main); 
    }
}
