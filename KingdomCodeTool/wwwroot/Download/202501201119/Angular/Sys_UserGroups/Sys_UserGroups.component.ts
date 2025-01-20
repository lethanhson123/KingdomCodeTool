import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_UserGroups } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserGroups.model';
import { Sys_UserGroupsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserGroups.service';

@Component({
  selector: 'app-Sys_UserGroups',
  templateUrl: './Sys_UserGroups.component.html',
  styleUrls: ['./Sys_UserGroups.component.css']
})
export class Sys_UserGroupsComponent implements OnInit {

  @ViewChild('Sys_UserGroupsSort') Sys_UserGroupsSort: MatSort;
  @ViewChild('Sys_UserGroupsPaginator') Sys_UserGroupsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_UserGroupsService: Sys_UserGroupsService,
  ) { }

  ngOnInit(): void {
    this.Sys_UserGroupsSearch();
  }

  Sys_UserGroupsSearch() {
    this.Sys_UserGroupsService.SearchAll(this.Sys_UserGroupsSort, this.Sys_UserGroupsPaginator);
  }
  Sys_UserGroupsSave(element: Sys_UserGroups) {
    this.Sys_UserGroupsService.FormData = element;
    this.NotificationService.warn(this.Sys_UserGroupsService.ComponentSaveAll(this.Sys_UserGroupsSort, this.Sys_UserGroupsPaginator));
  }
  Sys_UserGroupsDelete(element: Sys_UserGroups) {
    this.Sys_UserGroupsService.FormData = element;
    this.NotificationService.warn(this.Sys_UserGroupsService.ComponentDeleteAll(this.Sys_UserGroupsSort, this.Sys_UserGroupsPaginator));
  }
}
