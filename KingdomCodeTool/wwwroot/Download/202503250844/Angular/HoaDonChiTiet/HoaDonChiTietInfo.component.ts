import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HoaDonChiTiet } from 'src/app/shared/eHospital_DongNai_A//HoaDonChiTiet.model';
import { HoaDonChiTietService } from 'src/app/shared/eHospital_DongNai_A//HoaDonChiTiet.service';

@Component({
  selector: 'app-HoaDonChiTiet-info',
  templateUrl: './HoaDonChiTiet-info.component.html',
  styleUrls: ['./HoaDonChiTiet-info.component.css']
})
export class HoaDonChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HoaDonChiTietService: HoaDonChiTietService,

   ) { }

   ngOnInit(): void {
     this.HoaDonChiTietService.BaseParameter.HoaDonChiTiet_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.HoaDonChiTietSearch();
   }

   HoaDonChiTietSearch() {
     this.HoaDonChiTietService.IsShowLoading = true;
     this.HoaDonChiTietService.GetByHoaDonChiTiet_IdAsync().subscribe(
       res => {
         this.HoaDonChiTietService.FormData = res as HoaDonChiTiet;
       },
       err => {
       },
       () => {
         this.HoaDonChiTietService.IsShowLoading = false;
       }
     );
   }
   HoaDonChiTietSave() {
     this.HoaDonChiTietService.IsShowLoading = true;
     this.HoaDonChiTietService.SaveAsync().subscribe(
       res => {
         this.HoaDonChiTietService.FormData = res as HoaDonChiTiet;
         this.Router.navigateByUrl(environment.HoaDonChiTietInfo + this.HoaDonChiTietService.FormData.HoaDonChiTiet_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HoaDonChiTietService.IsShowLoading = false;
       }
     );
   }


 }
