const form = document.querySelector('.container form');
const iconError = document.querySelector('.icon-error');
const textError = document.querySelector('.text-error');
const email = document.querySelector('.input-email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;

    if (validateEmail(emailValue)) {
        iconError.classList.remove('error');
        textError.classList.remove('error');
        email.classList.remove('error');
    } else {
        iconError.classList.add('error');
        textError.classList.add('error');
        email.classList.add('error');
    }
})

function validateEmail(email) {
    var re = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;
    return re.test(String(email).toLowerCase());
}