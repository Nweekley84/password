function generatePassword() { // Password Generator function
  // Set Variables
  var pwLength = parseInt(prompt("Enter password length (Must be between 8 and 128)")); // Set length rules 8 < 128
    while (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || pwLength === null) { // Set's paramateres
      alert("That's not a valid number. Please enter a number from 8-128."); // Warn of errors
      pwLength = prompt("Enter password length (Must be between 8 and 128)"); // Run prompt again if fail
    }
  var uppercase = confirm("Include uppercase letters?"); // Prompt [Yes]/No for uppercase letters
  var lowercase = confirm("Include lowercase letters?"); // Prompt [Yes]/No for lowercase
  var numbers = confirm("Include numbers?"); // Prompt [Yes]/No for numbers
  var symbols = confirm("Include special characters?"); // Prompt [Yes]/No for special chars

  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Set all Uppercase chars
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; // Set all lowercase chars available
  var numberChars = "0123456789"; // Set all numbers
  var symbolChars = "!@#$%^&*()_+=-[]{}|:<>?,./"; // Set all special chars

  var characters = ""; // To be filled by function

    if (uppercase) { // In relation to var uppercase confirm prompt (Default to Yes, or 1)
      characters += uppercaseChars;
    }

    if (lowercase) { // related lowercase confirm prompt
      characters += lowercaseChars;
    }

    if (numbers) { // related to numbers confirm prompt
      characters += numberChars;
    }

    if (symbols) { // related to symbols confirm prompt
      characters += symbolChars;
    }

  var password = ""; // to be filled by function

    for (var i = 0; i < pwLength; i++) { // Generate password with length based off array using the pwLength set by user.
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password; // end function, store password for use in writePassword function below.

}

// Do all your code here, don't touch below

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // make this function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
