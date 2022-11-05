/*

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately 
invoked function expression (IIFE).

Code:

function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

*/

(() => {console.log("A cozy nest is ready");})();

