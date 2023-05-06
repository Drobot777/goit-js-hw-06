const inputEl = document.querySelector('#validation-input');


 const onInputText = inputEl.addEventListener('input', onInputblur)  
function onInputblur(event) {
  if (event.currentTarget.value.length < 1 || event.currentTarget.value.length> inputEl.dataset.length) {
    
    onBlurRed()
  } else {
    
    onBlurGreen()
    
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


    
    





