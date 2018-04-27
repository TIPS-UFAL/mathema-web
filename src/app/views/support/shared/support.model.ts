import { Topic } from '../../topic/shared/topic.model';

export abstract class Support {
  id: number;
  title: string;
  type: string;
  content: string;
  topic: Topic;
  author: string;

  constructor(id: number, title: string, type: string, content: string, topic: Topic, author: string) {
    this.id = id;
    this.title = title;
    this.topic = topic;
    this.author = author;
    this.type = type;
  }
}
