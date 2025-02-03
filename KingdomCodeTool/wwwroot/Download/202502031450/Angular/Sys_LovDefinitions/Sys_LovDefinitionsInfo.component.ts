import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_LovDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_LovDefinitions.model';
import { Sys_LovDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_LovDefinitions.service';

@Component({
  selector: 'app-Sys_LovDefinitions-info',
  templateUrl: './Sys_LovDefinitions-info.component.html',
  styleUrls: ['./Sys_LovDefinitions-info.component.css']
})
export class Sys_LovDefinitionsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_LovDefinitionsService: Sys_LovDefinitionsService,

   ) { }

   ngOnInit(): void {
     this.Sys_LovDefinitionsService.BaseParameter.LovDefinition_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_LovDefinitionsSearch();
   }

   Sys_LovDefinitionsSearch() {
     this.Sys_LovDefinitionsService.IsShowLoading = true;
     this.Sys_LovDefinitionsService.GetByLovDefinition_IdAsync().subscribe(
       res => {
         this.Sys_LovDefinitionsService.FormData = res as Sys_LovDefinitions;
       },
       err => {
       },
       () => {
         this.Sys_LovDefinitionsService.IsShowLoading = false;
       }
     );
   }
   Sys_LovDefinitionsSave() {
     this.Sys_LovDefinitionsService.IsShowLoading = true;
     this.Sys_LovDefinitionsService.SaveAsync().subscribe(
       res => {
         this.Sys_LovDefinitionsService.FormData = res as Sys_LovDefinitions;
         this.Router.navigateByUrl(environment.Sys_LovDefinitionsInfo + this.Sys_LovDefinitionsService.FormData.LovDefinition_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_LovDefinitionsService.IsShowLoading = false;
       }
     );
   }


 }
