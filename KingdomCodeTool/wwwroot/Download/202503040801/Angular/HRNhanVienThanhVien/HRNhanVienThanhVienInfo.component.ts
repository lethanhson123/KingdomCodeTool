import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRNhanVienThanhVien } from 'src/app/shared//HRNhanVienThanhVien.model';
import { HRNhanVienThanhVienService } from 'src/app/shared//HRNhanVienThanhVien.service';

@Component({
  selector: 'app-HRNhanVienThanhVien-info',
  templateUrl: './HRNhanVienThanhVien-info.component.html',
  styleUrls: ['./HRNhanVienThanhVien-info.component.css']
})
export class HRNhanVienThanhVienInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRNhanVienThanhVienService: HRNhanVienThanhVienService,

   ) { }

   ngOnInit(): void {
     this.HRNhanVienThanhVienService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRNhanVienThanhVienSearch();
   }

   HRNhanVienThanhVienSearch() {
     this.HRNhanVienThanhVienService.IsShowLoading = true;
     this.HRNhanVienThanhVienService.GetByIDAsync().subscribe(
       res => {
         this.HRNhanVienThanhVienService.FormData = res as HRNhanVienThanhVien;
       },
       err => {
       },
       () => {
         this.HRNhanVienThanhVienService.IsShowLoading = false;
       }
     );
   }
   HRNhanVienThanhVienSave() {
     this.HRNhanVienThanhVienService.IsShowLoading = true;
     this.HRNhanVienThanhVienService.SaveAsync().subscribe(
       res => {
         this.HRNhanVienThanhVienService.FormData = res as HRNhanVienThanhVien;
         this.Router.navigateByUrl(environment.HRNhanVienThanhVienInfo + this.HRNhanVienThanhVienService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRNhanVienThanhVienService.IsShowLoading = false;
       }
     );
   }


 }
