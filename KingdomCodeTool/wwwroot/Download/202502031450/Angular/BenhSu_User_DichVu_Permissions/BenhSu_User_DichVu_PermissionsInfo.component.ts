import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { BenhSu_User_DichVu_Permissions } from 'src/app/shared/eHospital_DongNai_A_Config//BenhSu_User_DichVu_Permissions.model';
import { BenhSu_User_DichVu_PermissionsService } from 'src/app/shared/eHospital_DongNai_A_Config//BenhSu_User_DichVu_Permissions.service';

@Component({
  selector: 'app-BenhSu_User_DichVu_Permissions-info',
  templateUrl: './BenhSu_User_DichVu_Permissions-info.component.html',
  styleUrls: ['./BenhSu_User_DichVu_Permissions-info.component.css']
})
export class BenhSu_User_DichVu_PermissionsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public BenhSu_User_DichVu_PermissionsService: BenhSu_User_DichVu_PermissionsService,

   ) { }

   ngOnInit(): void {
     this.BenhSu_User_DichVu_PermissionsService.BaseParameter.Group_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.BenhSu_User_DichVu_PermissionsSearch();
   }

   BenhSu_User_DichVu_PermissionsSearch() {
     this.BenhSu_User_DichVu_PermissionsService.IsShowLoading = true;
     this.BenhSu_User_DichVu_PermissionsService.GetByGroup_IdAsync().subscribe(
       res => {
         this.BenhSu_User_DichVu_PermissionsService.FormData = res as BenhSu_User_DichVu_Permissions;
       },
       err => {
       },
       () => {
         this.BenhSu_User_DichVu_PermissionsService.IsShowLoading = false;
       }
     );
   }
   BenhSu_User_DichVu_PermissionsSave() {
     this.BenhSu_User_DichVu_PermissionsService.IsShowLoading = true;
     this.BenhSu_User_DichVu_PermissionsService.SaveAsync().subscribe(
       res => {
         this.BenhSu_User_DichVu_PermissionsService.FormData = res as BenhSu_User_DichVu_Permissions;
         this.Router.navigateByUrl(environment.BenhSu_User_DichVu_PermissionsInfo + this.BenhSu_User_DichVu_PermissionsService.FormData.Group_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.BenhSu_User_DichVu_PermissionsService.IsShowLoading = false;
       }
     );
   }


 }
