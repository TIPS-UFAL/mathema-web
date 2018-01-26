export abstract class Curriculum {
  id: number;
  titulo: string;
  descricao: string;
  autor: number;
  data_criacao: string;

  constructor(id: number, titulo: string, descricao: string, autor: number, data_criacao: string) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.autor = autor;
    this.data_criacao = data_criacao;
  }

}
