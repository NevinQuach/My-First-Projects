// Basic information
// alert ("This JavaScript is for Pratice.HTML");
console.log ("This JavaScript is for Pratice.HTML");

// Displays the number 0
let number = 0
let finalnumber = number
// alert (finalnumber);
console.log ("This is the number " + finalnumber);

// Code for Pratice Button
let testbutton = document.getElementById("testbutton");
let numbermessage = document.getElementById("numbermessage");
let nameinput = document.getElementById("nameinput");

testbutton.addEventListener("click", function() {
    let username = nameinput.value;
    numbermessage.textContent = "Hello " + username + ", Have a Nice day";
    numbermessage.style.display = "block";
});
