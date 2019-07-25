import { Topic } from '../../topic/shared/topic.model';

export abstract class Question {
    id: number;
    title: string;
    description: string;
    topics: Topic[];
    author: string;
    type: string;
    difficulty: string;

    constructor(id: number, title: string, description: string, topics: Topic[], author: string, type: string, difficulty: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.topics = topics;
        this.author = author;
        this.type = type;
        this.difficulty = difficulty;
    }
}
