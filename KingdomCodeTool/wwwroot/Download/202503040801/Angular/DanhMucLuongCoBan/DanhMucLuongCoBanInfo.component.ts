import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucLuongCoBan } from 'src/app/shared//DanhMucLuongCoBan.model';
import { DanhMucLuongCoBanService } from 'src/app/shared//DanhMucLuongCoBan.service';

@Component({
  selector: 'app-DanhMucLuongCoBan-info',
  templateUrl: './DanhMucLuongCoBan-info.component.html',
  styleUrls: ['./DanhMucLuongCoBan-info.component.css']
})
export class DanhMucLuongCoBanInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucLuongCoBanService: DanhMucLuongCoBanService,

   ) { }

   ngOnInit(): void {
     this.DanhMucLuongCoBanService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucLuongCoBanSearch();
   }

   DanhMucLuongCoBanSearch() {
     this.DanhMucLuongCoBanService.IsShowLoading = true;
     this.DanhMucLuongCoBanService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucLuongCoBanService.FormData = res as DanhMucLuongCoBan;
       },
       err => {
       },
       () => {
         this.DanhMucLuongCoBanService.IsShowLoading = false;
       }
     );
   }
   DanhMucLuongCoBanSave() {
     this.DanhMucLuongCoBanService.IsShowLoading = true;
     this.DanhMucLuongCoBanService.SaveAsync().subscribe(
       res => {
         this.DanhMucLuongCoBanService.FormData = res as DanhMucLuongCoBan;
         this.Router.navigateByUrl(environment.DanhMucLuongCoBanInfo + this.DanhMucLuongCoBanService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucLuongCoBanService.IsShowLoading = false;
       }
     );
   }


 }
