// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

  var outputArray = [];
  var userArray = [];

  // Possible Character Arrays
  var characterArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "=", "@", "^", "_", "~"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Confirm Character Type
  var numCharacter = prompt ("How many Characters would you like? Between 8 and 128");
  var characters = confirm ("Would you like special characters in your password?")
  var numbers = confirm ("Would you like numbers in your password?");
  var lowercase = confirm ("Would you like lowercase letters in your password?")
  var uppercase = confirm ("Would you like uppercase letters in your password?")

  // Combine Arrays
  if (characters) {
    outputArray = outputArray.concat(characterArray);
  }
  if (numbers) {
    outputArray = outputArray.concat(numArray);
  }
  if (lowercase) {
    outputArray = outputArray.concat(lowercaseArray);
  }
  if (uppercase) {
    outputArray = outputArray.concat(uppercaseArray)
  }

  console.log(outputArray)

  // Create Password
  for (var i = 0; i < numCharacter; i++) {

    userArray.push (outputArray[Math.floor(Math.random() * outputArray.length)]);
  }

  return userArray.join("");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
