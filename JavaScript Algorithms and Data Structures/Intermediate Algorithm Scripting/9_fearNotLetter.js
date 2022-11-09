/*
    Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    str = str.split("")
    let index = alphabet.indexOf(str[0]);
    for (let i=index; i<alphabet.length; i++)
      if (alphabet[i] !== str[i-index])
        return alphabet[i];
    
  }
  
  console.log(fearNotLetter("stvwxy"));