import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { Topic } from 'app/views/topic/shared/topic.model';
import { Question } from 'app/views/question/shared/question.model';

export abstract class Quiz {
    id: number;
    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topico: Topic[];
    atividade: Question[];

    constructor(id: number, titulo: string, descricao: string, curriculo: Curriculum, topico: Topic[], atividade: Question[]) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.curriculo = curriculo;
        this.topico = topico;
        this.atividade = atividade;
    }
}