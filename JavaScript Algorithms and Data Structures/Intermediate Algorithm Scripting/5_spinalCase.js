/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// function spinalCase(str) {
//     str = str.replace(/[_]+/g, ' ');
//     str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
//     str = str.split(/\W/);
//     str = str.join("-");
//     str = str.toLowerCase()
//     return str;
// }

function spinalCase(str) {
    str = changeFirstLetterToLowerCase(str);
    str = removeWhiteSpaces(str);
    // str = changeFromUpperCaseToJoinedByDashes(str);
    return str;
}

function changeFirstLetterToLowerCase(str){
    return str.charAt(0).toLowerCase()+str.slice(1);
}

function removeWhiteSpaces(str){
    return str.replace(/\s/g,'');
}
  

console.log(spinalCase("The  __Andy_GrifFiths Show"));