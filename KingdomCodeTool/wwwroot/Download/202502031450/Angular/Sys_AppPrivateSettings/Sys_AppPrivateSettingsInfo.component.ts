import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_AppPrivateSettings } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppPrivateSettings.model';
import { Sys_AppPrivateSettingsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppPrivateSettings.service';

@Component({
  selector: 'app-Sys_AppPrivateSettings-info',
  templateUrl: './Sys_AppPrivateSettings-info.component.html',
  styleUrls: ['./Sys_AppPrivateSettings-info.component.css']
})
export class Sys_AppPrivateSettingsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_AppPrivateSettingsService: Sys_AppPrivateSettingsService,

   ) { }

   ngOnInit(): void {
     this.Sys_AppPrivateSettingsService.BaseParameter.Setting_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_AppPrivateSettingsSearch();
   }

   Sys_AppPrivateSettingsSearch() {
     this.Sys_AppPrivateSettingsService.IsShowLoading = true;
     this.Sys_AppPrivateSettingsService.GetBySetting_IdAsync().subscribe(
       res => {
         this.Sys_AppPrivateSettingsService.FormData = res as Sys_AppPrivateSettings;
       },
       err => {
       },
       () => {
         this.Sys_AppPrivateSettingsService.IsShowLoading = false;
       }
     );
   }
   Sys_AppPrivateSettingsSave() {
     this.Sys_AppPrivateSettingsService.IsShowLoading = true;
     this.Sys_AppPrivateSettingsService.SaveAsync().subscribe(
       res => {
         this.Sys_AppPrivateSettingsService.FormData = res as Sys_AppPrivateSettings;
         this.Router.navigateByUrl(environment.Sys_AppPrivateSettingsInfo + this.Sys_AppPrivateSettingsService.FormData.Setting_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_AppPrivateSettingsService.IsShowLoading = false;
       }
     );
   }


 }
