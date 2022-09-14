window.addEventListener('load', function(){
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
                    alert('Elarchivo no tiene la extensin adecuada´.');
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
            }
        });
    });

    
})

//Como validar el input file 