import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_HistoryDefines } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_HistoryDefines.model';
import { Sys_HistoryDefinesService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_HistoryDefines.service';

@Component({
  selector: 'app-Sys_HistoryDefines-info',
  templateUrl: './Sys_HistoryDefines-info.component.html',
  styleUrls: ['./Sys_HistoryDefines-info.component.css']
})
export class Sys_HistoryDefinesInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_HistoryDefinesService: Sys_HistoryDefinesService,

   ) { }

   ngOnInit(): void {
     this.Sys_HistoryDefinesService.BaseParameter.HistoryDefine_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_HistoryDefinesSearch();
   }

   Sys_HistoryDefinesSearch() {
     this.Sys_HistoryDefinesService.IsShowLoading = true;
     this.Sys_HistoryDefinesService.GetByHistoryDefine_IdAsync().subscribe(
       res => {
         this.Sys_HistoryDefinesService.FormData = res as Sys_HistoryDefines;
       },
       err => {
       },
       () => {
         this.Sys_HistoryDefinesService.IsShowLoading = false;
       }
     );
   }
   Sys_HistoryDefinesSave() {
     this.Sys_HistoryDefinesService.IsShowLoading = true;
     this.Sys_HistoryDefinesService.SaveAsync().subscribe(
       res => {
         this.Sys_HistoryDefinesService.FormData = res as Sys_HistoryDefines;
         this.Router.navigateByUrl(environment.Sys_HistoryDefinesInfo + this.Sys_HistoryDefinesService.FormData.HistoryDefine_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_HistoryDefinesService.IsShowLoading = false;
       }
     );
   }


 }
