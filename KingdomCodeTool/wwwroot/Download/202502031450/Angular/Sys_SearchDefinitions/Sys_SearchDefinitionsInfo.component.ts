import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_SearchDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_SearchDefinitions.model';
import { Sys_SearchDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_SearchDefinitions.service';

@Component({
  selector: 'app-Sys_SearchDefinitions-info',
  templateUrl: './Sys_SearchDefinitions-info.component.html',
  styleUrls: ['./Sys_SearchDefinitions-info.component.css']
})
export class Sys_SearchDefinitionsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_SearchDefinitionsService: Sys_SearchDefinitionsService,

   ) { }

   ngOnInit(): void {
     this.Sys_SearchDefinitionsService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_SearchDefinitionsSearch();
   }

   Sys_SearchDefinitionsSearch() {
     this.Sys_SearchDefinitionsService.IsShowLoading = true;
     this.Sys_SearchDefinitionsService.GetByIDAsync().subscribe(
       res => {
         this.Sys_SearchDefinitionsService.FormData = res as Sys_SearchDefinitions;
       },
       err => {
       },
       () => {
         this.Sys_SearchDefinitionsService.IsShowLoading = false;
       }
     );
   }
   Sys_SearchDefinitionsSave() {
     this.Sys_SearchDefinitionsService.IsShowLoading = true;
     this.Sys_SearchDefinitionsService.SaveAsync().subscribe(
       res => {
         this.Sys_SearchDefinitionsService.FormData = res as Sys_SearchDefinitions;
         this.Router.navigateByUrl(environment.Sys_SearchDefinitionsInfo + this.Sys_SearchDefinitionsService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_SearchDefinitionsService.IsShowLoading = false;
       }
     );
   }


 }
