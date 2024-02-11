'use strict';

class Validator {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.inputFields = this.form.getElementsByClassName('input')

    }

    initForm () {

        for (const item of this.inputFields) {
            item.addEventListener('blur', (event) => {
                this.validateForm(event);
            });
        }
    }

    setError(element, message) {
        const errorSection = element.parentElement.querySelector('.error');
        errorSection.innerText = message;
        element.classList.add('invalid');
        element.classList.remove('valid');
    }

    setValid(element) {
        const errorSection = element.parentElement.querySelector('.error');
        errorSection.innerText = '';
        element.classList.remove('invalid');
        element.classList.add('valid');
    }

    validateField(fieldName, regex, messageSuccess, messageError ) {
        if (fieldName.value === '') {
            this.setError(fieldName, messageSuccess)
        } else if (!regex.test(fieldName.value)) {
            this.setError(fieldName, messageError);
        } else {
            this.setValid(fieldName);
        }
    }

    validateFirstName(firstName) {
        const regex = /^[A-Z][a-zA-Z\- ]*$/;

        this.validateField(
            firstName,
            regex,
            "First Name is required",
            "The first name must start with a capital letter"
        )
    }

    validateLastName(lastName) {
        const regex = /^[A-Z][a-zA-Z\- ]*$/;

        this.validateField(
            lastName,
            regex,
            "Last Name is required",
            "The last name must start with a capital letter"
        )
    }

    validateEmail(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        this.validateField(
            email,
            regex,
            "Email is required",
            "Email is incorrect"
        )
    }

    validatePassword(password) {
        const regex = /^[A-Za-z\d]\w{5,14}$/;

        this.validateField(
            password,
            regex,
            "Password is required",
            "The password must be 6-15 characters"
        )
    }

    validateConfirmPassword(confirmPassword, password) {

        if (confirmPassword.value === "") {
            this.setError(confirmPassword, "Confirmation password is required");
        } else if (confirmPassword.value !== password.value) {
            this.setError(confirmPassword, "Password doesn't match!");
        } else {
            this.setValid(confirmPassword);
        }
    }

    fieldsValid() {
        for (const item of this.inputFields) {
            if (item.classList.contains('invalid')) {
                return false
            }
        }
        return true
    }

    initValidation() {
        this.form.addEventListener('submit', (event) => {
            if (!this.fieldsValid()) {
                event.preventDefault();
                alert ('There are validation errors in the form')
            } else {
                alert ('Form submitted successfully')
            }
        })
    }

    validateForm(event) {
        switch (event.target.id) {
            case "firstName":
                this.validateFirstName(event.target);
                break;
            case "lastName":
                this.validateLastName(event.target);
                break;
            case "email":
                this.validateEmail(event.target);
                break;
            case "password":
                this.validatePassword(event.target);
                break;
            case "confirmPassword":
                this.validateConfirmPassword(event.target, this.form.querySelector('#password'));
                break;
            default:
                alert("Validation error!");
        }
    }
}

const formValidator = new Validator('.add_form');
formValidator.initForm ();
formValidator.initValidation()
