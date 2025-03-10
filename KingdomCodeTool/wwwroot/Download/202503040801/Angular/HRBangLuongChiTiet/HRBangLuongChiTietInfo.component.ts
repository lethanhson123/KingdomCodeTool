import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRBangLuongChiTiet } from 'src/app/shared//HRBangLuongChiTiet.model';
import { HRBangLuongChiTietService } from 'src/app/shared//HRBangLuongChiTiet.service';

@Component({
  selector: 'app-HRBangLuongChiTiet-info',
  templateUrl: './HRBangLuongChiTiet-info.component.html',
  styleUrls: ['./HRBangLuongChiTiet-info.component.css']
})
export class HRBangLuongChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRBangLuongChiTietService: HRBangLuongChiTietService,

   ) { }

   ngOnInit(): void {
     this.HRBangLuongChiTietService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRBangLuongChiTietSearch();
   }

   HRBangLuongChiTietSearch() {
     this.HRBangLuongChiTietService.IsShowLoading = true;
     this.HRBangLuongChiTietService.GetByIDAsync().subscribe(
       res => {
         this.HRBangLuongChiTietService.FormData = res as HRBangLuongChiTiet;
       },
       err => {
       },
       () => {
         this.HRBangLuongChiTietService.IsShowLoading = false;
       }
     );
   }
   HRBangLuongChiTietSave() {
     this.HRBangLuongChiTietService.IsShowLoading = true;
     this.HRBangLuongChiTietService.SaveAsync().subscribe(
       res => {
         this.HRBangLuongChiTietService.FormData = res as HRBangLuongChiTiet;
         this.Router.navigateByUrl(environment.HRBangLuongChiTietInfo + this.HRBangLuongChiTietService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRBangLuongChiTietService.IsShowLoading = false;
       }
     );
   }


 }
