export class ModelSolution {
  answer: string;
  question: number;
  is_correct: boolean;
  feedback: string;

  constructor(answer: string, question: number, is_correct: boolean, feedback: string) {
    this.answer = answer;
    this.question = question;
    this.is_correct = is_correct;
    this.feedback = feedback;
  }
}
