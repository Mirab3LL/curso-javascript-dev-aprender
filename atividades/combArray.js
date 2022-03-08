const primeiro = [{id:1}];
const segundo = ['blueberry','figo','goiaba'];
primeiro[0].id = 10;

const combinado = primeiro.concat(segundo);
console.log(combinado);

const cortado = combinado.slice();
console.log(cortado);
/////////////////////////////////////////////////////////////////////
// const primeiro = [1,2,3];
// const segundo = [4,5,6];

// const combinado = [...primeiro,'geleia',...segundo,'potes',5];
// console.log(combinado);

// const clonado = [...combinado];
// console.log(clonado)
/////////////////////////////////////////////////////////////////////
// const geleias = ['uva','framboesa','figo','goiaba','laranja'];

// const combinado = geleias.join(', ')
// console.log(combinado);

// const frase = "Eu gosto de geleias";
// const resultado = frase.split(' ');
// console.log(resultado)

// console.log(resultado.join('-'));