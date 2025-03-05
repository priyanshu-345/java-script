let arr =[1,2,3,3,5,6];
arr.forEach((el) =>{
    console.log(el);
}
);
arr.forEach(function (el) {
    console.log(el);
});
// let print  = function(el){
//     console.log(el);
// };
// arr.forEach(print); 

//array of the object::
let arr1 =[
    {
        name:"pranshu shukla",
        age:78,
    },
    {
        name:"ravi shukla",
        age:47,
    },
    {
        name:"Naman shukla",
        age:45,
    },
    {
        name:"Manu shukla",
        age:58,
    }

];
arr1.forEach((student) => {
    console.log(student.age);
});

map function::

let num = [1,2,3,45];
let double  =num.map((el) => {
    return el*el;
});

 let stu =[
    {
        name:"pranshu shukla",
        marks:92,
    },
    {
        name:"rahul gaud",
        marks:90.4,
    },
    {
        name:"shivam",
        marks:92.67,
    },
    {
        name:"vivek",
        marks:67.78,
    },
    {
        name:"rishi",
        marks:90.2,
    },
 ];
 let gpa = stu.map((el) =>{
    return el.marks/10;
 });
