const inputEl = document.querySelector('#validation-input');
const onInputText = inputEl.addEventListener('input', onInputblur)  
function onInputblur(event) {
  console.log(event.currentTarget.value.length)
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
     onBlurGreen()
    
  } else {
    onBlurRed()
   
    
  }
  
}

function onBlurGreen() {
   inputEl.classList.remove('invalid')
   inputEl.classList.add('valid')
}
function onBlurRed() {
   inputEl.classList.remove('valid')
   inputEl.classList.add('invalid')
}


    
    





