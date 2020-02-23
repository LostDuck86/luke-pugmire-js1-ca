const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    //Validate First name
    const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const firstNameValue = firstName.value;

if (checkInputLength(firstNameValue)) {
    firstNameError.style.display = "none";
} else {
    firstNameError.style.display = "block";
}

// Validate Last name
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const lastNameValue = lastName.value;

if (checkInputLength(lastNameValue)) {
    lastNameError.style.display = "none";
} else {
    lastNameError.style.display = "block";
} 

//validate Message

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageValue = message.value;

if(checkInputLength(messageValue)) {
    messageError.style.display = "none";
} else {
    messageError.style.display = "block";
}

//Validate Email
// I am not sure if you wanted the emailError validation and invalidErrorValidation so I have just done one.

const email = document.querySelector("#email");
const invalidEmailError = document.querySelector("#invalidEmailError");
const emailValue = email.value;


if (validateEmail(emailValue)) {
    invalidEmailError.style.display = "none";
} else {
    invalidEmailError.style.display = "block";
}

    event.preventDefault();
    console.log("Form submitted");
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function checkInputLength(value) {
 
    const trimmedValue = value.trim();

    if(trimmedValue.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

