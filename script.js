// special characters from OWASP Foundation
var specialCharacters = ["!",
 "'",
 "#",
 "$", "%","&", ",","(",
 ")",'*','+',',','-','.','/',':',';','<','=','>','?','@','[',
 "\\", ']', '^', '_', '`', '{', '|', '}', '~'];

 //assign alphabet characters(lower and upper)
var alphaUpper = Array.from(Array(26)).map((e, i) => i+65);
var alphaLower = Array.from(Array(26)).map((e, i) => i+65+32);

var Upper = alphaUpper.map((x) => String.fromCharCode(x));
var Lower = alphaLower.map((x) => String.fromCharCode(x));

//assign numbers 0-9
var Numbs = [];
for (let i = 0; i<10; i++) {  
  Numbs[i] = i;
}
//prompt user for passward options
function passwordOption(){
  var length = 
  prompt('How many characters would you like your password?', 'password length(8-128)');

  if(isNaN(length)){
    alert('Password length must be a number.');
    return
  }

  if (length<8){
    alert('Password length must be at least 8 characters.');
    return
  }

  if (length >128){
    alert('Password length must be less or same with 128 characters.')
    return
  }

  var confSpecial = confirm('Press OK to confirm including special characters on your password');
  var confNumb = confirm('Press OK to confirm including numeric characters on your password');
  var conflow = confirm('Press OK to confirm including alphabet lowercases on your password');
  var confUp = confirm('Press OK to confirm including alphabet uppercases on your password');

//Does password have a special character or a number or uppercase or lowercase?
  if (confSpecial==0 && confNumb==0&& conflow==0&& confUp==0){
    alert('At least one option must be selected.')
    return
  }
  //result
  var requirement={
    length: length,
    special: confSpecial,
    num:confNumb,
    low:conflow,
    up:confUp};
  return requirement;
}

// generate random passwords
function generatePassword(){
  var requirements = passwordOption();
  var passwords= [];
  var storage = [];
  if(requirements.special ==1){
    storage = specialCharacters;
  }
  if(requirements.num ==1){
    storage = storage.concat(Numbs);
  }
  if(requirements.up ==1){
    storage = storage.concat(Upper);
  }
  if(requirements.low ==1){
    storage = storage.concat(Lower);
  }
  //length
  for(let i = 0; i< requirements.length; i++){
    passwords[i] = random(storage);
  }

  return passwords.join('');
}
//easy access random function
function random(a){
  var b = Math.floor(Math.random()*a.length);
  var c = a[b];
  return c;
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
