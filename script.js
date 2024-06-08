// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt for password length
  var passLength = prompt("Choose a password length (between 8 and 128 characters):");
  passLength = parseInt(passLength); // Convert the input to an integer
  if (isNaN(passLength) || passLength < 8 || passLength > 128) { // Added isNaN check
    alert("Invalid password length. Please choose a length between 8 and 128 characters.");
    return ""; // Return an empty string as the password
  }

  // Confirm character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("At least one character type must be selected.");
    return ""; // Return an empty string as the password
  }

  // Generate the password based on selected criteria
  var password = generateRandomPassword(passLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  return password;
}

// Function to generate a random password based on criteria
function generateRandomPassword(length, lowercase, uppercase, numeric, special) {
  var charset = "";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) charset += "0123456789";
  if (special) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (charset === "") { // Added check for empty charset
    return ""; // Return an empty string if no character types are selected
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) { // Check if password is not an empty string
    passwordText.value = password;
    alert("Generated Password: " + password); // Display the password in an alert
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
