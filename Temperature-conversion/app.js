// Logic for the temperature conversion program

const input = document.querySelector('#input');
const convertToFahrenheit = document.querySelector('#convertToFahrenheit');
const convertToCelsius = document.querySelector('#convertToCelsius');
const submitBtn = document.querySelector('#submit');
const result = document.querySelector('#result');

let temp;

submitBtn.onclick = function(){
   
  temp = input.value;
    temp = Number(temp);
  if(isNaN(temp)){
    result.textContent = 'Please enter a valid number';
    return;
  }
  if(convertToFahrenheit.checked){
   
     temp = temp * 9/5 + 32;
     result.textContent = temp.toFixed(2) + ' °F';

  }
     else if(convertToCelsius.checked){
   
    temp = (temp-32)*(5/9);
     result.textContent = temp.toFixed(2) + ' °C';

  }
  else{
     result.textContent = 'Kindly choose a unit';

}

}









