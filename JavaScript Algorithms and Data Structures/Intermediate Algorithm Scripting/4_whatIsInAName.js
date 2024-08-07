/*


Make a function that looks through an array of objects (first argument) and returns an array 
of all objects that have matching name and value pairs (second argument). Each name and value 
pair of the source object has to be present in the object from the collection if it is to be 
included in the returned array.


For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: 
"Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { 
last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

*/
// function whatIsInAName(collection, source) {
//     const arr = [];
//     // Only change code below this line
//     let isInName = true;
//     for  (let i=0; i<collection.length; i++){
//       isInName = true;
//       for (let property in source){
//         if (collection[i][property] !== source[property]){
//           isInName = false;
//           break;
//         }
//       }
//       if(isInName)
//         arr.push(collection[i])
//     }
  
//     // Only change code above this line
//     return arr;
//   }

function whatIsInAName(collection, source) {
  collection = collection.filter((name)=>{
    for (let field in source){
      if (name[field] != source[field])
        return false;
    }
    return true;
  });
  return collection;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}));
