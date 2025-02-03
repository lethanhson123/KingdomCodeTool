import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { Sys_ComboDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ComboDefinitions.model';
import { Sys_ComboDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config//Sys_ComboDefinitions.service';

@Component({
  selector: 'app-Sys_ComboDefinitions-info',
  templateUrl: './Sys_ComboDefinitions-info.component.html',
  styleUrls: ['./Sys_ComboDefinitions-info.component.css']
})
export class Sys_ComboDefinitionsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public Sys_ComboDefinitionsService: Sys_ComboDefinitionsService,

   ) { }

   ngOnInit(): void {
     this.Sys_ComboDefinitionsService.BaseParameter.ComboDefinition_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.Sys_ComboDefinitionsSearch();
   }

   Sys_ComboDefinitionsSearch() {
     this.Sys_ComboDefinitionsService.IsShowLoading = true;
     this.Sys_ComboDefinitionsService.GetByComboDefinition_IdAsync().subscribe(
       res => {
         this.Sys_ComboDefinitionsService.FormData = res as Sys_ComboDefinitions;
       },
       err => {
       },
       () => {
         this.Sys_ComboDefinitionsService.IsShowLoading = false;
       }
     );
   }
   Sys_ComboDefinitionsSave() {
     this.Sys_ComboDefinitionsService.IsShowLoading = true;
     this.Sys_ComboDefinitionsService.SaveAsync().subscribe(
       res => {
         this.Sys_ComboDefinitionsService.FormData = res as Sys_ComboDefinitions;
         this.Router.navigateByUrl(environment.Sys_ComboDefinitionsInfo + this.Sys_ComboDefinitionsService.FormData.ComboDefinition_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.Sys_ComboDefinitionsService.IsShowLoading = false;
       }
     );
   }


 }
