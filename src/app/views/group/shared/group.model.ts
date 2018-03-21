import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';

export abstract class Group {
    pk: number;
    titulo: string;
    descricao: string;
    groupoPai?: Group;

    constructor(pk: number, titulo: string, descricao: string, groupoPai?: Group) {
        this.pk = pk;
        this.titulo = titulo;
        this.descricao = descricao;
        this.groupoPai = groupoPai;
    }
}
