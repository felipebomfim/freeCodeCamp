/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

*/

function titleCase(str) {
    let strings = str.split(" ");

    let final_str = "";
    for (let i=0; i < strings.length; i++){
        final_str+=strings[i].charAt(0).toUpperCase()+strings[i].slice(1).toLowerCase()
        if (i+1 !== strings.length)
            final_str+=" "
    }
    return final_str;
}

console.log('"'+titleCase("I'm a little tea pot")+'"');
