
 //Return keywoard::
 function sum(a,b){
    console.log("hello1");
    console.log("hello2");
    return a+b;
   
}
console.log("sum of to number with return key")
console.log(sum(45,668));
function isadult(age){
    if(age>=18){
        return "adult";
    }else {
        return "not adult ";
    }
    
}

//higher order function::
function multiplevalue(func,count){//heigher order function
    for( let i=1;i<=count;i++){
        func();
    }
}
let value = function(){
    console.log("hello");
}
// multiplevalue(function(){
//     console.log("namaste")
// },1000);
//multiplevalue(value,100000);

//return a function::
function oddOrEvenFactory(request){
    if(request =="odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request")
    }
}
let request = "odd"; //even
