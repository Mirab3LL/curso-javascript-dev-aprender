exibirAsteriscos(8);
function exibirAsteriscos(linhas) {

    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 1; i <= linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }

}