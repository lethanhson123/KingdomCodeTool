import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSYeuCauChiTiet } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCauChiTiet.model';
import { CLSYeuCauChiTietService } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCauChiTiet.service';

@Component({
  selector: 'app-CLSYeuCauChiTiet-info',
  templateUrl: './CLSYeuCauChiTiet-info.component.html',
  styleUrls: ['./CLSYeuCauChiTiet-info.component.css']
})
export class CLSYeuCauChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSYeuCauChiTietService: CLSYeuCauChiTietService,

   ) { }

   ngOnInit(): void {
     this.CLSYeuCauChiTietService.BaseParameter.YeuCauChiTiet_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSYeuCauChiTietSearch();
   }

   CLSYeuCauChiTietSearch() {
     this.CLSYeuCauChiTietService.IsShowLoading = true;
     this.CLSYeuCauChiTietService.GetByYeuCauChiTiet_IdAsync().subscribe(
       res => {
         this.CLSYeuCauChiTietService.FormData = res as CLSYeuCauChiTiet;
       },
       err => {
       },
       () => {
         this.CLSYeuCauChiTietService.IsShowLoading = false;
       }
     );
   }
   CLSYeuCauChiTietSave() {
     this.CLSYeuCauChiTietService.IsShowLoading = true;
     this.CLSYeuCauChiTietService.SaveAsync().subscribe(
       res => {
         this.CLSYeuCauChiTietService.FormData = res as CLSYeuCauChiTiet;
         this.Router.navigateByUrl(environment.CLSYeuCauChiTietInfo + this.CLSYeuCauChiTietService.FormData.YeuCauChiTiet_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSYeuCauChiTietService.IsShowLoading = false;
       }
     );
   }


 }
