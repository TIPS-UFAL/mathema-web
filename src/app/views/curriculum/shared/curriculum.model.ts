export abstract class Curriculum {
  pk: number;
  titulo: string;
  descricao: string;
  autor: number;
  data_criacao: string;

  constructor(pk: number, titulo: string, descricao: string, autor: number, data_criacao: string) {
    this.pk = pk;
    this.titulo = titulo;
    this.descricao = descricao;
    this.autor = autor;
    this.data_criacao = data_criacao;
  }
}
