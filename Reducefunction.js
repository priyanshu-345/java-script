//reduce function::
 let nums1 = [1,23,4,5,6];
 let finalval = nums1.reduce((res, el) => {
     console.log(res);//if you can use sum of all the numbers in one frame so comment out the line
     return res+el;
});
 console.log(finalval);
