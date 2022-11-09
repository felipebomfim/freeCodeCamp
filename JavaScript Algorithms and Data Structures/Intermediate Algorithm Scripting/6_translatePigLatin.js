/*



Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    let final_str = "";
    let vowels = ['a','e','i','o','u'];
    let str_chars = str.split("");
    let i_cluster_consonants = 0;
    while (vowels.indexOf(str_chars[i_cluster_consonants]) === -1)
      i_cluster_consonants++;
    
    if (i_cluster_consonants !== 0)
      final_str += str.slice(i_cluster_consonants) + str.slice(0,i_cluster_consonants)+"ay";
    else
      final_str += str + "way";
  
    return final_str;
  }
  
  translatePigLatin("consonant");