import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';

export abstract class Topic {
    id: number;
    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topicoPai?: Topic;

    constructor(id: number, titulo: string, descricao: string, curriculo: Curriculum, topicoPai?: Topic) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.curriculo = curriculo;
        this.topicoPai = topicoPai;
    }
}