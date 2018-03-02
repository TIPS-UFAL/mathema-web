export abstract class Answer {
    pk: number
    answer: string
    question: number
    author: number
    evaluation: number

    constructor(pk: number, answer: string, question: number, author: number, evaluation: number) {
        this.pk = pk
        this.answer = answer
        this.question = question
        this.author = author
        this.evaluation = evaluation
    }
}