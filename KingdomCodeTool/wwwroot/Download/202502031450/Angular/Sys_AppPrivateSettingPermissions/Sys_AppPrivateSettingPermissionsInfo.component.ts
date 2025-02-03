import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_AppPrivateSettingPermissions } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppPrivateSettingPermissions.model';
import { Sys_AppPrivateSettingPermissionsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppPrivateSettingPermissions.service';

@Component({
  selector: 'app-Sys_AppPrivateSettingPermissions-info',
  templateUrl: './Sys_AppPrivateSettingPermissions-info.component.html',
  styleUrls: ['./Sys_AppPrivateSettingPermissions-info.component.css']
})
export class Sys_AppPrivateSettingPermissionsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_AppPrivateSettingPermissionsService: Sys_AppPrivateSettingPermissionsService,

   ) { }

   ngOnInit(): void {
     this.Sys_AppPrivateSettingPermissionsService.BaseParameter.SettingPermission_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_AppPrivateSettingPermissionsSearch();
   }

   Sys_AppPrivateSettingPermissionsSearch() {
     this.Sys_AppPrivateSettingPermissionsService.IsShowLoading = true;
     this.Sys_AppPrivateSettingPermissionsService.GetBySettingPermission_IdAsync().subscribe(
       res => {
         this.Sys_AppPrivateSettingPermissionsService.FormData = res as Sys_AppPrivateSettingPermissions;
       },
       err => {
       },
       () => {
         this.Sys_AppPrivateSettingPermissionsService.IsShowLoading = false;
       }
     );
   }
   Sys_AppPrivateSettingPermissionsSave() {
     this.Sys_AppPrivateSettingPermissionsService.IsShowLoading = true;
     this.Sys_AppPrivateSettingPermissionsService.SaveAsync().subscribe(
       res => {
         this.Sys_AppPrivateSettingPermissionsService.FormData = res as Sys_AppPrivateSettingPermissions;
         this.Router.navigateByUrl(environment.Sys_AppPrivateSettingPermissionsInfo + this.Sys_AppPrivateSettingPermissionsService.FormData.SettingPermission_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_AppPrivateSettingPermissionsService.IsShowLoading = false;
       }
     );
   }


 }
