function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}
let postagem = new Postagem('Harry Potter e a pedra filosofal','Primeiro filme da saga','JK Rowling');
console.log(postagem);