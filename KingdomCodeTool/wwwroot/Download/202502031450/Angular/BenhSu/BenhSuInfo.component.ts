import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { BenhSu } from 'src/app/shared/eHospital_DongNai_A_Config//BenhSu.model';
import { BenhSuService } from 'src/app/shared/eHospital_DongNai_A_Config//BenhSu.service';

@Component({
  selector: 'app-BenhSu-info',
  templateUrl: './BenhSu-info.component.html',
  styleUrls: ['./BenhSu-info.component.css']
})
export class BenhSuInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public BenhSuService: BenhSuService,

   ) { }

   ngOnInit(): void {
     this.BenhSuService.BaseParameter.Cap = Number(this.ActiveRouter.snapshot.params.ID);
     this.BenhSuSearch();
   }

   BenhSuSearch() {
     this.BenhSuService.IsShowLoading = true;
     this.BenhSuService.GetByCapAsync().subscribe(
       res => {
         this.BenhSuService.FormData = res as BenhSu;
       },
       err => {
       },
       () => {
         this.BenhSuService.IsShowLoading = false;
       }
     );
   }
   BenhSuSave() {
     this.BenhSuService.IsShowLoading = true;
     this.BenhSuService.SaveAsync().subscribe(
       res => {
         this.BenhSuService.FormData = res as BenhSu;
         this.Router.navigateByUrl(environment.BenhSuInfo + this.BenhSuService.FormData.Cap);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.BenhSuService.IsShowLoading = false;
       }
     );
   }


 }
