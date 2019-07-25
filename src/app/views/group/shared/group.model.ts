export abstract class Group {
    group_key: string;
    title: string;
    curriculum: number;
    teacher: number;
    students: number[];

    constructor(title: string, curriculum: number, group_key: string,  teacher: number,  students: number[]) {
        this.title = title;
        this.curriculum = curriculum;
        this.group_key = group_key;
        this.teacher = teacher;
        this.students = students;
      }
}
