import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRLichCongTacChiTiet } from 'src/app/shared//HRLichCongTacChiTiet.model';
import { HRLichCongTacChiTietService } from 'src/app/shared//HRLichCongTacChiTiet.service';

@Component({
  selector: 'app-HRLichCongTacChiTiet-info',
  templateUrl: './HRLichCongTacChiTiet-info.component.html',
  styleUrls: ['./HRLichCongTacChiTiet-info.component.css']
})
export class HRLichCongTacChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRLichCongTacChiTietService: HRLichCongTacChiTietService,

   ) { }

   ngOnInit(): void {
     this.HRLichCongTacChiTietService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRLichCongTacChiTietSearch();
   }

   HRLichCongTacChiTietSearch() {
     this.HRLichCongTacChiTietService.IsShowLoading = true;
     this.HRLichCongTacChiTietService.GetByIDAsync().subscribe(
       res => {
         this.HRLichCongTacChiTietService.FormData = res as HRLichCongTacChiTiet;
       },
       err => {
       },
       () => {
         this.HRLichCongTacChiTietService.IsShowLoading = false;
       }
     );
   }
   HRLichCongTacChiTietSave() {
     this.HRLichCongTacChiTietService.IsShowLoading = true;
     this.HRLichCongTacChiTietService.SaveAsync().subscribe(
       res => {
         this.HRLichCongTacChiTietService.FormData = res as HRLichCongTacChiTiet;
         this.Router.navigateByUrl(environment.HRLichCongTacChiTietInfo + this.HRLichCongTacChiTietService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRLichCongTacChiTietService.IsShowLoading = false;
       }
     );
   }


 }
