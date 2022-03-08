let faixas = [
    {tooltip: 'até R$1000', minimo: 0, maximo: 1000},
    {tooltip: 'de R$1000 a R$10000', minimo: 1000, maximo: 10000},
    {tooltip: 'de R$10000 a R$50000', minimo: 10000, maximo: 50000}
];


function criarFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
};

let faixas2 = [
    criarFaixaPreco('a',0,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000)
];

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
};

let faixas3 = [
    new FaixaPreco('d',10,200),
    new FaixaPreco('e',200,2000),
    new FaixaPreco('f',2000,20000)
];
console.log(faixas);
console.log(faixas2);
console.log(faixas3);