
const divBoxEl = document.querySelector('#boxes')
const inputEl = document.querySelector('input')
const creatBtnEl = document.querySelector('[data-create]')
const destroyBtnEl =document.querySelector('[data-destroy]')
let namberEnterInput = 0;
let arrayOfElemebts = [];

const onInputChange = inputEl.addEventListener('input', (event)=>namberEnterInput = event.currentTarget.value)
const onDestroyPress = destroyBtnEl.addEventListener('click', destroyBoxes)
const onCreatBtnPress = creatBtnEl.addEventListener('click', () => {
 createBoxes(namberEnterInput) 
  divBoxEl.append(...arrayOfElemebts)
}  )


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
    arrayOfElemebts.push(creatDiv)
  }
}

function destroyBoxes() {
 divBoxEl.innerHTML =''
  inputEl.value = ''
 arrayOfElemebts = []
  namberEnterInput  = 0;
  }

  


