import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NhapVien } from 'src/app/shared/eHospital_DongNai_A//NhapVien.model';
import { NhapVienService } from 'src/app/shared/eHospital_DongNai_A//NhapVien.service';

@Component({
  selector: 'app-NhapVien-info',
  templateUrl: './NhapVien-info.component.html',
  styleUrls: ['./NhapVien-info.component.css']
})
export class NhapVienInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NhapVienService: NhapVienService,

   ) { }

   ngOnInit(): void {
     this.NhapVienService.BaseParameter.NhapVien_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NhapVienSearch();
   }

   NhapVienSearch() {
     this.NhapVienService.IsShowLoading = true;
     this.NhapVienService.GetByNhapVien_IdAsync().subscribe(
       res => {
         this.NhapVienService.FormData = res as NhapVien;
       },
       err => {
       },
       () => {
         this.NhapVienService.IsShowLoading = false;
       }
     );
   }
   NhapVienSave() {
     this.NhapVienService.IsShowLoading = true;
     this.NhapVienService.SaveAsync().subscribe(
       res => {
         this.NhapVienService.FormData = res as NhapVien;
         this.Router.navigateByUrl(environment.NhapVienInfo + this.NhapVienService.FormData.NhapVien_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NhapVienService.IsShowLoading = false;
       }
     );
   }


 }
