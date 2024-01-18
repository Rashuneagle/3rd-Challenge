// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt for password criteria
  var passLength = prompt("Choose a password length (between 8 and 128 characters):");
  passLength = parseInt(passLength); // Convert the input to an integer
  if (passLength < 8 || passLength > 128) {
    alert("Invalid password length. Please choose a length between 8 and 128 characters.");
    return ""; // Return an empty string as the password
  }

  // Prompt for character types
  var includeLowercase = prompt("Include lowercase characters?");
  var includeUppercase = prompt("Include uppercase characters?");
  var includeNumeric = prompt("Include numeric characters?");
  var includeSpecial = prompt("Include special characters?");

  // Validate that at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("At least one character type must be selected.");
    return ""; // Return an empty string as the password
  }

   // Generate the password based on selected criteria
   var password = generateRandomPassword(passLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  
   return password;
 }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
