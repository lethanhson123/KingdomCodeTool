import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_UserMenus } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserMenus.model';
import { Sys_UserMenusService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserMenus.service';

@Component({
  selector: 'app-Sys_UserMenus',
  templateUrl: './Sys_UserMenus.component.html',
  styleUrls: ['./Sys_UserMenus.component.css']
})
export class Sys_UserMenusComponent implements OnInit {

  @ViewChild('Sys_UserMenusSort') Sys_UserMenusSort: MatSort;
  @ViewChild('Sys_UserMenusPaginator') Sys_UserMenusPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_UserMenusService: Sys_UserMenusService,
  ) { }

  ngOnInit(): void {
    this.Sys_UserMenusSearch();
  }

  Sys_UserMenusSearch() {
    this.Sys_UserMenusService.SearchAll(this.Sys_UserMenusSort, this.Sys_UserMenusPaginator);
  }
  Sys_UserMenusSave(element: Sys_UserMenus) {
    this.Sys_UserMenusService.FormData = element;
    this.NotificationService.warn(this.Sys_UserMenusService.ComponentSaveAll(this.Sys_UserMenusSort, this.Sys_UserMenusPaginator));
  }
  Sys_UserMenusDelete(element: Sys_UserMenus) {
    this.Sys_UserMenusService.FormData = element;
    this.NotificationService.warn(this.Sys_UserMenusService.ComponentDeleteAll(this.Sys_UserMenusSort, this.Sys_UserMenusPaginator));
  }
}
