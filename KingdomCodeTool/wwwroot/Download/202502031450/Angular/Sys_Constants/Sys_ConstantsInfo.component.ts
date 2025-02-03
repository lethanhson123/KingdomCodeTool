import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_Constants } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_Constants.model';
import { Sys_ConstantsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_Constants.service';

@Component({
  selector: 'app-Sys_Constants-info',
  templateUrl: './Sys_Constants-info.component.html',
  styleUrls: ['./Sys_Constants-info.component.css']
})
export class Sys_ConstantsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_ConstantsService: Sys_ConstantsService,

   ) { }

   ngOnInit(): void {
     this.Sys_ConstantsService.BaseParameter.Const_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_ConstantsSearch();
   }

   Sys_ConstantsSearch() {
     this.Sys_ConstantsService.IsShowLoading = true;
     this.Sys_ConstantsService.GetByConst_IdAsync().subscribe(
       res => {
         this.Sys_ConstantsService.FormData = res as Sys_Constants;
       },
       err => {
       },
       () => {
         this.Sys_ConstantsService.IsShowLoading = false;
       }
     );
   }
   Sys_ConstantsSave() {
     this.Sys_ConstantsService.IsShowLoading = true;
     this.Sys_ConstantsService.SaveAsync().subscribe(
       res => {
         this.Sys_ConstantsService.FormData = res as Sys_Constants;
         this.Router.navigateByUrl(environment.Sys_ConstantsInfo + this.Sys_ConstantsService.FormData.Const_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_ConstantsService.IsShowLoading = false;
       }
     );
   }


 }
