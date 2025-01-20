import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_CommandApplyPermissions } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_CommandApplyPermissions.model';
import { Sys_CommandApplyPermissionsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_CommandApplyPermissions.service';

@Component({
  selector: 'app-Sys_CommandApplyPermissions',
  templateUrl: './Sys_CommandApplyPermissions.component.html',
  styleUrls: ['./Sys_CommandApplyPermissions.component.css']
})
export class Sys_CommandApplyPermissionsComponent implements OnInit {

  @ViewChild('Sys_CommandApplyPermissionsSort') Sys_CommandApplyPermissionsSort: MatSort;
  @ViewChild('Sys_CommandApplyPermissionsPaginator') Sys_CommandApplyPermissionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_CommandApplyPermissionsService: Sys_CommandApplyPermissionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_CommandApplyPermissionsSearch();
  }

  Sys_CommandApplyPermissionsSearch() {
    this.Sys_CommandApplyPermissionsService.SearchAll(this.Sys_CommandApplyPermissionsSort, this.Sys_CommandApplyPermissionsPaginator);
  }
  Sys_CommandApplyPermissionsSave(element: Sys_CommandApplyPermissions) {
    this.Sys_CommandApplyPermissionsService.FormData = element;
    this.NotificationService.warn(this.Sys_CommandApplyPermissionsService.ComponentSaveAll(this.Sys_CommandApplyPermissionsSort, this.Sys_CommandApplyPermissionsPaginator));
  }
  Sys_CommandApplyPermissionsDelete(element: Sys_CommandApplyPermissions) {
    this.Sys_CommandApplyPermissionsService.FormData = element;
    this.NotificationService.warn(this.Sys_CommandApplyPermissionsService.ComponentDeleteAll(this.Sys_CommandApplyPermissionsSort, this.Sys_CommandApplyPermissionsPaginator));
  }
}
