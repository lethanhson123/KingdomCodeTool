import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_TraThuocChiTiet } from 'src/app/shared/eHospital_DongNai_A//NoiTru_TraThuocChiTiet.model';
import { NoiTru_TraThuocChiTietService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_TraThuocChiTiet.service';

@Component({
  selector: 'app-NoiTru_TraThuocChiTiet-info',
  templateUrl: './NoiTru_TraThuocChiTiet-info.component.html',
  styleUrls: ['./NoiTru_TraThuocChiTiet-info.component.css']
})
export class NoiTru_TraThuocChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_TraThuocChiTietService: NoiTru_TraThuocChiTietService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_TraThuocChiTietService.BaseParameter.NoiTru_TraThuocChiTiet_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_TraThuocChiTietSearch();
   }

   NoiTru_TraThuocChiTietSearch() {
     this.NoiTru_TraThuocChiTietService.IsShowLoading = true;
     this.NoiTru_TraThuocChiTietService.GetByNoiTru_TraThuocChiTiet_IdAsync().subscribe(
       res => {
         this.NoiTru_TraThuocChiTietService.FormData = res as NoiTru_TraThuocChiTiet;
       },
       err => {
       },
       () => {
         this.NoiTru_TraThuocChiTietService.IsShowLoading = false;
       }
     );
   }
   NoiTru_TraThuocChiTietSave() {
     this.NoiTru_TraThuocChiTietService.IsShowLoading = true;
     this.NoiTru_TraThuocChiTietService.SaveAsync().subscribe(
       res => {
         this.NoiTru_TraThuocChiTietService.FormData = res as NoiTru_TraThuocChiTiet;
         this.Router.navigateByUrl(environment.NoiTru_TraThuocChiTietInfo + this.NoiTru_TraThuocChiTietService.FormData.NoiTru_TraThuocChiTiet_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_TraThuocChiTietService.IsShowLoading = false;
       }
     );
   }


 }
