import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_Operators } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_Operators.model';
import { Sys_OperatorsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_Operators.service';

@Component({
  selector: 'app-Sys_Operators-info',
  templateUrl: './Sys_Operators-info.component.html',
  styleUrls: ['./Sys_Operators-info.component.css']
})
export class Sys_OperatorsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_OperatorsService: Sys_OperatorsService,

   ) { }

   ngOnInit(): void {
     this.Sys_OperatorsService.BaseParameter.Operator_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_OperatorsSearch();
   }

   Sys_OperatorsSearch() {
     this.Sys_OperatorsService.IsShowLoading = true;
     this.Sys_OperatorsService.GetByOperator_IdAsync().subscribe(
       res => {
         this.Sys_OperatorsService.FormData = res as Sys_Operators;
       },
       err => {
       },
       () => {
         this.Sys_OperatorsService.IsShowLoading = false;
       }
     );
   }
   Sys_OperatorsSave() {
     this.Sys_OperatorsService.IsShowLoading = true;
     this.Sys_OperatorsService.SaveAsync().subscribe(
       res => {
         this.Sys_OperatorsService.FormData = res as Sys_Operators;
         this.Router.navigateByUrl(environment.Sys_OperatorsInfo + this.Sys_OperatorsService.FormData.Operator_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_OperatorsService.IsShowLoading = false;
       }
     );
   }


 }
