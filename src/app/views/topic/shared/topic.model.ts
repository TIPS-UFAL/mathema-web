import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';

export abstract class Topic {
    pk: number;
    title: string;
    description: string;
    curriculum: Curriculum;

    constructor(pk: number, title: string, description: string, curriculum: Curriculum) {
        this.pk = pk;
        this.title = title;
        this.description = description;
        this.curriculum = curriculum;
    }
}
