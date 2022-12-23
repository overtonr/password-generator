//prompt for pass length (8-128)
var lowerChar = ['abcdefghijklmnopqrstuvwxyz'];
var upperChar =['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numericChar = ['0123456789'];
var specialChar = ['~!@#$%^&*()-_+={}[]|/;:<>?.'];

var finalPass = [];


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

function createPassword(){

  //execution for length of password
  finalPass.length = prompt('How long is your desired password length? please enter a number between 8 and 128')
    if(finalPass.length < 8 || finalPass.length> 128){
      alert('Password must be in between 8 and 128 characters long. Please try again');
    };
  //execution for lower
  //execution for upper
  //execution for special
};



writePassword();

