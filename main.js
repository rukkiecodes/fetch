const _name = document.querySelector('.name')
const _email = document.querySelector('.email')
const _phone = document.querySelector('.phone')
const _gender = document.querySelector('.gender')
const _state = document.querySelector('.state')
const _lga = document.querySelector('.lga')
const _specialty = document.querySelector('.specialty')
const _password = document.querySelector('.password')
const _button = document.querySelector('button')

_button.addEventListener('click', () => {
    if (_name.value == '' || _email.value == '' || _password.value == '')
        alert('Please complete the form')

    else {
        _button.innerText = 'Loading...'

        fetch(`https://web-production-563e.up.railway.app/auth/signup`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: _name.value,
                email: _email.value,
                phone: _phone.value,
                gender: _gender.value,
                state: _state.value,
                lga: _lga.value,
                specialty: _specialty.value,
                password: _password.value
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                _button.innerText = 'Submit'
            })
            .catch(error => {
                console.log('Error: ', error)
                _button.innerText = 'Submit'
            })
    }
})