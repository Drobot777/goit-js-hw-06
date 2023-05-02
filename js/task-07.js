const inputRangeEl = document.querySelector('#font-size-control')
const spanTextEl = document.querySelector('#text')
;


const onInputChange = inputRangeEl.addEventListener('input', (ivent) => {
   return spanTextEl.style.fontSize =`${ivent.currentTarget.value}px`   
})
console.log()