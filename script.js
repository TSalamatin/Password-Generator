// Assignment code here
var uppercaseCharacter
var lowercaseCharacter
var specialCharacter
var numberCharacter

// Get references to the #generate element


//Generate Random password based on string
function randomPassword(length, characters) {
  var result = '';
  const charactersLength = characters.length
 
  for (var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength ));
    
  } return result
} 

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var availableCharacters = ''
  
  //Present Prompts for password criteria
  // Uppercase, lowercase, numer, and/or special characters
  do {
    var passwordLength = parseInt(prompt("Please define a password length of at least 8 characters and no more than 128.", 8),10);
   
    } while ( passwordLength === null || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) == true ) ;

    console.log(passwordLength)


  uppercaseCharacter = confirm("Do you want an uppercase character in your password?")
    if (uppercaseCharacter) {
      alert("An uppercase character will be added")
      availableCharacters = availableCharacters.concat("ABCDEFGHIJKLMNOPQRTSTUWXYZ")
      console.log("Uppercase")
    } else {
      alert("An uppercase character will not be added")
    }

  lowercaseCharacter = confirm("Do you want a lowercase character in your password?")
    if (lowercaseCharacter) {
      alert("A lowercase character will be added")
      availableCharacters = availableCharacters.concat("abcdefghijklmnopqrstuvwxyz")
      console.log("lowercase")
    } else {
      alert("A lowercase character will not be added")
    }

  specialCharacter = confirm("Do you want a special character in your password?")
    if (specialCharacter) {
    alert("A special character will be added")
    availableCharacters = availableCharacters.concat(" !#$%&'()*=,-./;:<=>?@[]_`{}~")
    console.log("Special Character")
    } else {
      alert("A special character will not be added")
    }

  numberCharacter = confirm("Do you want a number in your password?")
  if (numberCharacter) {
   alert("A number will be added")
   availableCharacters = availableCharacters.concat("1234567890")
   console.log("Number")
  } else {
    alert("A number will not be added")
  }

  
  var password = randomPassword(passwordLength,availableCharacters)
  passwordText.value = password

}


// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);