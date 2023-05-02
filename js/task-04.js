
const counterValue = 0;
const counterEl = document.querySelector('#value');
counterEl.textContent = counterValue;
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

 incrementBtnEl.addEventListener('click', ()=> counterEl.textContent +=1 )
   decrementBtnEl.addEventListener('click',()=> counterEl.textContent -=1) 


 





 