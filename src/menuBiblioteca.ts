import leia from 'readline-sync'
import Livro from './Livro';
import Biblioteca from './Biblioteca';

var menuBiblioteca = new Biblioteca();

var opcao = 0;

do{
    console.log("----------MENU---------------")
    opcao = leia.keyInSelect(["add livros", "Remover livro", "Buscar livro", "Mostrar detalhes"]) + 1;
    switch(opcao){
        case 1:
            menuBiblioteca.addLivro();
            break;
        case 2:
            menuBiblioteca.removerLivro();
            break;
        case 3:
            menuBiblioteca.buscarLivro();
            break;
        case 4:
            menuBiblioteca.mostrarLivro();
            break;
    }

}while(opcao !== 0);
