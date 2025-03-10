import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRBangLuong } from 'src/app/shared//HRBangLuong.model';
import { HRBangLuongService } from 'src/app/shared//HRBangLuong.service';

@Component({
  selector: 'app-HRBangLuong-info',
  templateUrl: './HRBangLuong-info.component.html',
  styleUrls: ['./HRBangLuong-info.component.css']
})
export class HRBangLuongInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRBangLuongService: HRBangLuongService,

   ) { }

   ngOnInit(): void {
     this.HRBangLuongService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRBangLuongSearch();
   }

   HRBangLuongSearch() {
     this.HRBangLuongService.IsShowLoading = true;
     this.HRBangLuongService.GetByIDAsync().subscribe(
       res => {
         this.HRBangLuongService.FormData = res as HRBangLuong;
       },
       err => {
       },
       () => {
         this.HRBangLuongService.IsShowLoading = false;
       }
     );
   }
   HRBangLuongSave() {
     this.HRBangLuongService.IsShowLoading = true;
     this.HRBangLuongService.SaveAsync().subscribe(
       res => {
         this.HRBangLuongService.FormData = res as HRBangLuong;
         this.Router.navigateByUrl(environment.HRBangLuongInfo + this.HRBangLuongService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRBangLuongService.IsShowLoading = false;
       }
     );
   }


 }
