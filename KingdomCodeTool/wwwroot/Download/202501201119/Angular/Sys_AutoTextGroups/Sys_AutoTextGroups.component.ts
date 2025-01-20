import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AutoTextGroups } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTextGroups.model';
import { Sys_AutoTextGroupsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTextGroups.service';

@Component({
  selector: 'app-Sys_AutoTextGroups',
  templateUrl: './Sys_AutoTextGroups.component.html',
  styleUrls: ['./Sys_AutoTextGroups.component.css']
})
export class Sys_AutoTextGroupsComponent implements OnInit {

  @ViewChild('Sys_AutoTextGroupsSort') Sys_AutoTextGroupsSort: MatSort;
  @ViewChild('Sys_AutoTextGroupsPaginator') Sys_AutoTextGroupsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AutoTextGroupsService: Sys_AutoTextGroupsService,
  ) { }

  ngOnInit(): void {
    this.Sys_AutoTextGroupsSearch();
  }

  Sys_AutoTextGroupsSearch() {
    this.Sys_AutoTextGroupsService.SearchAll(this.Sys_AutoTextGroupsSort, this.Sys_AutoTextGroupsPaginator);
  }
  Sys_AutoTextGroupsSave(element: Sys_AutoTextGroups) {
    this.Sys_AutoTextGroupsService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextGroupsService.ComponentSaveAll(this.Sys_AutoTextGroupsSort, this.Sys_AutoTextGroupsPaginator));
  }
  Sys_AutoTextGroupsDelete(element: Sys_AutoTextGroups) {
    this.Sys_AutoTextGroupsService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextGroupsService.ComponentDeleteAll(this.Sys_AutoTextGroupsSort, this.Sys_AutoTextGroupsPaginator));
  }
}
