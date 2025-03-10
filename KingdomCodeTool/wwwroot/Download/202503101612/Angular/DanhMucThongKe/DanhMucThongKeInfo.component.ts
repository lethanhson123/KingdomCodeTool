import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucThongKe } from 'src/app/shared//DanhMucThongKe.model';
import { DanhMucThongKeService } from 'src/app/shared//DanhMucThongKe.service';

@Component({
  selector: 'app-DanhMucThongKe-info',
  templateUrl: './DanhMucThongKe-info.component.html',
  styleUrls: ['./DanhMucThongKe-info.component.css']
})
export class DanhMucThongKeInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucThongKeService: DanhMucThongKeService,

   ) { }

   ngOnInit(): void {
     this.DanhMucThongKeService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucThongKeSearch();
   }

   DanhMucThongKeSearch() {
     this.DanhMucThongKeService.IsShowLoading = true;
     this.DanhMucThongKeService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucThongKeService.FormData = res as DanhMucThongKe;
       },
       err => {
       },
       () => {
         this.DanhMucThongKeService.IsShowLoading = false;
       }
     );
   }
   DanhMucThongKeSave() {
     this.DanhMucThongKeService.IsShowLoading = true;
     this.DanhMucThongKeService.SaveAsync().subscribe(
       res => {
         this.DanhMucThongKeService.FormData = res as DanhMucThongKe;
         this.Router.navigateByUrl(environment.DanhMucThongKeInfo + this.DanhMucThongKeService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucThongKeService.IsShowLoading = false;
       }
     );
   }


 }
