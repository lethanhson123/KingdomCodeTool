import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { KhamBenh_SinhHieu } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_SinhHieu.model';
import { KhamBenh_SinhHieuService } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_SinhHieu.service';

@Component({
  selector: 'app-KhamBenh_SinhHieu-info',
  templateUrl: './KhamBenh_SinhHieu-info.component.html',
  styleUrls: ['./KhamBenh_SinhHieu-info.component.css']
})
export class KhamBenh_SinhHieuInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public KhamBenh_SinhHieuService: KhamBenh_SinhHieuService,

   ) { }

   ngOnInit(): void {
     this.KhamBenh_SinhHieuService.BaseParameter.BenhNhan_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.KhamBenh_SinhHieuSearch();
   }

   KhamBenh_SinhHieuSearch() {
     this.KhamBenh_SinhHieuService.IsShowLoading = true;
     this.KhamBenh_SinhHieuService.GetByBenhNhan_IdAsync().subscribe(
       res => {
         this.KhamBenh_SinhHieuService.FormData = res as KhamBenh_SinhHieu;
       },
       err => {
       },
       () => {
         this.KhamBenh_SinhHieuService.IsShowLoading = false;
       }
     );
   }
   KhamBenh_SinhHieuSave() {
     this.KhamBenh_SinhHieuService.IsShowLoading = true;
     this.KhamBenh_SinhHieuService.SaveAsync().subscribe(
       res => {
         this.KhamBenh_SinhHieuService.FormData = res as KhamBenh_SinhHieu;
         this.Router.navigateByUrl(environment.KhamBenh_SinhHieuInfo + this.KhamBenh_SinhHieuService.FormData.BenhNhan_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.KhamBenh_SinhHieuService.IsShowLoading = false;
       }
     );
   }


 }
