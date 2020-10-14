// Assignment Code
const passwordForm = document.getElementById("passwordBox");
const minPassLength = 8;
const maxPassLength = 128;
let specialCharsCheckbox = document.getElementsByName("specialChars")[0];
let numbersCheckbox = document.getElementsByName("numbers")[0];
let lwrCharsCheckbox = document.getElementsByName("lwrChars")[0];
let upprCharsCheckbox = document.getElementsByName("upprChars")[0];


// function to generate a password with the number of characters the user said in the passwordLength prompt
function createPassword() {

    // define our character sets used for password generation
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseletters = lowercaseLetters.toUpperCase();
    const numbersList = "0123456789";
    const specialCharacters = "!@#$%^&*()_+{}|:?><[]";

    // define our checkbox states and where they are in the DOM
    lettersLow = document.getElementsByName("lwrChars")[0].checked;
    lettersHigh =  document.getElementsByName("upprChars")[0].checked;
    numbers = document.getElementsByName("numbers")[0].checked;
    specials = document.getElementsByName("specialChars")[0].checked;

    // Ask user how long they want their password to be
    let passwordLength = prompt("Length of password? (Must be from 8 to 128 characters)");

    // if no checkboxes are selected, then prompt the user again to fill out the form and reload the page
    if (lettersLow == false && lettersHigh == false && numbers == false && specials == false){
        alert("You must select at least one character type!")

        // reload page to get back to the point where the event hasn't been triggered as there's no waiting while loop for checkbox input. hacky but it works
        window.location.reload();
    }
    // if the user's password length submitted is more than 8 and less than 128, generate a password and place it in the textarea on the page
    if (passwordLength >= minPassLength && passwordLength <= maxPassLength) {

        // Clears password var if there has been a previous passgen so we don't get stacking previously gen'd passwords
        password = "";

        // Log if the box is checked for the respective char type
        console.log(specials, numbers, lettersLow, lettersHigh)

        // add a character as long as the # of iterations is less than the user specified passwordLength
        for (i=0; i<passwordLength;i++) {
            // if our lowercase checkbox has been checked and the current length of our gen'd passwd is less than the user's passwordLength, add a random char from lowercaseLetters string
            if (lettersLow && password.length < passwordLength) {
                password = password+=lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
            }
            if (lettersHigh && password.length < passwordLength) {
                password = password+=uppercaseletters.charAt(Math.floor(Math.random() * uppercaseletters.length));

            }
            if (numbers && password.length < passwordLength) {
                password = password+=numbersList.charAt(Math.floor(Math.random() * numbersList.length));

            }
            if (specials && password.length < passwordLength) {
                password = password+=specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
            }

    }

    // Add generated password to html form
    passwordForm.value = password;
}
    else{
        alert("Password MUST BE BETWEEN 8 AND 128 characters!")
    }
}

// copy the generated password to users clipboard
function copyToClipboard() {
    let copyPass = document.getElementById("passwordBox");
    copyPass.focus();
    copyPass.select();
    document.execCommand("copy");
    alert("Password copied!");
  }
