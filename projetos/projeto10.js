let endereco = {
    rua: 'Soares Tei',
    cidade: 'Orlando',
    cep: '67676767'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);