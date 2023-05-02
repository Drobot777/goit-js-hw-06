const inputEl = document.querySelector('#validation-input');


 const onInputText = inputEl.addEventListener('input', onInputblur)  
function onInputblur(event) {
  if (event.currentTarget.value.length > 6) {
    onBlurRed()
  } else {
    onBlurGreen() 
  }
  
}

function onBlurGreen () {
  return inputEl.classList.add('valid')
}
function onBlurRed() {
  return inputEl.classList.add('invalid')
}


    
    





