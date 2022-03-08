const geleias = [                           
    {nome: 'uva', sabor: 4},
    {nome: 'framboesa', sabor: 3},
];

const geleia = geleias.find(function(geleia){
    return geleia.sabor === 3
});

console.log(geleia);