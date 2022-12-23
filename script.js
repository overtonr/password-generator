//prompt for pass length (8-128)
var lowerChar = ['abcdefghijklmnopqrstuvwxyz'];
var upperChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numericChar = ['0123456789'];
var specialChar = ['~!@#$%^&*()-_+={}[]|/;:<>?.'];

var finalPass = [];
var passLength = [];
var passContains = [];

// linked to button ID in HTML
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button: calls function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

  //execution for length of password
  passLength = prompt('How long is your desired password length? please enter a number between 8 and 128.')
  if (passLength < 8 || passLength > 128) {
    alert('Password must be in between 8 and 128 characters long. Please try again');
  //refreshes page to restart prompting
  window.location.reload();
  };
  //execution for lower
    var hasLower = confirm('Do you want your password to contain lower case letters? OK if yes, cancel if not.');
  //execution for upper
    var hasUpper = confirm('Do you want your password to contain upper case letters? OK if yes, cancel if not.');
    //execution for num
    var hasNum = confirm('Do you want your password to contain numbers? OK if yes, cancel if not.');
  //execution for special
  var hasSpecial = confirm('Do you want your password to contain special case letters? OK if yes, cancel if not.');

  if (hasLower){
    passContains += lowerChar;
  }
  if (hasUpper){
    passContains += upperChar;
  }
  if (hasNum){
  passContains += numericChar;
  }
  if (hasSpecial){
    passContains += specialChar;
  }
  if (!hasLower && !hasUpper && !hasNum && !hasSpecial){
    alert("Please select at least one criteria for password characters");
    return;
  }
  console.log(passContains);
};




writePassword();

