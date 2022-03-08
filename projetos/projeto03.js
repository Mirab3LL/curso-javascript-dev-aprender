verificarVelocidade(111);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPontos = 5
    if (velocidade <= velocidadeMaxima)
    console.log('OK'); 
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
        if(pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log('Pontos', pontos)
    }
}
