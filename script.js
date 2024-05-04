const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");

function generatePasswords() {
  console.log("Button clicked!");

  let randomPassword1 = ""; // initialize as an empty string
  let randomPassword2 = "";

  // Generate the first random password
  for (let i = 0; i < 10; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length); // Generate a new index for each iteration
    randomPassword1 += characters[randomIndex1]; // Append the randomly selected character
  }

  password1El.value = randomPassword1; // Display the generated password

  // Generate the 2nd random password
  for (let i = 0; i < 10; i++) {
    let randomIndex2 = Math.floor(Math.random() * characters.length); // Generate a new index for each iteration
    randomPassword2 += characters[randomIndex2]; // Append the randomly selected character
  }

  password2El.value = randomPassword2; // Display the generated password
}
