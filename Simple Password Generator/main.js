// Generate Random Password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    // Potential values for generated passwords 
     let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=,./<>?;:'";

     let password = "";

     // For loop to create password characters
     for(var i = 0; i <= complexity; i++){
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
     }

     // To get Password into display area
     document.getElementById("display").value = password;

     // "Previously Generated" Section
     document.getElementById("lastPasswords").innerHTML += password + "<br />";

}

// Length Displayer
document.getElementById("length").innerHTML = "length 10"

// Function for slider bar length
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1"
    }
}

// Clipboard function
function copyPassword(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard.");
}