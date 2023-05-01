var btnSalvar = document.querySelector('.btnSalvar');

btnSalvar.addEventListener('click', function (event) {
    var email = document.querySelector('#email');
    var senha = document.querySelector('#senha');
    event.preventDefault();

    if(senha.value !== null && email.value !== null){
        alert('Enviado com sucesso!!!');
    } else{
        alert('Preencha todos os campos.');
    }
    
    
})

