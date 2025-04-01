<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="async.css"/>
</head>
<body>
    <ul>
        <li>Async</li>
        <li>Await function</li>
    </ul>
    <h1>MARVEL</h1>
    <h2>PRANSHU SHUKLA</h2>
    <script src="async.js"></script>
</body>
</html>


//that is all about java script code:
//  async function greet(){
//     throw "404 page not found"//type error in web page like 404 , page not found
//     return "hi! pranshu";
//  } 
//  greet()
//  .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was : ",result);
//  })
//  .catch((err)=>{
//     console.log("promise was rejected with err : ",err);
//  })
//  let demo = ()=>{
//     return 33;
//  };

//  await function:
//  function getnum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function memo(){
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     getnum();
// }

h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay)
    })
}
async function memo(){
 try{
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("green",1000);
    await changeColor("pink",1000);
    await  changeColor("orange",1000);
    await  changeColor("blue",1000);
    await changeColor("black",1000);
    await changeColor("gray",1000);
    await  changeColor("purple",1000);
    await  changeColor("silver",1000);
    await changeColor("brown",1000);
  }catch(error){
    console.log(error);
  }
}

//Handing rejection with Await:
h2 = document.querySelector("h2");
function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 5) + 1;
            if(num>3){
                reject("promise rejected");
            }
            h2.style.color = color;
            resolve("color changed");
        },delay)
    })
}
async function hemo(){
    try{
 await changeColor("red",1000);
 await changeColor("yellow",1000);
 await changeColor("green",1000);
 await changeColor("pink",1000);
 await  changeColor("orange",1000);
    }
    catch(err){
        console.log("error caught")
        console.log(err);
    }
}
