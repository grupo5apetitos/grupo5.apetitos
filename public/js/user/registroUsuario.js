window.addEventListener('load', () => {
    const form  = document.querySelector('form');
    const email = document.querySelector('#email');
    const btn = document.querySelector('input[type="submit"]');
    const inputs = document.querySelectorAll('input');
    const file = document.querySelector('#image');
    let errors = new Object(); // -> = {}

    function validarEmail(valor) {
        let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        return patron.test(valor);
    }

    file.addEventListener('change', function() {
        let fileName = this.files[0].name;
        let fileSize = this.files[0].size;

        if (fileSize > 3000000) // Equivale a 3MB
        {
            alert('El archivo no debe superar los 3MB');
            this.value = '';
            this.files[0].name = '';
            this.classList.add('is-invalid');
            errors[this.name] = "Archivo fuera de rango.";
            this.placeholder = errors[this.name];
        } else {
            let ext = fileName.split('.').pop();
            ext = ext.toLowerCase();

            switch(ext) {
                case 'jpg':
                case 'jpeg':
                case 'png':
                case 'pdf': break;
                default:
                    alert('Elarchivo no tiene la extensin adecuada.');
                    this.value = '';
                    this.files[0].name = '';
                    this.classList.add('is-invalid');
                    errors[this.name] = "Extensión erronéa.";
                    this.placeholder = errors[this.name];
            }
        }
    });

    inputs.forEach(function(input) {
        input.addEventListener('blur', function(event) {
            // this = event.target
            // Se válida que el campo no este vacío.
            if (event.target.value.length === 0) {
                event.target.classList.add('is-invalid');
                errors[event.target.name] = "Rellena el campo vacío.";
                event.target.placeholder = errors[event.target.name];
            } else {
                event.target.classList.remove('is-invalid');
                event.target.classList.add('is-valid');
                delete errors[event.target.name];
            }

            // Se válida los tipos de input.
            switch(event.target.type) {
                case "email":
                    if (validarEmail(event.target.value)) {
                        event.target.classList.remove('is-invalid');
                        event.target.classList.add('is-valid');
                        delete errors[event.target.name];
                    } else {
                        event.target.classList.add('is-invalid');
                        errors[event.target.name] = "Ingresa un correo válido.";
                        event.target.placeholder = errors[event.target.name];
                    }
                    break;
                    // lo que se hizo en perfil aplicarlo aqui en registro
                    // Empezar api de user basado en la de productos.
                    
            }
        });
    });

    document.querySelector('#email_conf').addEventListener('blur', function() {
        const email01 = document.querySelector('#email');
        const email02 = document.querySelector('#email_conf');
        const validaCorreo = document.querySelector('[role="valida-correo2"]');

        if (email02.value === email01.value) {
            email02.classList.add('is-valid');
            email02.classList.remove('is-invalid');
            delete errors[email02.name];
            validaCorreo.value = "";
        } else {
            email02.classList.add('is-invalid');
            errors[email02.name] = "Los correos no son identicas.";
            validaCorreo.value = errors[email02.name];
        }
    });

    document.querySelector('#password_conf').addEventListener('blur', function(){
        const paswd01 = document.querySelector('#password');
        const paswd02 = document.querySelector('#password_conf');  
        const validaPassword = document.querySelector('[role="valida-password2"]');
        
        if(paswd02.value == paswd01.value) {
            paswd02.classList.add('is-valid');
            paswd01.classList.remove('is-invalid');
            delete errors[paswd02.name];
        }else{
            paswd02.classList.add('is-invalid');
            errors[paswd02.name] = 'Las contraseñas son identicas';
            validaPassword.value = errors[paswd02.name];
        }
    })

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

//Mejorar codigo