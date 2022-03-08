const geleias = ['uva','framboesa','goiaba','blueberry','figo'];
geleias.push();
geleias.unshift();
geleias.splice();

const ultimo = geleias.pop()
console.log(ultimo);
console.log(geleias)

const primeiro = geleias.shift();
console.log(primeiro);
console.log(geleias);

const meio = geleias.splice(1,1);
console.log(meio)