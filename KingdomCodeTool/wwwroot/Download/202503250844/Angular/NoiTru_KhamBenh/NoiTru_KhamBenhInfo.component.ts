import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_KhamBenh } from 'src/app/shared/eHospital_DongNai_A//NoiTru_KhamBenh.model';
import { NoiTru_KhamBenhService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_KhamBenh.service';

@Component({
  selector: 'app-NoiTru_KhamBenh-info',
  templateUrl: './NoiTru_KhamBenh-info.component.html',
  styleUrls: ['./NoiTru_KhamBenh-info.component.css']
})
export class NoiTru_KhamBenhInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_KhamBenhService: NoiTru_KhamBenhService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_KhamBenhService.BaseParameter.KhamBenh_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_KhamBenhSearch();
   }

   NoiTru_KhamBenhSearch() {
     this.NoiTru_KhamBenhService.IsShowLoading = true;
     this.NoiTru_KhamBenhService.GetByKhamBenh_IdAsync().subscribe(
       res => {
         this.NoiTru_KhamBenhService.FormData = res as NoiTru_KhamBenh;
       },
       err => {
       },
       () => {
         this.NoiTru_KhamBenhService.IsShowLoading = false;
       }
     );
   }
   NoiTru_KhamBenhSave() {
     this.NoiTru_KhamBenhService.IsShowLoading = true;
     this.NoiTru_KhamBenhService.SaveAsync().subscribe(
       res => {
         this.NoiTru_KhamBenhService.FormData = res as NoiTru_KhamBenh;
         this.Router.navigateByUrl(environment.NoiTru_KhamBenhInfo + this.NoiTru_KhamBenhService.FormData.KhamBenh_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_KhamBenhService.IsShowLoading = false;
       }
     );
   }


 }
