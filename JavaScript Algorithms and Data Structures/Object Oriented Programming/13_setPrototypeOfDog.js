/*
Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by 
setting the prototype to a new object.
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    constructor: Dog,
    numLegs: 4,
    eat: function (){
        console.log("nom nom nom");
    },
    describe: function(){
        console.log("My name is " + this.name);
    }
};