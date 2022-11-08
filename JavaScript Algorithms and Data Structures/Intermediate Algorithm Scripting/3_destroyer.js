/*


You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the 
same value as these arguments.

Note: You have to use the arguments object.

*/
function destroyer(arr) {
    let index;
    let elements = Array.prototype.slice.call(arguments,1);
    for (let i in elements){
      index = arr.indexOf(elements[i]);
      while (index !== -1){
        arr.splice(index,1);
        index = arr.indexOf(elements[i]);
      }
  
    }
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
