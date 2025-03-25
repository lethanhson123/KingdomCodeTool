import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { BenhAnChiTiet } from 'src/app/shared/eHospital_DongNai_A//BenhAnChiTiet.model';
import { BenhAnChiTietService } from 'src/app/shared/eHospital_DongNai_A//BenhAnChiTiet.service';

@Component({
  selector: 'app-BenhAnChiTiet-info',
  templateUrl: './BenhAnChiTiet-info.component.html',
  styleUrls: ['./BenhAnChiTiet-info.component.css']
})
export class BenhAnChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public BenhAnChiTietService: BenhAnChiTietService,

   ) { }

   ngOnInit(): void {
     this.BenhAnChiTietService.BaseParameter.BenhAnChiTiet_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.BenhAnChiTietSearch();
   }

   BenhAnChiTietSearch() {
     this.BenhAnChiTietService.IsShowLoading = true;
     this.BenhAnChiTietService.GetByBenhAnChiTiet_IdAsync().subscribe(
       res => {
         this.BenhAnChiTietService.FormData = res as BenhAnChiTiet;
       },
       err => {
       },
       () => {
         this.BenhAnChiTietService.IsShowLoading = false;
       }
     );
   }
   BenhAnChiTietSave() {
     this.BenhAnChiTietService.IsShowLoading = true;
     this.BenhAnChiTietService.SaveAsync().subscribe(
       res => {
         this.BenhAnChiTietService.FormData = res as BenhAnChiTiet;
         this.Router.navigateByUrl(environment.BenhAnChiTietInfo + this.BenhAnChiTietService.FormData.BenhAnChiTiet_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.BenhAnChiTietService.IsShowLoading = false;
       }
     );
   }


 }
