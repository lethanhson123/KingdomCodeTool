import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRNhanVienPhuCap } from 'src/app/shared//HRNhanVienPhuCap.model';
import { HRNhanVienPhuCapService } from 'src/app/shared//HRNhanVienPhuCap.service';

@Component({
  selector: 'app-HRNhanVienPhuCap-info',
  templateUrl: './HRNhanVienPhuCap-info.component.html',
  styleUrls: ['./HRNhanVienPhuCap-info.component.css']
})
export class HRNhanVienPhuCapInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRNhanVienPhuCapService: HRNhanVienPhuCapService,

   ) { }

   ngOnInit(): void {
     this.HRNhanVienPhuCapService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRNhanVienPhuCapSearch();
   }

   HRNhanVienPhuCapSearch() {
     this.HRNhanVienPhuCapService.IsShowLoading = true;
     this.HRNhanVienPhuCapService.GetByIDAsync().subscribe(
       res => {
         this.HRNhanVienPhuCapService.FormData = res as HRNhanVienPhuCap;
       },
       err => {
       },
       () => {
         this.HRNhanVienPhuCapService.IsShowLoading = false;
       }
     );
   }
   HRNhanVienPhuCapSave() {
     this.HRNhanVienPhuCapService.IsShowLoading = true;
     this.HRNhanVienPhuCapService.SaveAsync().subscribe(
       res => {
         this.HRNhanVienPhuCapService.FormData = res as HRNhanVienPhuCap;
         this.Router.navigateByUrl(environment.HRNhanVienPhuCapInfo + this.HRNhanVienPhuCapService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRNhanVienPhuCapService.IsShowLoading = false;
       }
     );
   }


 }
