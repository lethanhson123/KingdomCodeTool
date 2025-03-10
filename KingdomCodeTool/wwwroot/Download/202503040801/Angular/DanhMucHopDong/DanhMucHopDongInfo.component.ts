import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucHopDong } from 'src/app/shared//DanhMucHopDong.model';
import { DanhMucHopDongService } from 'src/app/shared//DanhMucHopDong.service';

@Component({
  selector: 'app-DanhMucHopDong-info',
  templateUrl: './DanhMucHopDong-info.component.html',
  styleUrls: ['./DanhMucHopDong-info.component.css']
})
export class DanhMucHopDongInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucHopDongService: DanhMucHopDongService,

   ) { }

   ngOnInit(): void {
     this.DanhMucHopDongService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucHopDongSearch();
   }

   DanhMucHopDongSearch() {
     this.DanhMucHopDongService.IsShowLoading = true;
     this.DanhMucHopDongService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucHopDongService.FormData = res as DanhMucHopDong;
       },
       err => {
       },
       () => {
         this.DanhMucHopDongService.IsShowLoading = false;
       }
     );
   }
   DanhMucHopDongSave() {
     this.DanhMucHopDongService.IsShowLoading = true;
     this.DanhMucHopDongService.SaveAsync().subscribe(
       res => {
         this.DanhMucHopDongService.FormData = res as DanhMucHopDong;
         this.Router.navigateByUrl(environment.DanhMucHopDongInfo + this.DanhMucHopDongService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucHopDongService.IsShowLoading = false;
       }
     );
   }


 }
