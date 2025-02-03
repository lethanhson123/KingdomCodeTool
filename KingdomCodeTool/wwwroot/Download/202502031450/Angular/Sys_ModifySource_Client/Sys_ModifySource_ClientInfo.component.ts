import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_ModifySource_Client } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ModifySource_Client.model';
import { Sys_ModifySource_ClientService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ModifySource_Client.service';

@Component({
  selector: 'app-Sys_ModifySource_Client-info',
  templateUrl: './Sys_ModifySource_Client-info.component.html',
  styleUrls: ['./Sys_ModifySource_Client-info.component.css']
})
export class Sys_ModifySource_ClientInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_ModifySource_ClientService: Sys_ModifySource_ClientService,

   ) { }

   ngOnInit(): void {
     this.Sys_ModifySource_ClientService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_ModifySource_ClientSearch();
   }

   Sys_ModifySource_ClientSearch() {
     this.Sys_ModifySource_ClientService.IsShowLoading = true;
     this.Sys_ModifySource_ClientService.GetByIDAsync().subscribe(
       res => {
         this.Sys_ModifySource_ClientService.FormData = res as Sys_ModifySource_Client;
       },
       err => {
       },
       () => {
         this.Sys_ModifySource_ClientService.IsShowLoading = false;
       }
     );
   }
   Sys_ModifySource_ClientSave() {
     this.Sys_ModifySource_ClientService.IsShowLoading = true;
     this.Sys_ModifySource_ClientService.SaveAsync().subscribe(
       res => {
         this.Sys_ModifySource_ClientService.FormData = res as Sys_ModifySource_Client;
         this.Router.navigateByUrl(environment.Sys_ModifySource_ClientInfo + this.Sys_ModifySource_ClientService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_ModifySource_ClientService.IsShowLoading = false;
       }
     );
   }


 }
