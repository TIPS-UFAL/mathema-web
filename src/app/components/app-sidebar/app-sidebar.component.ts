import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuestionFormComponent} from '../../views/question/question-form/question-form.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar implements OnInit {
  @ViewChild('questionFormModal', /* TODO: add static flag */ {static: false}) public questionFormModal: QuestionFormComponent;
  constructor(private el: ElementRef) {  }

  // wait for the component to render completely
  ngOnInit(): void {
    const nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
