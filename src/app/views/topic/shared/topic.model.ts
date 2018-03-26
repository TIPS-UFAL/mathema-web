import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';

export abstract class Topic {
    pk: number;
    title: string;
    description: string;
    parent_topic?: Topic;

    constructor(pk: number, title: string, description: string, parent_topic?: Topic) {
        this.pk = pk;
        this.title = title;
        this.description = description;
        this.parent_topic = parent_topic;
    }
}
