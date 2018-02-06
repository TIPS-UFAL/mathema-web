export abstract class Question {
    pk: number;
    titulo: string;
    descricao: string;
    autor: string;
    tipo: string;

    constructor(pk: number, titulo: string, descricao: string, autor: string, tipo: string) {
        this.pk = pk;
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor = autor;
        this.tipo = tipo;
    }
}
