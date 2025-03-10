import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRNhanVien } from 'src/app/shared//HRNhanVien.model';
import { HRNhanVienService } from 'src/app/shared//HRNhanVien.service';

@Component({
  selector: 'app-HRNhanVien-info',
  templateUrl: './HRNhanVien-info.component.html',
  styleUrls: ['./HRNhanVien-info.component.css']
})
export class HRNhanVienInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRNhanVienService: HRNhanVienService,

   ) { }

   ngOnInit(): void {
     this.HRNhanVienService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRNhanVienSearch();
   }

   HRNhanVienSearch() {
     this.HRNhanVienService.IsShowLoading = true;
     this.HRNhanVienService.GetByIDAsync().subscribe(
       res => {
         this.HRNhanVienService.FormData = res as HRNhanVien;
       },
       err => {
       },
       () => {
         this.HRNhanVienService.IsShowLoading = false;
       }
     );
   }
   HRNhanVienSave() {
     this.HRNhanVienService.IsShowLoading = true;
     this.HRNhanVienService.SaveAsync().subscribe(
       res => {
         this.HRNhanVienService.FormData = res as HRNhanVien;
         this.Router.navigateByUrl(environment.HRNhanVienInfo + this.HRNhanVienService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRNhanVienService.IsShowLoading = false;
       }
     );
   }


 }
