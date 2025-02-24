import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { KhamBenh_ToaThuoc } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_ToaThuoc.model';
import { KhamBenh_ToaThuocService } from 'src/app/shared/eHospital_DongNai_A//KhamBenh_ToaThuoc.service';

@Component({
  selector: 'app-KhamBenh_ToaThuoc-info',
  templateUrl: './KhamBenh_ToaThuoc-info.component.html',
  styleUrls: ['./KhamBenh_ToaThuoc-info.component.css']
})
export class KhamBenh_ToaThuocInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public KhamBenh_ToaThuocService: KhamBenh_ToaThuocService,

   ) { }

   ngOnInit(): void {
     this.KhamBenh_ToaThuocService.BaseParameter.KhamBenh_ToaThuoc_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.KhamBenh_ToaThuocSearch();
   }

   KhamBenh_ToaThuocSearch() {
     this.KhamBenh_ToaThuocService.IsShowLoading = true;
     this.KhamBenh_ToaThuocService.GetByKhamBenh_ToaThuoc_IdAsync().subscribe(
       res => {
         this.KhamBenh_ToaThuocService.FormData = res as KhamBenh_ToaThuoc;
       },
       err => {
       },
       () => {
         this.KhamBenh_ToaThuocService.IsShowLoading = false;
       }
     );
   }
   KhamBenh_ToaThuocSave() {
     this.KhamBenh_ToaThuocService.IsShowLoading = true;
     this.KhamBenh_ToaThuocService.SaveAsync().subscribe(
       res => {
         this.KhamBenh_ToaThuocService.FormData = res as KhamBenh_ToaThuoc;
         this.Router.navigateByUrl(environment.KhamBenh_ToaThuocInfo + this.KhamBenh_ToaThuocService.FormData.KhamBenh_ToaThuoc_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.KhamBenh_ToaThuocService.IsShowLoading = false;
       }
     );
   }


 }
