const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if (formElements.email.value ==='' || formElements.password.value === '') {
       return alert('All fields must be filled in')
    } else {
        console.log({ email: formElements.email.value, password: formElements.password.value })
        formEl.reset()
       }

    }

