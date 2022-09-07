window.addEventListener('load', () => {
    // Extrayendo los id con queryselector -----------------------------------------//
    let form  = document.querySelector('form');
    let email = document.querySelector('#email');
    let btn = document.querySelector('input[type="submit"]');
    let passwd = document.querySelector('#password')
    let emailErrors = document.querySelector('#emailErrors');
    let passwdErrors = document.querySelector('#passwdErrors');
    email.focus();

    //Array donde se almacenaran los errores
    let errors = ['',''];

    //Funcion para validar correos ------------------------------------------------//
    function validarEmail(valor) {
        let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        return patron.test(valor);
    }
    // Evento del boton de submit para envio del login ------------------------------------//
        btn.addEventListener('click', function(event){
            event.preventDefault();
        })      
       
        email.addEventListener('blur', function(){
                if (validarEmail(this.value)) {
                    if(errors[0].length > 0){ 
                        errors[0] = '';
                        this.classList.add('is-valid');
                        this.classList.remove('is-invalid');
                        emailErrors.innerText = '';
                    }
                } else {
                    if(errors[0].length == 0){ 
                        errors[0] = 'Correo incorrecto';
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                        emailErrors.innerText = errors[0];
                    }
                
                }
            })
        passwd.addEventListener('blur', function(){
                if (passwd.value >= 3) {
                    if(errors[1].length > 0){ 
                        errors[1] = '';  
                        this.classList.add('is-valid');
                        this.classList.remove('is-invalid');
                        passwdErrors.innerText = '';   // Reseteo a un string vacio para que no salga el mensaje
                    }
                } else {
                    if(errors[1].length == 0){ 
                        errors[1] = 'Password incorrecto';
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                        passwdErrors.innerText = errors[1];
                    }
                
                }
        })
        
    })


