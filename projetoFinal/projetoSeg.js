function VerificarEntrada(){
    Convidado = document.getElementById('nome').value;
    ConvidadosLoki = ['Amanda','Rafael','Pedro']
    if (ConvidadosLoki.includes(Convidado)){
        document.getElementById('permission').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('permission').innerText = 'Você não pode Entrar!'
    }
}
