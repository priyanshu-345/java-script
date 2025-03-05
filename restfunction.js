//rest function::
function sum1(...args){
  for (let i=0;i<args.length;i++){
    console.log("i hate you:",args[i]);
  }
}
function min(a,b,c,d,s){
  console.log(arguments);//arguments me push ,pop ye sab method work nhi karta hai::

}
//find the messages and minmum value::
function min1(msg, ...args){//minmum number find karta hai
  console.log(msg);//an dif you print some messages then the used of the function::

  return args.reduce((min1,el)=>{
    if(min1 > el){
      return el;
    }else{
      return min1;
    }
  });
}
