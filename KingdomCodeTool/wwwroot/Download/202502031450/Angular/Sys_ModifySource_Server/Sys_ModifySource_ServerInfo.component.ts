import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_ModifySource_Server } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ModifySource_Server.model';
import { Sys_ModifySource_ServerService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ModifySource_Server.service';

@Component({
  selector: 'app-Sys_ModifySource_Server-info',
  templateUrl: './Sys_ModifySource_Server-info.component.html',
  styleUrls: ['./Sys_ModifySource_Server-info.component.css']
})
export class Sys_ModifySource_ServerInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_ModifySource_ServerService: Sys_ModifySource_ServerService,

   ) { }

   ngOnInit(): void {
     this.Sys_ModifySource_ServerService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_ModifySource_ServerSearch();
   }

   Sys_ModifySource_ServerSearch() {
     this.Sys_ModifySource_ServerService.IsShowLoading = true;
     this.Sys_ModifySource_ServerService.GetByIDAsync().subscribe(
       res => {
         this.Sys_ModifySource_ServerService.FormData = res as Sys_ModifySource_Server;
       },
       err => {
       },
       () => {
         this.Sys_ModifySource_ServerService.IsShowLoading = false;
       }
     );
   }
   Sys_ModifySource_ServerSave() {
     this.Sys_ModifySource_ServerService.IsShowLoading = true;
     this.Sys_ModifySource_ServerService.SaveAsync().subscribe(
       res => {
         this.Sys_ModifySource_ServerService.FormData = res as Sys_ModifySource_Server;
         this.Router.navigateByUrl(environment.Sys_ModifySource_ServerInfo + this.Sys_ModifySource_ServerService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_ModifySource_ServerService.IsShowLoading = false;
       }
     );
   }


 }
