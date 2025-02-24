import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { KhamBenh_VaoVien } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_VaoVien.model';
import { KhamBenh_VaoVienService } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_VaoVien.service';

@Component({
  selector: 'app-KhamBenh_VaoVien-info',
  templateUrl: './KhamBenh_VaoVien-info.component.html',
  styleUrls: ['./KhamBenh_VaoVien-info.component.css']
})
export class KhamBenh_VaoVienInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public KhamBenh_VaoVienService: KhamBenh_VaoVienService,

   ) { }

   ngOnInit(): void {
     this.KhamBenh_VaoVienService.BaseParameter.KhamBenhVaoVien_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.KhamBenh_VaoVienSearch();
   }

   KhamBenh_VaoVienSearch() {
     this.KhamBenh_VaoVienService.IsShowLoading = true;
     this.KhamBenh_VaoVienService.GetByKhamBenhVaoVien_IdAsync().subscribe(
       res => {
         this.KhamBenh_VaoVienService.FormData = res as KhamBenh_VaoVien;
       },
       err => {
       },
       () => {
         this.KhamBenh_VaoVienService.IsShowLoading = false;
       }
     );
   }
   KhamBenh_VaoVienSave() {
     this.KhamBenh_VaoVienService.IsShowLoading = true;
     this.KhamBenh_VaoVienService.SaveAsync().subscribe(
       res => {
         this.KhamBenh_VaoVienService.FormData = res as KhamBenh_VaoVien;
         this.Router.navigateByUrl(environment.KhamBenh_VaoVienInfo + this.KhamBenh_VaoVienService.FormData.KhamBenhVaoVien_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.KhamBenh_VaoVienService.IsShowLoading = false;
       }
     );
   }


 }
