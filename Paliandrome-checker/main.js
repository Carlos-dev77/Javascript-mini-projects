// Interactivity  for the paliandrome checker

const input =document.querySelector('#input');
const checkBtn=document.querySelector('#check');
function reverseString(str){
     return str.split("").reverse().join("");
}
 checkBtn.addEventListener('click',()=>{
    const value=input.value;
  const reverse=reverseString(value);
 
 if(value===reverse){
  alert('It is a paliandrome');
 }
 else{
  alert('It is not a paliandrome ')
 }
 input.value="";
 }
);




















