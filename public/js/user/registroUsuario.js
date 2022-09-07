window.addEventListener('load', () => {
    let form  = document.querySelector('form');
    let email = document.querySelector('#email');
    let btn = document.querySelector('input[type="submit"]');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let inputs = document.querySelectorAll('input');

        inputs.forEach((input) => {
            if (input.id === "email") {
                if (input.value.length >= 2) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                } else {
                    input.classList.add('is-invalid');
                }
            }

            if (input.id === "password") {
                if (input.value.length === 0) {
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                }
            }
        });
    });
/*
    email.addEventListener('blur', () => {
        // fetch('url', {config}).then((res) => {});
    });*/
});