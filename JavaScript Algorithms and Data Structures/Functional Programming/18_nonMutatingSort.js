/*
Use the sort method in the nonMutatingSort function to sort the elements of an array in 
ascending order. The function should return a new array, and not mutate the globalArray 
variable.
*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let new_arr = [...arr];
  new_arr.sort((a,b)=>(a-b));
  return new_arr;
  // Only change code above this line
}

nonMutatingSort(globalArray);