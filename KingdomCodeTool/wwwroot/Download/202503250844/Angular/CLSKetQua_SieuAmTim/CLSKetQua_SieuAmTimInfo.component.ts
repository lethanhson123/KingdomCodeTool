import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSKetQua_SieuAmTim } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_SieuAmTim.model';
import { CLSKetQua_SieuAmTimService } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_SieuAmTim.service';

@Component({
  selector: 'app-CLSKetQua_SieuAmTim-info',
  templateUrl: './CLSKetQua_SieuAmTim-info.component.html',
  styleUrls: ['./CLSKetQua_SieuAmTim-info.component.css']
})
export class CLSKetQua_SieuAmTimInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSKetQua_SieuAmTimService: CLSKetQua_SieuAmTimService,

   ) { }

   ngOnInit(): void {
     this.CLSKetQua_SieuAmTimService.BaseParameter.CLSKetQua_SieuAmTim_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSKetQua_SieuAmTimSearch();
   }

   CLSKetQua_SieuAmTimSearch() {
     this.CLSKetQua_SieuAmTimService.IsShowLoading = true;
     this.CLSKetQua_SieuAmTimService.GetByCLSKetQua_SieuAmTim_IdAsync().subscribe(
       res => {
         this.CLSKetQua_SieuAmTimService.FormData = res as CLSKetQua_SieuAmTim;
       },
       err => {
       },
       () => {
         this.CLSKetQua_SieuAmTimService.IsShowLoading = false;
       }
     );
   }
   CLSKetQua_SieuAmTimSave() {
     this.CLSKetQua_SieuAmTimService.IsShowLoading = true;
     this.CLSKetQua_SieuAmTimService.SaveAsync().subscribe(
       res => {
         this.CLSKetQua_SieuAmTimService.FormData = res as CLSKetQua_SieuAmTim;
         this.Router.navigateByUrl(environment.CLSKetQua_SieuAmTimInfo + this.CLSKetQua_SieuAmTimService.FormData.CLSKetQua_SieuAmTim_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSKetQua_SieuAmTimService.IsShowLoading = false;
       }
     );
   }


 }
