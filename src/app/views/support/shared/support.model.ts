import { Topic } from '../../topic/shared/topic.model';

export abstract class Support {
  pk: number;
  title: string;
  type: string;
  content: string;
  topic: Topic;
  author: string;

  constructor(pk: number, title: string, type: string, content: string, topic: Topic, author: string) {
    this.pk = pk;
    this.title = title;
    this.topic = topic;
    this.author = author;
    this.type = type;
  }
}
