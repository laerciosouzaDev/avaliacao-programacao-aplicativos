import leia from 'readline-sync';
import Livro from './Livro';
import Ebook from './Ebook';
import livroFisico from './LivroFisico';

export default class Biblioteca{
    private livros: Livro[] = [];

    public addLivro(){
        console.log("-----------adicionando livro-------------------")
        const tipo = leia.question("Digite 1 para Ebook ou 2 para Livro Físico: ");
        const titulo = leia.question("Digite o título do livro: ");
        const autor = leia.question("Digite o autor do livro: ");
        const isbn = leia.question("Digite o ISBN do livro: ");
        if (tipo === '1') {
            const ebook = new Ebook(titulo, autor, isbn);
            this.menuBiblioteca.addLivro(Ebook);
            console.log("Ebook adicionado com sucesso.");
        } else if (tipo === '2') {
            const titular = leia.question("Digite o titular do livro físico: ");
            const livroFisico = new Livro(titulo, autor, isbn,);
            this.biblioteca.addLivro(livroFisico);
            console.log("Livro físico adicionado com sucesso.");
        } else {
            console.log("Tipo de livro inválido.");
        }
    }
}

public exibirDetalhes(){
    console.table(this.Livro);}