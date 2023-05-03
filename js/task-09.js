const btnEl = document.querySelector('.change-color')
console.log()
const spanEl = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onBtnColor = btnEl.addEventListener('click', colorChange )

function colorChange() {
    spanEl.textContent = getRandomHexColor()
 document.body.style.background = getRandomHexColor()
}
