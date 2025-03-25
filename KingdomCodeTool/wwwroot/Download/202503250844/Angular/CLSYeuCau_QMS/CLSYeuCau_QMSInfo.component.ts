import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSYeuCau_QMS } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau_QMS.model';
import { CLSYeuCau_QMSService } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau_QMS.service';

@Component({
  selector: 'app-CLSYeuCau_QMS-info',
  templateUrl: './CLSYeuCau_QMS-info.component.html',
  styleUrls: ['./CLSYeuCau_QMS-info.component.css']
})
export class CLSYeuCau_QMSInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSYeuCau_QMSService: CLSYeuCau_QMSService,

   ) { }

   ngOnInit(): void {
     this.CLSYeuCau_QMSService.BaseParameter.CLSYeuCau_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSYeuCau_QMSSearch();
   }

   CLSYeuCau_QMSSearch() {
     this.CLSYeuCau_QMSService.IsShowLoading = true;
     this.CLSYeuCau_QMSService.GetByCLSYeuCau_IdAsync().subscribe(
       res => {
         this.CLSYeuCau_QMSService.FormData = res as CLSYeuCau_QMS;
       },
       err => {
       },
       () => {
         this.CLSYeuCau_QMSService.IsShowLoading = false;
       }
     );
   }
   CLSYeuCau_QMSSave() {
     this.CLSYeuCau_QMSService.IsShowLoading = true;
     this.CLSYeuCau_QMSService.SaveAsync().subscribe(
       res => {
         this.CLSYeuCau_QMSService.FormData = res as CLSYeuCau_QMS;
         this.Router.navigateByUrl(environment.CLSYeuCau_QMSInfo + this.CLSYeuCau_QMSService.FormData.CLSYeuCau_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSYeuCau_QMSService.IsShowLoading = false;
       }
     );
   }


 }
