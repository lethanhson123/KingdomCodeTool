import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSYeuCau_ThayDoi } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau_ThayDoi.model';
import { CLSYeuCau_ThayDoiService } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau_ThayDoi.service';

@Component({
  selector: 'app-CLSYeuCau_ThayDoi-info',
  templateUrl: './CLSYeuCau_ThayDoi-info.component.html',
  styleUrls: ['./CLSYeuCau_ThayDoi-info.component.css']
})
export class CLSYeuCau_ThayDoiInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSYeuCau_ThayDoiService: CLSYeuCau_ThayDoiService,

   ) { }

   ngOnInit(): void {
     this.CLSYeuCau_ThayDoiService.BaseParameter.CLSYeuCau_ThayDoi_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSYeuCau_ThayDoiSearch();
   }

   CLSYeuCau_ThayDoiSearch() {
     this.CLSYeuCau_ThayDoiService.IsShowLoading = true;
     this.CLSYeuCau_ThayDoiService.GetByCLSYeuCau_ThayDoi_IdAsync().subscribe(
       res => {
         this.CLSYeuCau_ThayDoiService.FormData = res as CLSYeuCau_ThayDoi;
       },
       err => {
       },
       () => {
         this.CLSYeuCau_ThayDoiService.IsShowLoading = false;
       }
     );
   }
   CLSYeuCau_ThayDoiSave() {
     this.CLSYeuCau_ThayDoiService.IsShowLoading = true;
     this.CLSYeuCau_ThayDoiService.SaveAsync().subscribe(
       res => {
         this.CLSYeuCau_ThayDoiService.FormData = res as CLSYeuCau_ThayDoi;
         this.Router.navigateByUrl(environment.CLSYeuCau_ThayDoiInfo + this.CLSYeuCau_ThayDoiService.FormData.CLSYeuCau_ThayDoi_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSYeuCau_ThayDoiService.IsShowLoading = false;
       }
     );
   }


 }
