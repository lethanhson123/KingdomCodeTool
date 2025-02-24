import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_AppSettings } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppSettings.model';
import { Sys_AppSettingsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppSettings.service';

@Component({
  selector: 'app-Sys_AppSettings-info',
  templateUrl: './Sys_AppSettings-info.component.html',
  styleUrls: ['./Sys_AppSettings-info.component.css']
})
export class Sys_AppSettingsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_AppSettingsService: Sys_AppSettingsService,

   ) { }

   ngOnInit(): void {
     this.Sys_AppSettingsService.BaseParameter.Setting_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_AppSettingsSearch();
   }

   Sys_AppSettingsSearch() {
     this.Sys_AppSettingsService.IsShowLoading = true;
     this.Sys_AppSettingsService.GetBySetting_IdAsync().subscribe(
       res => {
         this.Sys_AppSettingsService.FormData = res as Sys_AppSettings;
       },
       err => {
       },
       () => {
         this.Sys_AppSettingsService.IsShowLoading = false;
       }
     );
   }
   Sys_AppSettingsSave() {
     this.Sys_AppSettingsService.IsShowLoading = true;
     this.Sys_AppSettingsService.SaveAsync().subscribe(
       res => {
         this.Sys_AppSettingsService.FormData = res as Sys_AppSettings;
         this.Router.navigateByUrl(environment.Sys_AppSettingsInfo + this.Sys_AppSettingsService.FormData.Setting_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_AppSettingsService.IsShowLoading = false;
       }
     );
   }


 }
