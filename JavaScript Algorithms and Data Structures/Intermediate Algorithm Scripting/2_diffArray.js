/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

*/

// function diffArray(arr1, arr2) {
//     const newArr = [];
//     let arrays = [arr1, arr2];
    
//     for (let i=0; i<2; i++)
//       for (let j=0; j<arrays[i].length; j++){
//         if(arrays[(i+1)%2].indexOf(arrays[i][j]) === -1)
//           newArr.push(arrays[i][j]);
//       }
  
  
//     return newArr;
//   }

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let el of arr2){
    // console.log(el);
    if (!isInArray(el,arr1)){
      newArr.push(el);
      console.log(typeof(el));
    }
  }
  for (let el of arr1){
    if (!isInArray(el,arr2))
      newArr.push(el);
  }
  return newArr;
}

function isInArray(input, arr){
  for (let el of arr){
    if (el === input)
      return true;
  }
  return false;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));