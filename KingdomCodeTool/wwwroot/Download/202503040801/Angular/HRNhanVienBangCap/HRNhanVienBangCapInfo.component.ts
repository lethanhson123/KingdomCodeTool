import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRNhanVienBangCap } from 'src/app/shared//HRNhanVienBangCap.model';
import { HRNhanVienBangCapService } from 'src/app/shared//HRNhanVienBangCap.service';

@Component({
  selector: 'app-HRNhanVienBangCap-info',
  templateUrl: './HRNhanVienBangCap-info.component.html',
  styleUrls: ['./HRNhanVienBangCap-info.component.css']
})
export class HRNhanVienBangCapInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRNhanVienBangCapService: HRNhanVienBangCapService,

   ) { }

   ngOnInit(): void {
     this.HRNhanVienBangCapService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRNhanVienBangCapSearch();
   }

   HRNhanVienBangCapSearch() {
     this.HRNhanVienBangCapService.IsShowLoading = true;
     this.HRNhanVienBangCapService.GetByIDAsync().subscribe(
       res => {
         this.HRNhanVienBangCapService.FormData = res as HRNhanVienBangCap;
       },
       err => {
       },
       () => {
         this.HRNhanVienBangCapService.IsShowLoading = false;
       }
     );
   }
   HRNhanVienBangCapSave() {
     this.HRNhanVienBangCapService.IsShowLoading = true;
     this.HRNhanVienBangCapService.SaveAsync().subscribe(
       res => {
         this.HRNhanVienBangCapService.FormData = res as HRNhanVienBangCap;
         this.Router.navigateByUrl(environment.HRNhanVienBangCapInfo + this.HRNhanVienBangCapService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRNhanVienBangCapService.IsShowLoading = false;
       }
     );
   }


 }
