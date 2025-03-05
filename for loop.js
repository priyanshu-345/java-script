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
