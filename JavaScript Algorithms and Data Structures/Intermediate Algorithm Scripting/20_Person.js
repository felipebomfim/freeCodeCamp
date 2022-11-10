/*

Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let names = firstAndLast.split(' ');
    let first_name = names[0];
    let last_name = names[names.length-1];
    
    this.getFullName = (()=> first_name+" "+last_name);
  
    this.getFirstName = (()=>first_name);
    
    this.getLastName = (()=>last_name);
  
    this.setFirstName = ((first)=>{first_name = first;});
  
    this.setLastName = ((last)=>{last_name = last;});
  
    this.setFullName = ((firstAndLast)=> {
      firstAndLast = firstAndLast.split(' ');
      first_name = firstAndLast[0];
      last_name = firstAndLast[1];
    });
  
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();