const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassWordEl = document.getElementById("first-password-el")
let secondPassWordEl = document.getElementById("second-password-el")
let generateBtn = document.getElementById("generate-btn")
const clearBtn = document.getElementById("clear-btn")
console.log(clearBtn)


// First Password
function firstPassword(){
for( i = 0; i < 16; i++){
  let indexNumber = Math.floor(Math.random() * characters.length)
  // console.log(characters[indexNumber])
  firstPassWordEl.textContent += characters[indexNumber]

}
}
// secondPassword()

function secondPassword(){
  for( i = 0; i < 16; i++){
    let indexNumber = Math.floor(Math.random() * characters.length)
    // console.log(characters[indexNumber])
    secondPassWordEl.textContent += characters[indexNumber]
  
  }

}
// passWord Generator()
function passWordGenerator(){
  firstPassword()
  secondPassword()
}

function clearPasswords(){
  firstPassWordEl.textContent = ""
  secondPassWordEl.textContent = ""
}

generateBtn.addEventListener("click", passWordGenerator)
clearBtn.addEventListener("click", clearPasswords)


