// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  //GIVEN I need a new, secure password
  // need a button or link to get a new password
  // need to show the password on the page

//**********************Function Here****************************** */
//write a function called "generatepassword" which will have a series of prompts

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password



//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//we have to ask how many characters they want in the password
//we have to check to make sure it is between 8 and 128
//otherwisw, we tell user to fic their input

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//confirm if the want lowercase
//confirm if they want uppercase
//confirm if they want numeric
//confirm if they want special characters


//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from. 

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//for all the characters chosen, choose one randomly and add it to our password "x" number of times. 

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
