const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorelement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let messages = []
    if (name.value === ''|| name.value == null) {
       messages.push('name is required') 
    }
    // this part will send a message if the password is less then 6 letters//
    if (password.value.length <= 6 ){
        messages.push('password must be longer than 6 characters')


    }

    if (password.value.length >= 20 ){
        messages.push('password must be less than 20 characters')


    }

    if (password.value === 'password'){
        messages.push ('password cannot be password')
    }

    if (messages.length > 0){
        errorelement.innerText = messages.join(',')
    }

    else {
        window.location.href = "question_page.html"
    }
})