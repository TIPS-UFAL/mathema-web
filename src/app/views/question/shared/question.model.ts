import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { Topic } from 'app/views/topic/shared/topic.model';

export abstract class Question {
    id: number;
    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topico: Topic[];

    constructor(id: number, titulo: string, descricao: string, curriculo: Curriculum, topico: Topic[]) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.curriculo = curriculo;
        this.topico = topico;
    }
}
