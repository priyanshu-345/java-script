
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
// async function hemo(){
//     try{
//  await changeColor("red",1000);
//  await changeColor("yellow",1000);
//  await changeColor("green",1000);
//  await changeColor("pink",1000);
//  await  changeColor("orange",1000);
//     }
//     catch(err){
//         console.log("error caught")
//         console.log(err);
//     }
// }
//json format::

// let jsonRes=
// '{"fact":"The first official cat show in the UK was organised at Crystal Palace in 1871.","length":78}'
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);
// let student  = {
//     name:"pranshu",
//     age:"89",
// };

//full of API calls::

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data1 = ", data.fact);
//          return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2 = ",data2.fact);
//     })

//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });
//   console.log("i am pranshu");

//   async function getfacts() {
//     try{
//     let res =  await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 =  await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   }
//   catch(e) {
//     console.log("error - ",e);
//   }
//   console.log("pranshu");
// }

//Axios methods:


let btn  = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random"
btn.addEventListener("click", async()=>{
     let link =  await getimage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
});
// btn.addEventListener("click", async()=>{
//      let fact = await getfacts();
//      console.log(fact);
//      let p = document.querySelector("#result");
//      p.innerText = fact;
// });
// let url = "https://catfact.ninja/fact";
async function getimage() {
    try{
        let res =  await axios.get(url2);
        return res.data.message;
      }
      catch(e) {
        console.log("error - ", e);
        return "/";
      }
    }

    const url3 = "https://icanhazdadjoke.com/";
    async function  getjokes() {
        try{
            const config = {headers:{Accept: "application/json"}};
            console.log(config);
            let res2 = await axios.get(url3,config   );
            console.log(res2.data);
        }
        catch(err){
            console.log(err);
        }
        
    }
