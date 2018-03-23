import {User} from '../../user/shared/models';


export abstract class Group {
    id: number;
    title: string;
    curriculum: number;
    group_key: string;
    teacher: User;
    students: User[];

    constructor(id: number, title: string, curriculum: number, group_key: string,  teacher: User,  students: User[]) {
        this.id = id;
        this.title = title;
        this.curriculum = curriculum;
        this.group_key = group_key;
        this.teacher = teacher;
        this.students = students;
      }
}
