import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';

export abstract class Topic {
    pk: number;
    titulo: string;
    descricao: string;
    topicoPai?: Topic;

    constructor(pk: number, titulo: string, descricao: string, topicoPai?: Topic) {
        this.pk = pk;
        this.titulo = titulo;
        this.descricao = descricao;
        this.topicoPai = topicoPai;
    }
}
