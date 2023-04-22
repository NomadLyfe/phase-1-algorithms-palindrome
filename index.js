function isPalindrome(word) {
  const wordLetters = word.split('');
  const backwordLetters = [];
  for (let i = 0; i < wordLetters.length; i++) {
    backwordLetters.unshift(wordLetters[i]);
  }
  const backword = backwordLetters.join('');
  if (word === backword) {
    return true;
  } else {
    return false;
  }
}

/* 
  Transform input (word) into an array of the letters (wordLetters).
  Using a for loop, create a new array (backwordLetters) that orients those letters backwords.
  Transform the backword array into a string (backword).
  Compare 'word' to 'backword' and return true if identical and false if not.
*/

/*
  Create wordLetters as an array of word by using .split method.
  Create empty array backwordLetters.
  Use for loop to .unshift the letters from wordLetters array onto backwordLetters
  Create backword by using .join method on backwordLetters.
  Use If Else statement to compare word to backword.
  If identical, return true; if not, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("poop"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
