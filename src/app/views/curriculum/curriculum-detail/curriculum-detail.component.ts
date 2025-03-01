import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CurriculumService} from '../shared/curriculum.service';
import {Curriculum} from '../shared/curriculum.model';

@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.scss']
})
export class CurriculumDetailComponent implements OnInit {

  public curriculumId;

  curriculum: Curriculum;

  constructor(private curriculumService: CurriculumService, private route: ActivatedRoute) {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    curriculumService.getCurriculum(id).subscribe((data: any) => {
      this.curriculum = data;
      console.log(this.curriculum);

    })
  }

  ngOnInit() {
  }

}
