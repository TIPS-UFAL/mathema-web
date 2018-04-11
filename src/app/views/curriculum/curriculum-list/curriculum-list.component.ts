import { Component, OnInit } from '@angular/core';
import {Curriculum} from '../shared/curriculum.model';
import {CurriculumService} from '../shared/curriculum.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.scss']
})
export class CurriculumListComponent implements OnInit {

  curriculums: Curriculum[] = [];

  constructor(private curriculumService: CurriculumService,
              private router: Router) {
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

  onSelect(curriculum){
    this.router.navigate(['/curriculum', curriculum.id]);
  }
}
