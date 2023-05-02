const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onEnterInput = inputEl.addEventListener('input',(ivent)=> spanEl.textContent = ivent.currentTarget.value)