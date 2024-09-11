import leia from 'readline-sync'


export default class Livro{
    constructor(Titulo: string, Autor: string, isbn: string){
    this.Titulo = Titulo;
    this.Autor = Autor;
    this.isbn = isbn

}

private Titulo: string;
private Autor: string;
public isbn: string
}

public getTitulo():string : void{
    return this.Titulo
}
public getAutor():string : void{
    return this.Autor
}
public getIsbn():string : void{
    return this.isbn
}


exibirDetalhes{
    console.log(`Nome titulo: ${this.Titulo.getTitulo }`)
}