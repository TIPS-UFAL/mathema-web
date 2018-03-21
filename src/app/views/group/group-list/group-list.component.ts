import { Component, OnInit } from '@angular/core';
import { Group } from 'app/views/group/shared/group.model';
import { GroupService } from 'app/views/group/shared/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups: Group[] = [];

  constructor(private groupService: GroupService) {
    groupService.getGroups().subscribe((data: any) => {
      this.groups = data;
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

}
