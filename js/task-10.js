
const divBoxEl = document.querySelector('#boxes')
const inputEl = document.querySelector('input')
const creatBtnEl = document.querySelector('[data-create]')
const destroyBtnEl =document.querySelector('[data-destroy]')
let namber = 0;


const onInputChange = inputEl.addEventListener('input', namberInput)
const onCreatBtnPress = creatBtnEl.addEventListener('click',()=> createBoxes(namber))
const onDestroyPress = destroyBtnEl.addEventListener('click', ()=> destroyBoxes())

function namberInput(ivent) {
  
 return namber = ivent.currentTarget.value
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 function createBoxes(amount) {
  let parametrs = 20;
  for (let i = 1; i <= amount; i++) {
    parametrs+=10
    let creatDiv = document.createElement('div')
    creatDiv.style.width = `${parametrs}px`
    creatDiv.style.height = `${parametrs}px`
    creatDiv.style.backgroundColor = getRandomHexColor()
divBoxEl.insertAdjacentElement("beforeend",creatDiv )
  }
}

function destroyBoxes() {
 divBoxEl.innerHTML =''
     inputEl.value =''
  
  }


