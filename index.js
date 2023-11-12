function isPalindrome(word) {
  // Write your algorithm here
  const y = word.split("");
  const z=[];
  y.forEach((e) => (z.unshift(e)))
  console.log(z);
  return (y.toString() == z.toString())
  //if (y==z) {return true}
  //else {return false}
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //show string array
  //console.log(y)
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
