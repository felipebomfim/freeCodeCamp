/*
    Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by 
both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also 
evenly divisible by all numbers between 1 and 3. The answer here would be 6.


*/



function smallestCommons(arr) {
    let interval = [];
    let lower = (arr[0]<arr[1]?0:1);
    let higher = (lower+1)%2;
    for (let i = arr[lower]+1; i<arr[higher];i++)
      interval.push(i)
    let i_multiple = 1;
    const MULTIPLE = arr[0]*arr[1];
    let is_common_multiple;
    while (true){
      is_common_multiple = true;
      for (let i=0; i<interval.length;i++)
        if (i_multiple*MULTIPLE%interval[i] !== 0){
          is_common_multiple = false;
          break;
        }
        if (is_common_multiple)
          return i_multiple*MULTIPLE;
        i_multiple++;
    }
  }
  
  smallestCommons([1,5]);