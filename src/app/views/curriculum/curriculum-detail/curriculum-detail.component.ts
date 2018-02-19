import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.scss']
})
export class CurriculumDetailComponent implements OnInit {
  public curriculumId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     let id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.curriculumId = id;
  }

}
