import leia from 'readline-sync'

import Livro from "./Livro";


export default class livroFisico extends Livro{
    private numeroPagina = leia.questionInt("quantas paginas?")
}

