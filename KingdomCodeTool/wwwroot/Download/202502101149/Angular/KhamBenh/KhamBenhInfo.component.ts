import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { KhamBenh } from 'src/app/shared/eHospital_DongNai_A//KhamBenh.model';
import { KhamBenhService } from 'src/app/shared/eHospital_DongNai_A//KhamBenh.service';

@Component({
  selector: 'app-KhamBenh-info',
  templateUrl: './KhamBenh-info.component.html',
  styleUrls: ['./KhamBenh-info.component.css']
})
export class KhamBenhInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public KhamBenhService: KhamBenhService,

   ) { }

   ngOnInit(): void {
     this.KhamBenhService.BaseParameter.KhamBenh_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.KhamBenhSearch();
   }

   KhamBenhSearch() {
     this.KhamBenhService.IsShowLoading = true;
     this.KhamBenhService.GetByKhamBenh_IdAsync().subscribe(
       res => {
         this.KhamBenhService.FormData = res as KhamBenh;
       },
       err => {
       },
       () => {
         this.KhamBenhService.IsShowLoading = false;
       }
     );
   }
   KhamBenhSave() {
     this.KhamBenhService.IsShowLoading = true;
     this.KhamBenhService.SaveAsync().subscribe(
       res => {
         this.KhamBenhService.FormData = res as KhamBenh;
         this.Router.navigateByUrl(environment.KhamBenhInfo + this.KhamBenhService.FormData.KhamBenh_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.KhamBenhService.IsShowLoading = false;
       }
     );
   }


 }
