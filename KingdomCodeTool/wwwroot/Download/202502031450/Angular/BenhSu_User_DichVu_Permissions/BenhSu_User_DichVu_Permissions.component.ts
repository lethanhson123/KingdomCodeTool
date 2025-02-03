import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { BenhSu_User_DichVu_Permissions } from 'src/app/shared/eHospital_DongNai_A_Config/BenhSu_User_DichVu_Permissions.model';
import { BenhSu_User_DichVu_PermissionsService } from 'src/app/shared/eHospital_DongNai_A_Config/BenhSu_User_DichVu_Permissions.service';

@Component({
  selector: 'app-BenhSu_User_DichVu_Permissions',
  templateUrl: './BenhSu_User_DichVu_Permissions.component.html',
  styleUrls: ['./BenhSu_User_DichVu_Permissions.component.css']
})
export class BenhSu_User_DichVu_PermissionsComponent implements OnInit {

  @ViewChild('BenhSu_User_DichVu_PermissionsSort') BenhSu_User_DichVu_PermissionsSort: MatSort;
  @ViewChild('BenhSu_User_DichVu_PermissionsPaginator') BenhSu_User_DichVu_PermissionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public BenhSu_User_DichVu_PermissionsService: BenhSu_User_DichVu_PermissionsService,
  ) { }

  ngOnInit(): void {
    this.BenhSu_User_DichVu_PermissionsSearch();
  }

  BenhSu_User_DichVu_PermissionsSearch() {
    this.BenhSu_User_DichVu_PermissionsService.SearchAll(this.BenhSu_User_DichVu_PermissionsSort, this.BenhSu_User_DichVu_PermissionsPaginator);
  }
  BenhSu_User_DichVu_PermissionsSave(element: BenhSu_User_DichVu_Permissions) {
    this.BenhSu_User_DichVu_PermissionsService.FormData = element;
    this.NotificationService.warn(this.BenhSu_User_DichVu_PermissionsService.ComponentSaveAll(this.BenhSu_User_DichVu_PermissionsSort, this.BenhSu_User_DichVu_PermissionsPaginator));
  }
  BenhSu_User_DichVu_PermissionsDelete(element: BenhSu_User_DichVu_Permissions) {
    this.BenhSu_User_DichVu_PermissionsService.FormData = element;
    this.NotificationService.warn(this.BenhSu_User_DichVu_PermissionsService.ComponentDeleteAll(this.BenhSu_User_DichVu_PermissionsSort, this.BenhSu_User_DichVu_PermissionsPaginator));
  }
}
