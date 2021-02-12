// Random password generator function 
function generate() {
    var confirmLength = '';



// Character length input request
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }

// Variables

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;



// user input for password character types
    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Would you like to use numerical characters?") == true) {
            numberSelection = true
        }


// Alert/if statement for chosen/not chosen character types are selected
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }


// Random Password generation
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}


// Copy function
function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
}
