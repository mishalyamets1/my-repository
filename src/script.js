const form = document.getElementById('ContactForm');
const emailInput = document.getElementById('email');

emailInput.addEventListener('email',validateEmail); 

function validateEmail() {
    const emailRegex = /[A-Za-z0-9_-\.] {2,10}@[a-z0-9\.-_].{1,10}\.[a-z]{2,3}/;
    if(emailRegex.test(emailInput.value)){
        removeError(emailInput); //убираем ошибку
        return true;
    }
    else {
        showError(emailInput, "Email не соответсвует формату. Пример: ivanov@mail.ru"); // показываем ошибку
        return false;
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    // ищем существ блок ошибки если нет то создаем
    const errorElement = formControl.querySelector('.error') || document.createElement('div');
    errorElement.class = 'error';
    errorElement.textContent = message;
    formControl.appendChild(errorElement);
    input.style.borderColor = 'red';
}

function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('error');

    if(errorElement){
        formControl.removeChild(errorElement);
    }

    input.style.borderColor = 'green';
}
