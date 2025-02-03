import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_ModifySource_Computer } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ModifySource_Computer.model';
import { Sys_ModifySource_ComputerService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ModifySource_Computer.service';

@Component({
  selector: 'app-Sys_ModifySource_Computer-info',
  templateUrl: './Sys_ModifySource_Computer-info.component.html',
  styleUrls: ['./Sys_ModifySource_Computer-info.component.css']
})
export class Sys_ModifySource_ComputerInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_ModifySource_ComputerService: Sys_ModifySource_ComputerService,

   ) { }

   ngOnInit(): void {
     this.Sys_ModifySource_ComputerService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_ModifySource_ComputerSearch();
   }

   Sys_ModifySource_ComputerSearch() {
     this.Sys_ModifySource_ComputerService.IsShowLoading = true;
     this.Sys_ModifySource_ComputerService.GetByIDAsync().subscribe(
       res => {
         this.Sys_ModifySource_ComputerService.FormData = res as Sys_ModifySource_Computer;
       },
       err => {
       },
       () => {
         this.Sys_ModifySource_ComputerService.IsShowLoading = false;
       }
     );
   }
   Sys_ModifySource_ComputerSave() {
     this.Sys_ModifySource_ComputerService.IsShowLoading = true;
     this.Sys_ModifySource_ComputerService.SaveAsync().subscribe(
       res => {
         this.Sys_ModifySource_ComputerService.FormData = res as Sys_ModifySource_Computer;
         this.Router.navigateByUrl(environment.Sys_ModifySource_ComputerInfo + this.Sys_ModifySource_ComputerService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_ModifySource_ComputerService.IsShowLoading = false;
       }
     );
   }


 }
