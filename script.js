//prompt for pass length (8-128)
var lowerChar = ['abcdefghijklmnopqrstuvwxyz'];
var upperChar =['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numericChar = ['0123456789'];
var specialChar = ['~`!@#$%^&*()-_+={}[]|/;:<>?.'];






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();

