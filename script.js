// Creating variables for our buttons we will use to generate the password and clear the password
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear")


// Prompt to ask how long password should be
var charNumber = prompt ("Please select a password character length between 8 and 128. Please input only the number")

// Validation of correct character length

if (charNumber < 8 || charNumber > 128) {
    alert ("Invalid response. Please refresh and enter valid character length")
}

else {
  // This case assumes we validated character length. Now we are determining which combination of characters to use in password generator.

var wantsNumbers = confirm("would you like to include numbers?")
var wantsSymbols = confirm ("would you like to include symbols?")
var wantsLowercase = confirm ("would you like to include lowercase letters?")
var wantsUppercase = confirm ("would you like to include upper case letters?")

// Creating string of conditionals to determine which combination of characters we'll use to pull characters from to randomize password.

    // Just numbers
if (wantsNumbers===true && wantsSymbols===false && wantsLowercase===false && wantsUppercase===false) {
    
    var charcombo = "0123456789"
}
// Just symbols
else if (wantsNumbers===false && wantsSymbols===true && wantsLowercase===false && wantsUppercase===false) {
    var charcombo = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"

}
// Just lowercase
else if (wantsNumbers===false && wantsSymbols===false && wantsLowercase===true && wantsUppercase===false) {
    var charcombo = "abcdefghijklmnopqrstuvwxyz"

}
// Just uppercase
else if (wantsNumbers===false && wantsSymbols===false && wantsLowercase===false && wantsUppercase===true) {
    var charcombo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

}
// Numbers and Symbols
else if (wantsNumbers===true && wantsSymbols===true && wantsLowercase===false && wantsUppercase===false) {
    var charcombo = "0123456789~`!#$%^&*+=-[]\\\';,/{}|\":<>?"

}
// Numbers and Lowercase
else if (wantsNumbers===true && wantsSymbols===false && wantsLowercase===true && wantsUppercase===false) {
    var charcombo = "0123456789abcdefghijklmnopqrstuvwxyz"

}
// Numbers and Uppercase
else if (wantsNumbers===true && wantsSymbols===false && wantsLowercase===false && wantsUppercase===true) {
    var charcombo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

}
// Symbols and Lowercase
else if (wantsNumbers===false && wantsSymbols===true && wantsLowercase===true && wanstUppercase===false) {
    var charcombo = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?abcdefghijklmnopqrstuvwxyz"

}
// Symbols and Uppercase
else if (wantsNumbers===false && wantsSymbols===true && wanstLowercase===false && wantsUppercase===true) {
    var charcombo = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ"

}
// Lowercase and Uppercase
else if (wantsNumbers===false && wantsSymbols===false && wantsLowercase===true && wantsUppercase===true) {
    var charcombo = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

}
// Numbers, Symbols and Lowercase
else if (wantsNumbers===true && wantsSymbols===true && wantsLowercase===true && wantsUppercase===false) {
    var charcombo = "0123456789~`!#$%^&*+=-[]\\\';,/{}|\":<>?abcdefghijklmnopqrstuvwxyz"

}
// Numbers, Symbols and Uppercase
else if (wantsNumbers===true && wantsSymbols===true && wantsLowercase===false && wantsUppercase===true) {
    var charcombo = "0123456789~`!#$%^&*+=-[]\\\';,/{}|\":<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ"

}
// Numbers, Lowercase and Uppercase
else if (wantsNumbers===true && wantsSymbols===false && wantsLowercase===true && wantsUppercase===true) {
    var charcombo = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

}
// Symbols, Lowercase and Uppercase
else if (wantsNumbers===false && wantsSymbols===true && wantsLowercase===true && wantsUppercase===true) {
    var charcombo = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!#$%^&*+=-[]\\\';,/{}|\":<>?"

}
// Wants all
else if (wantsNumbers===true && wantsSymbols===true && wantsLowercase===true && wantsUppercase===true) {
    var charcombo = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!#$%^&*+=-[]\\\';,/{}|\":<>?0123456789"
}
else {
    alert("You must select at least one of the four character types presented. Please refresh")
}

alert("Please click Generate Password to reveal your password")

// Adding function which will take the string value of charcombo based on conditions and make a random string from it. 

function generatePassword(i) {
// Set blank string value to variable so that the for loop will add characters as it loops through
  var string = ""

// create a for loop to randomly generate characters from selected string of characters based on the combination of characters user would liek (conditions met).
// Loop will choose random character from string, then as the loop iterates it will add characters to the string until. 
// Number of iterations = number of characters user specifies at beginning. This will then be the length of the password.
    for (i = 0; i < charNumber; i++) {
        string += (charcombo.charAt(Math.floor(Math.random() * charcombo.length)))
    }

    return string
}

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// creating function to clear password upon clicking clear button
function clearPassword() {
    var passwordText = document.querySelector("#password");

    passwordText.value = "";
}

// Add event listener to generate generate and clear buttons
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", clearPassword);
