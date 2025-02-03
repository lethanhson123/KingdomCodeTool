import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { BenhSuDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config//BenhSuDefinitions.model';
import { BenhSuDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config//BenhSuDefinitions.service';

@Component({
  selector: 'app-BenhSuDefinitions-info',
  templateUrl: './BenhSuDefinitions-info.component.html',
  styleUrls: ['./BenhSuDefinitions-info.component.css']
})
export class BenhSuDefinitionsInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public BenhSuDefinitionsService: BenhSuDefinitionsService,

   ) { }

   ngOnInit(): void {
     this.BenhSuDefinitionsService.BaseParameter.BenhSuDefinition_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.BenhSuDefinitionsSearch();
   }

   BenhSuDefinitionsSearch() {
     this.BenhSuDefinitionsService.IsShowLoading = true;
     this.BenhSuDefinitionsService.GetByBenhSuDefinition_IdAsync().subscribe(
       res => {
         this.BenhSuDefinitionsService.FormData = res as BenhSuDefinitions;
       },
       err => {
       },
       () => {
         this.BenhSuDefinitionsService.IsShowLoading = false;
       }
     );
   }
   BenhSuDefinitionsSave() {
     this.BenhSuDefinitionsService.IsShowLoading = true;
     this.BenhSuDefinitionsService.SaveAsync().subscribe(
       res => {
         this.BenhSuDefinitionsService.FormData = res as BenhSuDefinitions;
         this.Router.navigateByUrl(environment.BenhSuDefinitionsInfo + this.BenhSuDefinitionsService.FormData.BenhSuDefinition_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.BenhSuDefinitionsService.IsShowLoading = false;
       }
     );
   }


 }
