export abstract class Curriculum {
  id: number;
  title: string;
  description: string;
  author: number;
  creation_data: string;

  constructor(id: number, title: string, description: string, author: number, creation_data: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.creation_data = creation_data;
  }
}
