// Assignment Code
var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function generatePassword(){
  // added the alert to the beginning of the password so users would know requirements immediately
    alert("Safe passwords include:: 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character")
  var length = parseInt(prompt("Enter password using 8 to 128 characters"));

    if (length < 8 || length > 128) {
    alert("Invalid length");
    return;
    }

  // included variables for all character requirements
  var useLowercase = confirm("Would you like to include lowercase characters?");
  var useUppercase = confirm("Would you like to include uppercase characters?");
  var useNumber = confirm("Would you like to include numberic characters?");
  var useSpecial = confirm("Would you like to include special characters?");

    if (!useLowercase || !useUppercase || !useNumber || !useSpecial) {
      alert("Please choose character types");
      return;
    }

  // set valid character options
  var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacter = "0123456789";
  var specialCharacter = "!@#$%^&*()_-+=<>?";

  var allCharacters = lowercaseCharacter = uppercaseCharacter = numberCharacter = specialCharacter;

}



// var characters = confirm("Would you like to include lowercase?")

// include lowercase, uppercase, numeric, and/or special characters

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




