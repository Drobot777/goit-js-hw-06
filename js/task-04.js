
let counterValue = 0;
const counterEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

incrementBtnEl.addEventListener('click', increments)
decrementBtnEl.addEventListener('click',decrements) 

function increments() {
  return counterEl.textContent = counterValue+=1;
}
function decrements() {
  return counterEl.textContent = counterValue-=1;
}



 