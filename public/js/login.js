window.addEventListener = ('load', function(){

    let element_email = document.querySelector('#user');
    let element_password = document.querySelector('#password');
    const inputTitle = document.querySelector('#email');

    let errors = [];
    inputTitle.focus();

    element_email.addEventListener('blur', function(){
        if( element_email.value == '' || element_email.value < 3){
                errors.push('El campo de correo esta vacio');
                element_email.classList.add('is-invalid');
        }else{
            element_email.classList.remove('is-invalid');
        }
    })

    element_password.addEventListener('blur', function(){
        if( element_password.value == ''){
                errors.push('El campo de password esta vacio');
                element_password.classList.add('is-invalid');
        }else{
            element_password.classList.remove('is-invalid');
        }
    })
})