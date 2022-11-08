/*
    For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 
    (both inclusive) is 10.
*/

function sumAll(arr) {
    let sum = 0;
    let higher = (arr[1]>arr[0]?1:0);
    let lower = (higher+1)%2;
    for (let i=arr[lower]; i<=arr[higher]; i++)
        sum+=i;
    return sum;
  }
  
  sumAll([1, 4]);