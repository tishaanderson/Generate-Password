// Assignment Code
var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function generatePassword(){
  // added the alert to the beginning of the password so users would know requirements immediately
    alert("Safe passwords include:: 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character")
  var length = (prompt("Enter the length of characters you would like to use for your password ranging from 8 to 128 characters"));

    if (length < 8 || length > 128) {
    alert("Invalid length! -- Must choose between 8-128 or Cancel");
    return;
    }

// var characters = confirm("Would you like to include lowercase?")

// include lowercase, uppercase, numeric, and/or special characters

  // included variables for all character requirements
  var useLowercase = confirm("Would you like to include lowercase characters?");
  var useUppercase = confirm("Would you like to include uppercase characters?");
  var useNumber = confirm("Would you like to include numberic characters?");
  var useSpecial = confirm("Would you like to include special characters?");

  if (!useLowercase && !useUppercase && !useNumber && !useSpecial) {
    alert("Please choose at least one character type for your password");
    return;
    }

  // set valid character options
  var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacter = "0123456789";
  var specialCharacter = "!@#$%^&*()_-+=<>?";

  var allCharacters = ''
  if (useLowercase) allCharacters += lowercaseCharacter;
  if (useUppercase) allCharacters += uppercaseCharacter;
  if (useNumber) allCharacters += numberCharacter;
  if (useSpecial) allCharacters += specialCharacter;
    
  var generatedPassword = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters[randomIndex];
  }
  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




