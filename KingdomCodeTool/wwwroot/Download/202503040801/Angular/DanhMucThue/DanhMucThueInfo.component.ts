import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucThue } from 'src/app/shared//DanhMucThue.model';
import { DanhMucThueService } from 'src/app/shared//DanhMucThue.service';

@Component({
  selector: 'app-DanhMucThue-info',
  templateUrl: './DanhMucThue-info.component.html',
  styleUrls: ['./DanhMucThue-info.component.css']
})
export class DanhMucThueInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucThueService: DanhMucThueService,

   ) { }

   ngOnInit(): void {
     this.DanhMucThueService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucThueSearch();
   }

   DanhMucThueSearch() {
     this.DanhMucThueService.IsShowLoading = true;
     this.DanhMucThueService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucThueService.FormData = res as DanhMucThue;
       },
       err => {
       },
       () => {
         this.DanhMucThueService.IsShowLoading = false;
       }
     );
   }
   DanhMucThueSave() {
     this.DanhMucThueService.IsShowLoading = true;
     this.DanhMucThueService.SaveAsync().subscribe(
       res => {
         this.DanhMucThueService.FormData = res as DanhMucThue;
         this.Router.navigateByUrl(environment.DanhMucThueInfo + this.DanhMucThueService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucThueService.IsShowLoading = false;
       }
     );
   }


 }
