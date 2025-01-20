import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Groups } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Groups.model';
import { Sys_GroupsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Groups.service';

@Component({
  selector: 'app-Sys_Groups',
  templateUrl: './Sys_Groups.component.html',
  styleUrls: ['./Sys_Groups.component.css']
})
export class Sys_GroupsComponent implements OnInit {

  @ViewChild('Sys_GroupsSort') Sys_GroupsSort: MatSort;
  @ViewChild('Sys_GroupsPaginator') Sys_GroupsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_GroupsService: Sys_GroupsService,
  ) { }

  ngOnInit(): void {
    this.Sys_GroupsSearch();
  }

  Sys_GroupsSearch() {
    this.Sys_GroupsService.SearchAll(this.Sys_GroupsSort, this.Sys_GroupsPaginator);
  }
  Sys_GroupsSave(element: Sys_Groups) {
    this.Sys_GroupsService.FormData = element;
    this.NotificationService.warn(this.Sys_GroupsService.ComponentSaveAll(this.Sys_GroupsSort, this.Sys_GroupsPaginator));
  }
  Sys_GroupsDelete(element: Sys_Groups) {
    this.Sys_GroupsService.FormData = element;
    this.NotificationService.warn(this.Sys_GroupsService.ComponentDeleteAll(this.Sys_GroupsSort, this.Sys_GroupsPaginator));
  }
}
