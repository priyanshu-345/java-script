 //Filter function::

  let nums = [1,2,3,4,4,6,7,7,65,43,8,5,5,22,23,3,3,4,54657,67];
  let ans  = nums.filter((el) =>{
    return el  % 2 != 0;//even->true , odd -> false
  });
