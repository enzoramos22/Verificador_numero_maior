const form = document.getElementsByClassName('form')
const numeroA = document.getElementById('numero-A')
const numeroB = document.getElementById('numero-B')

function maiorNumero(numeroA, numeroB){
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e){

    const mensagemSucesso = `O numero <b>${numeroB.value}</b> é maior que o numero <b>${numeroA.value}</b> .`;

    const mensagemErro = `O numero <b>${numeroB.value}</b> precisa ser maior que o numero <b>${numeroA.value}</b> .`;

    const numeroEMaior = maiorNumero(numeroA.value, numeroB.value)

    if(numeroEMaior){
        const containerMensagemSucesso = document.querySelector('.mensagemSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else{
        const containerMensagemErro = document.querySelector('.mensagemErro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
})