Palindrome checker------
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/g).join("");
  var test = string.split("").reverse().join("") === string;
  console.log(string)
  return test;
}

palindrome("eye");

