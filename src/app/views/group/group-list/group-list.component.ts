import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Group } from 'app/views/group/shared/group.model';
import { GroupService } from 'app/views/group/shared/group.service';
import {Router} from '@angular/router';
import {BsModalService, ModalDirective, BsModalRef} from 'ngx-bootstrap';
// import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  @ViewChild('errorModal', /* TODO: add static flag */ {static: false}) public errorModal: ModalDirective;

  groups: Group[] = [];
  filtered: Group[];
  errorModalRef: BsModalRef;

  constructor(private groupService: GroupService,
              private router: Router,
              private modalService: BsModalService) {
    groupService.getGroups().subscribe((data: any) => {
      this.groups = data;
    });
  }

  ngOnInit() {
  }

  searchKey(gk: string, errorTemplate: TemplateRef<any>) {
    console.log(gk);
    this.groupService.getGroup(gk).subscribe((group: Group) => {
      this.router.navigate(['group/' + group.group_key + '/']);
    }, (err) => {
      this.errorModal.show();
    });
  }
}
