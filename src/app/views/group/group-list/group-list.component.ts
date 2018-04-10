import { Component, OnInit } from '@angular/core';
import { Group } from 'app/views/group/shared/group.model';
import { GroupService } from 'app/views/group/shared/group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  groups: Group[] = [];
  filtered: Group[];

  constructor(private groupService: GroupService,
              private router: Router) {
    groupService.getGroups().subscribe((data: any) => {
      this.groups = data;
    })
  }

  ngOnInit() {
  }

  searchKey(gk: string) {
    this.groupService.searchGroup(gk).subscribe((group: Group) => {
      this.router.navigate(['group/c/' + group.curriculum + '/g/' + group.id + '/']);
    })
  }
}
