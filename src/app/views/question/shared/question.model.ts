import { Topic } from '../../topic/shared/topic.model';

export abstract class Question {
    pk: number;
    title: string;
    description: string;
    topics: Topic[];
    author: string;
    type: string;

    constructor(pk: number, title: string, descricao: string, topicos: Topic[], autor: string, tipo: string) {
        this.pk = pk;
        this.title = title;
        this.description = descricao;
        this.topics = topicos;
        this.author = autor;
        this.type = tipo;
    }
}
