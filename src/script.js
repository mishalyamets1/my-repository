


const form = document.getElementById('ContactForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const nameInput = document.getElementById('name');


console.log(validateEmail());
console.log(validatePhone());
console.log(validateName());

emailInput.addEventListener('input', validateEmail); 
phoneInput.addEventListener('input', validatePhone); 
nameInput.addEventListener('input', validateName);


function validateEmail() {
    const emailRegex = /[A-Za-z0-9_\-\.]{2,10}@[a-z0-9\.\-_].{1,10}\.[a-z]{2,3}/;
    if(emailRegex.test(emailInput.value)){
        removeError(emailInput);
        return true;
    }
    else {
        showError(emailInput, "Email не соответсвует формату. Пример: ivanov@mail.ru");
        return false;
    }
}

function validatePhone() {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if(phoneRegex.test(phoneInput.value)){
        removeError(phoneInput);
        return true; 
    }
    else {
        showError(phoneInput, "Телефон не соответсвует формату. Пример: +7 (123) 456-78-90");
        return false;
    }
}

function validateName() {
    const nameRegex = /^[А-Яа-яA-Za-zЁё\s\-]+$/;
    if(nameRegex.test(nameInput.value)){
        removeError(nameInput);
        return true;
    } else {
        showError(nameInput, "Имя не должно содержать цифры и спецсимволы");
        return false;
    }
}





function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error') || document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    if (!formControl.contains(errorElement)) {
        formControl.appendChild(errorElement);
    }
    input.style.borderColor = 'red';
}

function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');
    if(errorElement){
        formControl.removeChild(errorElement);
    }
    input.style.borderColor = 'green';
}




