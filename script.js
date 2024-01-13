// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

}

// Write password to the #password input
function writePassword(event) {
    event.preventDefault()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
    var  favFood = prompt("What is your favorite food? ");
    var favDrink = prompt("What is your favorite drink? ");
    var favColor = prompt("What is your favorite color? ");  
  
  passwordText.value = password + favFood + favDrink + favColor;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

