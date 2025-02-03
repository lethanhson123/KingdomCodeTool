import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { test } from 'src/app/shared/eHospital_DongNai_A_Config//test.model';
import { testService } from 'src/app/shared/eHospital_DongNai_A_Config//test.service';

@Component({
  selector: 'app-test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.css']
})
export class testInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public testService: testService,

   ) { }

   ngOnInit(): void {
     this.testService.BaseParameter.Setting_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.testSearch();
   }

   testSearch() {
     this.testService.IsShowLoading = true;
     this.testService.GetBySetting_IdAsync().subscribe(
       res => {
         this.testService.FormData = res as test;
       },
       err => {
       },
       () => {
         this.testService.IsShowLoading = false;
       }
     );
   }
   testSave() {
     this.testService.IsShowLoading = true;
     this.testService.SaveAsync().subscribe(
       res => {
         this.testService.FormData = res as test;
         this.Router.navigateByUrl(environment.testInfo + this.testService.FormData.Setting_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.testService.IsShowLoading = false;
       }
     );
   }


 }
