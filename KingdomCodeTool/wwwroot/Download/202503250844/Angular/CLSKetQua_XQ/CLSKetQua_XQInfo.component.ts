import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSKetQua_XQ } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_XQ.model';
import { CLSKetQua_XQService } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_XQ.service';

@Component({
  selector: 'app-CLSKetQua_XQ-info',
  templateUrl: './CLSKetQua_XQ-info.component.html',
  styleUrls: ['./CLSKetQua_XQ-info.component.css']
})
export class CLSKetQua_XQInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSKetQua_XQService: CLSKetQua_XQService,

   ) { }

   ngOnInit(): void {
     this.CLSKetQua_XQService.BaseParameter.CLSKetQua_XQ_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSKetQua_XQSearch();
   }

   CLSKetQua_XQSearch() {
     this.CLSKetQua_XQService.IsShowLoading = true;
     this.CLSKetQua_XQService.GetByCLSKetQua_XQ_IdAsync().subscribe(
       res => {
         this.CLSKetQua_XQService.FormData = res as CLSKetQua_XQ;
       },
       err => {
       },
       () => {
         this.CLSKetQua_XQService.IsShowLoading = false;
       }
     );
   }
   CLSKetQua_XQSave() {
     this.CLSKetQua_XQService.IsShowLoading = true;
     this.CLSKetQua_XQService.SaveAsync().subscribe(
       res => {
         this.CLSKetQua_XQService.FormData = res as CLSKetQua_XQ;
         this.Router.navigateByUrl(environment.CLSKetQua_XQInfo + this.CLSKetQua_XQService.FormData.CLSKetQua_XQ_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSKetQua_XQService.IsShowLoading = false;
       }
     );
   }


 }
