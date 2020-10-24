let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Valor Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Valor Válido'
        txtNome.style.color = 'green'
    }

}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }
}
