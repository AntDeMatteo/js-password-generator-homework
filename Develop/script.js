// Assignment Code

// Global Variables

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

var generateBtn = document.querySelector("#generate");

// Function for user input
function writePassword() {
  var passwordLength = prompt('Password must contain length from 8 to 128 characters.');
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = alert("Character count must be between 8 and 128");
    return;
  }

  else {

    // Variables for Character Input

    var specialCharacters = window.confirm('Would you like to include any Special Characters?');
    var numericalCharacters = window.confirm('Would you like to include any numbers?');
    var upperCaseCharacters = window.confirm('Would you like to include Upper Case letters?');
    var lowerCaseCharacters = window.confirm('Would you like to include Lower Case letters?');

    if (specialCharacters === false && numericalCharacters === false && upperCaseCharacters === false && lowerCaseCharacters === false) {
      alert("Must make a character selection.");
      return;
    }
  };



    //userInput data

    var userInput = {
      length: passwordLength,
      special: specialCharacters,
      numbers: numericalCharacters,
      upperCase: upperCaseCharacters,
      lowerCase: lowerCaseCharacters,
    };

    return userInput;

  };

  function randomChar(array) {
    var randomNumber = Math.floor(Math.random() * array.length);
    return array(randomNumber);
    // password += chars.substring(randomNumber, randomNumber + 1);
  }

  function generatePassword() {
    var choices = choices();

    var charsConcat = 
    var charsGuarantee =
    var charsPassword =

    
  }



  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;






// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passwordLength = 12;
// var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
