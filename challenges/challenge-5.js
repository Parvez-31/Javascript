// Challenge:
const str = "I love cupcakes very much";

const longestWord = function (num) {
  // function body
  const words = num.split(" ");
  let longword = ""; // "I", "love", "cupcakes",

  // for of loop
  /* for (let word of words) {
    if (word.length > longword.length) {
      // if( 4 > 8) {}
      longword = word;
    }
  }
*/

  // for loop
  for (let i = 0; i < words.length; i++) {
    // for loop body
    if (words[i].length > longword.length) {
      // if body
      longword = words[i];
    }
  }

  return longword;
};

console.log(longestWord(str));
