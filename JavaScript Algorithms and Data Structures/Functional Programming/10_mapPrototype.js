/*
    Write your own Array.prototype.myFilter(), which should behave exactly like Array.
    prototype.filter(). You should not use the built-in filter method. The Array instance can 
    be accessed in the myFilter method using this.
*/

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach(a => {
    if (callback(a))
      newArray.push(a);
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});