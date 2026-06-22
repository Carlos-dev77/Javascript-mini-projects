// Css for the paliandrome checker
const input = document.querySelector('#input');
   
 function reverseString(str){
    return str.split("").reverse().join("");
 }
 function checkValue(){
    const value = input.value;
    const newValue = reverseString(value);

  if (value ===newValue){
    alert('It is a paliandrome');
  }
else {
    alert('It is not a paliandrome');
}

input.value="";
 }




















