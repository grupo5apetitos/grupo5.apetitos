window.addEventListener('load', function(){
    const btn = document.querySelector('input[type="submit"]');
    const inputs = document.querySelectorAll('input');
    let errors = new Object(); // -> = {}

    function validarEmail(valor) {
        let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        return patron.test(valor);
    }

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
                case "file":
                    
                    break;
            }
        });
    });

    
})

//Como validar el input file 