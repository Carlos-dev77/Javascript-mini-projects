const countlabel=document.querySelector('#count-label');
const decreaseBtn=document.querySelector('#decrease-btn');
const resetBtn=document.querySelector('#reset-btn');
const increaseBtn=document.querySelector('#increase-btn');
let count=0;
decreaseBtn.addEventListener('click',decrease);
resetBtn.addEventListener('click',reset);
increaseBtn.addEventListener('click',increase);

function decrease(){
    count--
    countlabel.textContent=count;
}
function reset(){
    count=0;
    countlabel.textContent=count;
}
function increase(){
    count++
    countlabel.textContent=count;
}
