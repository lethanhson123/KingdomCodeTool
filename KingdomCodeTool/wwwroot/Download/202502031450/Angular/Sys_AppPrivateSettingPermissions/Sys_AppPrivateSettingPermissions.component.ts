import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AppPrivateSettingPermissions } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppPrivateSettingPermissions.model';
import { Sys_AppPrivateSettingPermissionsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppPrivateSettingPermissions.service';

@Component({
  selector: 'app-Sys_AppPrivateSettingPermissions',
  templateUrl: './Sys_AppPrivateSettingPermissions.component.html',
  styleUrls: ['./Sys_AppPrivateSettingPermissions.component.css']
})
export class Sys_AppPrivateSettingPermissionsComponent implements OnInit {

  @ViewChild('Sys_AppPrivateSettingPermissionsSort') Sys_AppPrivateSettingPermissionsSort: MatSort;
  @ViewChild('Sys_AppPrivateSettingPermissionsPaginator') Sys_AppPrivateSettingPermissionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AppPrivateSettingPermissionsService: Sys_AppPrivateSettingPermissionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_AppPrivateSettingPermissionsSearch();
  }

  Sys_AppPrivateSettingPermissionsSearch() {
    this.Sys_AppPrivateSettingPermissionsService.SearchAll(this.Sys_AppPrivateSettingPermissionsSort, this.Sys_AppPrivateSettingPermissionsPaginator);
  }
  Sys_AppPrivateSettingPermissionsSave(element: Sys_AppPrivateSettingPermissions) {
    this.Sys_AppPrivateSettingPermissionsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppPrivateSettingPermissionsService.ComponentSaveAll(this.Sys_AppPrivateSettingPermissionsSort, this.Sys_AppPrivateSettingPermissionsPaginator));
  }
  Sys_AppPrivateSettingPermissionsDelete(element: Sys_AppPrivateSettingPermissions) {
    this.Sys_AppPrivateSettingPermissionsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppPrivateSettingPermissionsService.ComponentDeleteAll(this.Sys_AppPrivateSettingPermissionsSort, this.Sys_AppPrivateSettingPermissionsPaginator));
  }
}
