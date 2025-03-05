//spread::
let arr3 = [1,3,2,3,0,3,4,5,6,7,8,9,1,2,3,3,4,3,0];
 Math.push(-1);
 Math.min(arr3);

//speard::
//with array literals::
let arr4 = [1,2,34,90,3];
let newArr = [...arr4];
let chars = [..."pranshu"];
let even = [2,4,6,8,10,12];
let odd = [1,3,5,7,9,11,13];
let nums3 = [...even, ...odd];

//speard with object literls::
const data={
    email:"pranshushukla9005@gmail.com",
    password:"shukla@123456789",
};
const datacopy = {...data,id:9006,country:"india"};
let arr5 = [1,2,4,5,67,8];
let obj = {...arr5};
