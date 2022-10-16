Palindrome checker------
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/g).join("");
  var test = string.split("").reverse().join("") === string;
  console.log(string)
  return test;
}

palindrome("eye");

roman numeral converter
function convertToRoman(num) {
  var bers = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];
  var roman = [];
  bers.forEach(function(n){
  while (num >= n[1]){
    roman.push(n[0]); 
      num -= n[1];
    }
  })
 return roman.join('');
}

convertToRoman(36);
