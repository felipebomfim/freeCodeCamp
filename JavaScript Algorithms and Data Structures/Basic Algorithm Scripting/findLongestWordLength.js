/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
  
  let words = str.split(' ');
  let longestWord = words[0]; 
  for (i in words){
    if (words[i].length > longestWord)
      longestWord = words[i];
  }
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
