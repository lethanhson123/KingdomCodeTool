import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_Configs } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_Configs.model';
import { Sys_ConfigsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_Configs.service';

@Component({
  selector: 'app-Sys_Configs-info',
  templateUrl: './Sys_Configs-info.component.html',
  styleUrls: ['./Sys_Configs-info.component.css']
})
export class Sys_ConfigsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_ConfigsService: Sys_ConfigsService,

   ) { }

   ngOnInit(): void {
     this.Sys_ConfigsService.BaseParameter.Config_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_ConfigsSearch();
   }

   Sys_ConfigsSearch() {
     this.Sys_ConfigsService.IsShowLoading = true;
     this.Sys_ConfigsService.GetByConfig_IdAsync().subscribe(
       res => {
         this.Sys_ConfigsService.FormData = res as Sys_Configs;
       },
       err => {
       },
       () => {
         this.Sys_ConfigsService.IsShowLoading = false;
       }
     );
   }
   Sys_ConfigsSave() {
     this.Sys_ConfigsService.IsShowLoading = true;
     this.Sys_ConfigsService.SaveAsync().subscribe(
       res => {
         this.Sys_ConfigsService.FormData = res as Sys_Configs;
         this.Router.navigateByUrl(environment.Sys_ConfigsInfo + this.Sys_ConfigsService.FormData.Config_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_ConfigsService.IsShowLoading = false;
       }
     );
   }


 }
