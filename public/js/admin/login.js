import { query } from "express";

window.addEventListener('load', function () {
    const element_email = document.querySelector('#user');
    const element_password = document.querySelector('#password');
    const element_btn = document.querySelector('button[type=submit]');
    const element_form = document.querySelectorAll('form input');

    let errors = [];
    // element_email.focus();

    element_email.addEventListener('blur', function () {
        if (element_email.value === '') {
            element_email.classList.add('is-invalid');
            errors.push({
                typ: "email"
            });
            document.querySelector('[role=inputEmail]').innerHTML = "El campo de correo esta vacio.";
        } else {
            element_email.classList.remove('is-invalid');
            element_email.classList.add('is-valid');
            errors.pop();
        }
    });

    element_password.addEventListener('blur', function () {
        if (element_password.value == '') {
            element_password.classList.add('is-invalid');
            errors.push({
                typ: "password"
            });
            document.querySelector('[role=inputPassword]').innerHTML = "El campo de password esta vacio.";
        } else {
            element_password.classList.remove('is-invalid');
            element_password.classList.add('is-valid');
            errors.pop();
        }
    });

    element_btn.addEventListener('click', function(evento) {
        evento.preventDefault();
        element_form.forEach(function(elem) {
            if (elem.value.length > 0) {
                elem.classList.remove('is-invalid');
                elem.classList.add('is-valid');
            } else {
                elem.classList.add('is-invalid');
            }
        });

        if (errors.length == 0) {
            document.querySelector('form').submit();
        } else {
            errors.forEach((err) => {
                document.querySelector(`input[type=${err.typ}]`).classList.add('is-invalid');
            });
        }
    });
});
