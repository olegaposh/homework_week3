// How many characters would you like? 8-128 
// Click OK to confirm including special characters
// Click OK to confirm including numeric characters
// Click OK to cnfirm including lowercase characters
// Click Ok to confirm including uppercase characters

// ask the user the password length

var numberOfCharacters = prompt("How many characters would you like your password to be?(8-128)");

// Make sure user picks a length between 8 and 128

while (numberOfCharacters < 8 || numberOfCharacters > 128) {

  numberOfCharacters =  prompt("Password has to be between 8 and 128 characters, Try again.");

}

// Ask for password parameters 

var special = confirm("Click Ok to confirm including special characters");
var numeric = confirm("Click OK to confirm including numeric characters");
var lowerCase = confirm("Click OK to confirm including lowercase characters");
var upperCase = confirm("Click OK to confirm including uppercase characters");

// user must choose at least one parameter



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
