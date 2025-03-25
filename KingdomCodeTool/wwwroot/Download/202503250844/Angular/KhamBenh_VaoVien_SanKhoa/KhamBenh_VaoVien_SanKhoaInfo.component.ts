import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { KhamBenh_VaoVien_SanKhoa } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_VaoVien_SanKhoa.model';
import { KhamBenh_VaoVien_SanKhoaService } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_VaoVien_SanKhoa.service';

@Component({
  selector: 'app-KhamBenh_VaoVien_SanKhoa-info',
  templateUrl: './KhamBenh_VaoVien_SanKhoa-info.component.html',
  styleUrls: ['./KhamBenh_VaoVien_SanKhoa-info.component.css']
})
export class KhamBenh_VaoVien_SanKhoaInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public KhamBenh_VaoVien_SanKhoaService: KhamBenh_VaoVien_SanKhoaService,

   ) { }

   ngOnInit(): void {
     this.KhamBenh_VaoVien_SanKhoaService.BaseParameter.KhamBenh_VaoVien_SanKhoa_ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.KhamBenh_VaoVien_SanKhoaSearch();
   }

   KhamBenh_VaoVien_SanKhoaSearch() {
     this.KhamBenh_VaoVien_SanKhoaService.IsShowLoading = true;
     this.KhamBenh_VaoVien_SanKhoaService.GetByKhamBenh_VaoVien_SanKhoa_IDAsync().subscribe(
       res => {
         this.KhamBenh_VaoVien_SanKhoaService.FormData = res as KhamBenh_VaoVien_SanKhoa;
       },
       err => {
       },
       () => {
         this.KhamBenh_VaoVien_SanKhoaService.IsShowLoading = false;
       }
     );
   }
   KhamBenh_VaoVien_SanKhoaSave() {
     this.KhamBenh_VaoVien_SanKhoaService.IsShowLoading = true;
     this.KhamBenh_VaoVien_SanKhoaService.SaveAsync().subscribe(
       res => {
         this.KhamBenh_VaoVien_SanKhoaService.FormData = res as KhamBenh_VaoVien_SanKhoa;
         this.Router.navigateByUrl(environment.KhamBenh_VaoVien_SanKhoaInfo + this.KhamBenh_VaoVien_SanKhoaService.FormData.KhamBenh_VaoVien_SanKhoa_ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.KhamBenh_VaoVien_SanKhoaService.IsShowLoading = false;
       }
     );
   }


 }
