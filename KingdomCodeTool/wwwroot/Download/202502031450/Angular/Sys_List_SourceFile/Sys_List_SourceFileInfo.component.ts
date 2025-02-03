import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_List_SourceFile } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_List_SourceFile.model';
import { Sys_List_SourceFileService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_List_SourceFile.service';

@Component({
  selector: 'app-Sys_List_SourceFile-info',
  templateUrl: './Sys_List_SourceFile-info.component.html',
  styleUrls: ['./Sys_List_SourceFile-info.component.css']
})
export class Sys_List_SourceFileInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_List_SourceFileService: Sys_List_SourceFileService,

   ) { }

   ngOnInit(): void {
     this.Sys_List_SourceFileService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_List_SourceFileSearch();
   }

   Sys_List_SourceFileSearch() {
     this.Sys_List_SourceFileService.IsShowLoading = true;
     this.Sys_List_SourceFileService.GetByIDAsync().subscribe(
       res => {
         this.Sys_List_SourceFileService.FormData = res as Sys_List_SourceFile;
       },
       err => {
       },
       () => {
         this.Sys_List_SourceFileService.IsShowLoading = false;
       }
     );
   }
   Sys_List_SourceFileSave() {
     this.Sys_List_SourceFileService.IsShowLoading = true;
     this.Sys_List_SourceFileService.SaveAsync().subscribe(
       res => {
         this.Sys_List_SourceFileService.FormData = res as Sys_List_SourceFile;
         this.Router.navigateByUrl(environment.Sys_List_SourceFileInfo + this.Sys_List_SourceFileService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_List_SourceFileService.IsShowLoading = false;
       }
     );
   }


 }
