import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_AppPrivateSettingItems } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppPrivateSettingItems.model';
import { Sys_AppPrivateSettingItemsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_AppPrivateSettingItems.service';

@Component({
  selector: 'app-Sys_AppPrivateSettingItems-info',
  templateUrl: './Sys_AppPrivateSettingItems-info.component.html',
  styleUrls: ['./Sys_AppPrivateSettingItems-info.component.css']
})
export class Sys_AppPrivateSettingItemsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_AppPrivateSettingItemsService: Sys_AppPrivateSettingItemsService,

   ) { }

   ngOnInit(): void {
     this.Sys_AppPrivateSettingItemsService.BaseParameter.Setting_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_AppPrivateSettingItemsSearch();
   }

   Sys_AppPrivateSettingItemsSearch() {
     this.Sys_AppPrivateSettingItemsService.IsShowLoading = true;
     this.Sys_AppPrivateSettingItemsService.GetBySetting_IdAsync().subscribe(
       res => {
         this.Sys_AppPrivateSettingItemsService.FormData = res as Sys_AppPrivateSettingItems;
       },
       err => {
       },
       () => {
         this.Sys_AppPrivateSettingItemsService.IsShowLoading = false;
       }
     );
   }
   Sys_AppPrivateSettingItemsSave() {
     this.Sys_AppPrivateSettingItemsService.IsShowLoading = true;
     this.Sys_AppPrivateSettingItemsService.SaveAsync().subscribe(
       res => {
         this.Sys_AppPrivateSettingItemsService.FormData = res as Sys_AppPrivateSettingItems;
         this.Router.navigateByUrl(environment.Sys_AppPrivateSettingItemsInfo + this.Sys_AppPrivateSettingItemsService.FormData.Setting_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_AppPrivateSettingItemsService.IsShowLoading = false;
       }
     );
   }


 }
