import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Log_UpdateInformation } from 'src/app/shared/eHospital_DongNai_A_Config//Log_UpdateInformation.model';
import { Log_UpdateInformationService } from 'src/app/shared/eHospital_DongNai_A_Config//Log_UpdateInformation.service';

@Component({
  selector: 'app-Log_UpdateInformation-info',
  templateUrl: './Log_UpdateInformation-info.component.html',
  styleUrls: ['./Log_UpdateInformation-info.component.css']
})
export class Log_UpdateInformationInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Log_UpdateInformationService: Log_UpdateInformationService,

   ) { }

   ngOnInit(): void {
     this.Log_UpdateInformationService.BaseParameter.Update_ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.Log_UpdateInformationSearch();
   }

   Log_UpdateInformationSearch() {
     this.Log_UpdateInformationService.IsShowLoading = true;
     this.Log_UpdateInformationService.GetByUpdate_IDAsync().subscribe(
       res => {
         this.Log_UpdateInformationService.FormData = res as Log_UpdateInformation;
       },
       err => {
       },
       () => {
         this.Log_UpdateInformationService.IsShowLoading = false;
       }
     );
   }
   Log_UpdateInformationSave() {
     this.Log_UpdateInformationService.IsShowLoading = true;
     this.Log_UpdateInformationService.SaveAsync().subscribe(
       res => {
         this.Log_UpdateInformationService.FormData = res as Log_UpdateInformation;
         this.Router.navigateByUrl(environment.Log_UpdateInformationInfo + this.Log_UpdateInformationService.FormData.Update_ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Log_UpdateInformationService.IsShowLoading = false;
       }
     );
   }


 }
