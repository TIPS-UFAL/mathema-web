import { Component, OnInit } from '@angular/core';
import {Curriculum} from '../shared/curriculum.model';
import {CurriculumService} from '../shared/curriculum.service';

@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.css']
})
export class CurriculumListComponent implements OnInit {

  curriculums: Curriculum[] = [];

  constructor(private curriculumService: CurriculumService) {
    curriculumService.getCurriculums().subscribe((data: any) => {
      this.curriculums = data;
      console.log(this.curriculums);
      console.log(data);
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

}
