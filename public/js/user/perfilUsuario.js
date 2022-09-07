window.addEventListener('load', function(){

    // Extrayendo los id con queryselector -----------------------------------------//
    let form = document.querySelector('form');
   // let btn = document.querySelectorAll('form input')
    let input = document.querySelector()

    let errors = [];

    form.addEventListener('click', function(){
        let btn = document.querySelectorAll('form input');
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