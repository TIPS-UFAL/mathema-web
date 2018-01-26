import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Curriculum } from '../shared/curriculum.model';
import { CurriculumService } from '../shared/curriculum.service';


@Component({
    selector: 'app-curriculum-form',
    templateUrl: './curriculum-form.component.html'
})

export class CurriculumFormComponent {

  titulo: string;
  descricao: string;
  autor: number;

  curriculums: Curriculum[] = [];

  constructor(private curriculumService: CurriculumService,
    private router: Router) {
      curriculumService.getCurriculums().subscribe((data: any) => {
        this.curriculums = data;
      })
    }

  onSubmit() {
      this.curriculumService.createCurriculum({'titulo': this.titulo, 'descricao': this.descricao, 'autor': this.autor})
        .subscribe(() => {
          this.router.navigate(['']);
        });
  }
}

