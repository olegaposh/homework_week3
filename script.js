// How many characters would you like? 8-128 
// Click OK to confirm including special characters
// Click OK to confirm including numeric characters
// Click OK to cnfirm including lowercase characters
// Click Ok to confirm including uppercase characters

// Assignment Code


// ask the user the password length


function generatePassword() {


  var numberOfCharacters = prompt("How many characters would you like your password to be?(8-128)");

  // Make sure user picks a length between 8 and 128

  while (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {

    numberOfCharacters = prompt("Password has to be between 8 and 128 characters, Try again.");

  }

  // Ask for password parameters 

  var special = confirm("Click Ok to confirm including special characters");
  var numeric = confirm("Click OK to confirm including numeric characters");
  var lowerCase = confirm("Click OK to confirm including lowercase characters");
  var upperCase = confirm("Click OK to confirm including uppercase characters");

  // user must choose at least one parameter

  while (special === false && numeric === false && lowerCase === false && upperCase === false) {

    alert("You have to confirm at least one password characteristic!");
    special = confirm("Click Ok to confirm including special characters");
    numeric = confirm("Click OK to confirm including numeric characters");
    lowerCase = confirm("Click OK to confirm including lowercase characters");
    upperCase = confirm("Click OK to confirm including uppercase characters");
  }

  // declaring arrays

  var specialArray = ["@", "$", "!", "#", "%", "&", "*"];
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", ",d", "e", "f", "g", "j", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];


  // set empty array and empty string

  var master = [];
  var password = "";

  if (special) {

    for (var i = 0; i < specialArray.length; i++) {

      master.push(specialArray[i]);
    }

  }

  if (numeric) {

    for (var i = 0; i < numericArray.length; i++) {

      master.push(numericArray[i]);
    }

  }

  if (lowerCase) {

    for (var i = 0; i < lowerArray.length; i++) {


      master.push(lowerArray[i]);
    }

  }

  if (upperCase) {

    for (var i = 0; i < upperArray.length; i++) {

      master.push(upperArray[i]);

    }


  }

  for (var i = 0; i < parseInt(numberOfCharacters); i++) {

    var randomindex = Math.floor(Math.random() * (master.length));
    password = password + master[randomindex];

  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

