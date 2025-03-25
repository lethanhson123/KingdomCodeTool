import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { BenhAn } from 'src/app/shared/eHospital_DongNai_A//BenhAn.model';
import { BenhAnService } from 'src/app/shared/eHospital_DongNai_A//BenhAn.service';

@Component({
  selector: 'app-BenhAn-info',
  templateUrl: './BenhAn-info.component.html',
  styleUrls: ['./BenhAn-info.component.css']
})
export class BenhAnInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public BenhAnService: BenhAnService,

   ) { }

   ngOnInit(): void {
     this.BenhAnService.BaseParameter.BenhAn_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.BenhAnSearch();
   }

   BenhAnSearch() {
     this.BenhAnService.IsShowLoading = true;
     this.BenhAnService.GetByBenhAn_IdAsync().subscribe(
       res => {
         this.BenhAnService.FormData = res as BenhAn;
       },
       err => {
       },
       () => {
         this.BenhAnService.IsShowLoading = false;
       }
     );
   }
   BenhAnSave() {
     this.BenhAnService.IsShowLoading = true;
     this.BenhAnService.SaveAsync().subscribe(
       res => {
         this.BenhAnService.FormData = res as BenhAn;
         this.Router.navigateByUrl(environment.BenhAnInfo + this.BenhAnService.FormData.BenhAn_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.BenhAnService.IsShowLoading = false;
       }
     );
   }


 }
