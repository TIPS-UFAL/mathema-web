import { Topic } from "../../topic/shared/topic.model";

export abstract class Question {
    pk: number;
    titulo: string;
    descricao: string;
    topicos: Topic[];
    autor: string;
    tipo: string;

    constructor(pk: number, titulo: string, descricao: string, topicos: Topic[], autor: string, tipo: string) {
        this.pk = pk;
        this.titulo = titulo;
        this.descricao = descricao;
        this.topicos = topicos;
        this.autor = autor;
        this.tipo = tipo;
    }
}
