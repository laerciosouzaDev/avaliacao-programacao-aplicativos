import leia from 'readline-sync'


import Livro from "./Livro";

var livro = leia.question("Digite o nome do livro: ")
var autor = leia.question("o nome do autor: ")


var l1 = new Livro("dom casmurro", "celso","55");
console.log(l1)