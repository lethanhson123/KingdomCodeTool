import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_NhapVien } from 'src/app/shared/eHospital_DongNai_A//NoiTru_NhapVien.model';
import { NoiTru_NhapVienService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_NhapVien.service';

@Component({
  selector: 'app-NoiTru_NhapVien-info',
  templateUrl: './NoiTru_NhapVien-info.component.html',
  styleUrls: ['./NoiTru_NhapVien-info.component.css']
})
export class NoiTru_NhapVienInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_NhapVienService: NoiTru_NhapVienService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_NhapVienService.BaseParameter.NhapVien_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_NhapVienSearch();
   }

   NoiTru_NhapVienSearch() {
     this.NoiTru_NhapVienService.IsShowLoading = true;
     this.NoiTru_NhapVienService.GetByNhapVien_IdAsync().subscribe(
       res => {
         this.NoiTru_NhapVienService.FormData = res as NoiTru_NhapVien;
       },
       err => {
       },
       () => {
         this.NoiTru_NhapVienService.IsShowLoading = false;
       }
     );
   }
   NoiTru_NhapVienSave() {
     this.NoiTru_NhapVienService.IsShowLoading = true;
     this.NoiTru_NhapVienService.SaveAsync().subscribe(
       res => {
         this.NoiTru_NhapVienService.FormData = res as NoiTru_NhapVien;
         this.Router.navigateByUrl(environment.NoiTru_NhapVienInfo + this.NoiTru_NhapVienService.FormData.NhapVien_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_NhapVienService.IsShowLoading = false;
       }
     );
   }


 }
