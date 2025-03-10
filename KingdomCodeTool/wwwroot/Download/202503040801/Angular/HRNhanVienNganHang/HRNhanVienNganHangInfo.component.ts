import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRNhanVienNganHang } from 'src/app/shared//HRNhanVienNganHang.model';
import { HRNhanVienNganHangService } from 'src/app/shared//HRNhanVienNganHang.service';

@Component({
  selector: 'app-HRNhanVienNganHang-info',
  templateUrl: './HRNhanVienNganHang-info.component.html',
  styleUrls: ['./HRNhanVienNganHang-info.component.css']
})
export class HRNhanVienNganHangInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRNhanVienNganHangService: HRNhanVienNganHangService,

   ) { }

   ngOnInit(): void {
     this.HRNhanVienNganHangService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRNhanVienNganHangSearch();
   }

   HRNhanVienNganHangSearch() {
     this.HRNhanVienNganHangService.IsShowLoading = true;
     this.HRNhanVienNganHangService.GetByIDAsync().subscribe(
       res => {
         this.HRNhanVienNganHangService.FormData = res as HRNhanVienNganHang;
       },
       err => {
       },
       () => {
         this.HRNhanVienNganHangService.IsShowLoading = false;
       }
     );
   }
   HRNhanVienNganHangSave() {
     this.HRNhanVienNganHangService.IsShowLoading = true;
     this.HRNhanVienNganHangService.SaveAsync().subscribe(
       res => {
         this.HRNhanVienNganHangService.FormData = res as HRNhanVienNganHang;
         this.Router.navigateByUrl(environment.HRNhanVienNganHangInfo + this.HRNhanVienNganHangService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRNhanVienNganHangService.IsShowLoading = false;
       }
     );
   }


 }
