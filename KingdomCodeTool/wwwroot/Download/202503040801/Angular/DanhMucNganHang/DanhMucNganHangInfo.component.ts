import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucNganHang } from 'src/app/shared//DanhMucNganHang.model';
import { DanhMucNganHangService } from 'src/app/shared//DanhMucNganHang.service';

@Component({
  selector: 'app-DanhMucNganHang-info',
  templateUrl: './DanhMucNganHang-info.component.html',
  styleUrls: ['./DanhMucNganHang-info.component.css']
})
export class DanhMucNganHangInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucNganHangService: DanhMucNganHangService,

   ) { }

   ngOnInit(): void {
     this.DanhMucNganHangService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucNganHangSearch();
   }

   DanhMucNganHangSearch() {
     this.DanhMucNganHangService.IsShowLoading = true;
     this.DanhMucNganHangService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucNganHangService.FormData = res as DanhMucNganHang;
       },
       err => {
       },
       () => {
         this.DanhMucNganHangService.IsShowLoading = false;
       }
     );
   }
   DanhMucNganHangSave() {
     this.DanhMucNganHangService.IsShowLoading = true;
     this.DanhMucNganHangService.SaveAsync().subscribe(
       res => {
         this.DanhMucNganHangService.FormData = res as DanhMucNganHang;
         this.Router.navigateByUrl(environment.DanhMucNganHangInfo + this.DanhMucNganHangService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucNganHangService.IsShowLoading = false;
       }
     );
   }


 }
