import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRNhanVienHopDong } from 'src/app/shared//HRNhanVienHopDong.model';
import { HRNhanVienHopDongService } from 'src/app/shared//HRNhanVienHopDong.service';

@Component({
  selector: 'app-HRNhanVienHopDong-info',
  templateUrl: './HRNhanVienHopDong-info.component.html',
  styleUrls: ['./HRNhanVienHopDong-info.component.css']
})
export class HRNhanVienHopDongInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRNhanVienHopDongService: HRNhanVienHopDongService,

   ) { }

   ngOnInit(): void {
     this.HRNhanVienHopDongService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRNhanVienHopDongSearch();
   }

   HRNhanVienHopDongSearch() {
     this.HRNhanVienHopDongService.IsShowLoading = true;
     this.HRNhanVienHopDongService.GetByIDAsync().subscribe(
       res => {
         this.HRNhanVienHopDongService.FormData = res as HRNhanVienHopDong;
       },
       err => {
       },
       () => {
         this.HRNhanVienHopDongService.IsShowLoading = false;
       }
     );
   }
   HRNhanVienHopDongSave() {
     this.HRNhanVienHopDongService.IsShowLoading = true;
     this.HRNhanVienHopDongService.SaveAsync().subscribe(
       res => {
         this.HRNhanVienHopDongService.FormData = res as HRNhanVienHopDong;
         this.Router.navigateByUrl(environment.HRNhanVienHopDongInfo + this.HRNhanVienHopDongService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRNhanVienHopDongService.IsShowLoading = false;
       }
     );
   }


 }
