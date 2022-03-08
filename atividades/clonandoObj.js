const geladeira = {
    marcaGeladeira: 'brastemp',
    tamanhoGeladeira: 1000,
    alimentacaoGeladeira: 220,
    ligar: function () {
        console.log("Fazendo Ligação...");
    }
}

const novoObjeto = Object.assign({
    altura: 190
},geladeira);
console.log(novoObjeto);

const objeto2 = {...geladeira};
console.log(objeto2);