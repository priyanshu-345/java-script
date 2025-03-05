
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
