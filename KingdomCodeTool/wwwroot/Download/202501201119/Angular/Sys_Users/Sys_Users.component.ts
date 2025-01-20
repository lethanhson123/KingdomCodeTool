import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Users } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Users.model';
import { Sys_UsersService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Users.service';

@Component({
  selector: 'app-Sys_Users',
  templateUrl: './Sys_Users.component.html',
  styleUrls: ['./Sys_Users.component.css']
})
export class Sys_UsersComponent implements OnInit {

  @ViewChild('Sys_UsersSort') Sys_UsersSort: MatSort;
  @ViewChild('Sys_UsersPaginator') Sys_UsersPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_UsersService: Sys_UsersService,
  ) { }

  ngOnInit(): void {
    this.Sys_UsersSearch();
  }

  Sys_UsersSearch() {
    this.Sys_UsersService.SearchAll(this.Sys_UsersSort, this.Sys_UsersPaginator);
  }
  Sys_UsersSave(element: Sys_Users) {
    this.Sys_UsersService.FormData = element;
    this.NotificationService.warn(this.Sys_UsersService.ComponentSaveAll(this.Sys_UsersSort, this.Sys_UsersPaginator));
  }
  Sys_UsersDelete(element: Sys_Users) {
    this.Sys_UsersService.FormData = element;
    this.NotificationService.warn(this.Sys_UsersService.ComponentDeleteAll(this.Sys_UsersSort, this.Sys_UsersPaginator));
  }
}
