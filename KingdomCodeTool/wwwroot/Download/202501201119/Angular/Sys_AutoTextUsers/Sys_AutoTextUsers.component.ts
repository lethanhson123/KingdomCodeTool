import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AutoTextUsers } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTextUsers.model';
import { Sys_AutoTextUsersService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTextUsers.service';

@Component({
  selector: 'app-Sys_AutoTextUsers',
  templateUrl: './Sys_AutoTextUsers.component.html',
  styleUrls: ['./Sys_AutoTextUsers.component.css']
})
export class Sys_AutoTextUsersComponent implements OnInit {

  @ViewChild('Sys_AutoTextUsersSort') Sys_AutoTextUsersSort: MatSort;
  @ViewChild('Sys_AutoTextUsersPaginator') Sys_AutoTextUsersPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AutoTextUsersService: Sys_AutoTextUsersService,
  ) { }

  ngOnInit(): void {
    this.Sys_AutoTextUsersSearch();
  }

  Sys_AutoTextUsersSearch() {
    this.Sys_AutoTextUsersService.SearchAll(this.Sys_AutoTextUsersSort, this.Sys_AutoTextUsersPaginator);
  }
  Sys_AutoTextUsersSave(element: Sys_AutoTextUsers) {
    this.Sys_AutoTextUsersService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextUsersService.ComponentSaveAll(this.Sys_AutoTextUsersSort, this.Sys_AutoTextUsersPaginator));
  }
  Sys_AutoTextUsersDelete(element: Sys_AutoTextUsers) {
    this.Sys_AutoTextUsersService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextUsersService.ComponentDeleteAll(this.Sys_AutoTextUsersSort, this.Sys_AutoTextUsersPaginator));
  }
}
