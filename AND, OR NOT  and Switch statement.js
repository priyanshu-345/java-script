//logical operator
//AND operator
let m=45;
if(m>=45 && m<67){//if the both statement are true
    console.log("pass");
    console.log("A++");
}
//OR operator
let m1=45;
if(m1>=45 || m1<0){//if the only one statement are true
    console.log("pass");
    console.log("A++");
}
//not operator
let m2=45;
if(!(m2<33)){//not operator true hoga to false dega
    console.log("pass");
    console.log("A++");
}
let m3=78;
if((m3<89 &&  m3>90) || !false){
    console.log("pass");
}
if(true){
    console.log("yes it has true");
}
else{
    console.log("not true"); 
}

//truthy and falsy statement//

let nu =-10;
if(nu){
    console.log("nu is not equal to 0");
}
else{
    console.log("nu is the equal to 0");
}
//Switch Statement//
let color1="yellow";
switch(color1){
    case"red":
    console.log("stop"); 
    break;
    case"yellow":
    console.log("slow down");
    break;
    case"green":
    console.log("now go");
    break;
    default:
    console.log("light is broken");
}
    console.log("burchatta");
let password = prompt("set your password");
let newpass = password.trim();
 console.log(newpass);
