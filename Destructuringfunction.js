
//destructuring:::
//storing values of array into multiple variables
let names = ["pranshu ","vivek","rishi","shivam","gaurav","aditya","manu","mansi","ravi","chandan","vishal"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];
let [winner, runnerup, secondRunnerup, ...others] = names; 

//destructuring
const student2={
  name:"pranshu shukla",
  age:67,
  rollno:122,
  class:10,
  subject:["english","hindi","math","science","physics"],
  username: "pranshu shukla",
  password:"shukla90000001234",
  email:"pranshushukla900000021111@gmail.com",
  city:"basti"
};
let {username:user, password: secret , city :place= "pune"} = student2;
let username = student2.username;
let age = student2.age;
