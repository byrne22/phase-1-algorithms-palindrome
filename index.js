function reverse(word){
	return word.split("").reverse().join("")
}
function isPalindrome(word) {
  // Write your algorithm here
  // regexone.com
  const rev = reverse(word)
  return word === rev;
//   let reversed = word.split(" ").reverse().join(" ")
//   if(reversed === word){
// 	return true
//   }else{
// 	return false
//   }


}
// isPalindrome("racecar")

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;