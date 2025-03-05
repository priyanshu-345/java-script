//reduce function::
 let nums1 = [1,23,4,5,6];
 let finalval = nums1.reduce((res, el) => {
     console.log(res);//if you can use sum of all the numbers in one frame so comment out the line
     return res+el;
});
 console.log(finalval);

// reduce function me se Maximum value find karna::
let  arr2 = [1,2,3,45,6,7,899,10,11,12,2];
 let max = -1;
 for(let i=0;i<arr2.length;i++){
  if(max < arr2[i]){
      max = arr2[i];
    }
 }
 console.log(max);
let max = arr2.reduce((max ,el) =>{
    if(max <el){
       return el;

   }else{
        return max;
   }
 });
