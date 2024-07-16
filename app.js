let counterDisplayElem = document.querySelector('.counter-display');
let counterResetElem = document.querySelector('.counter-reset');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterResetElem.addEventListener("click",()=>{
    count = 0;
    updateDisplay();
});

function give1000(){
  count = count + 1000;
  updateDisplay();
};

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
