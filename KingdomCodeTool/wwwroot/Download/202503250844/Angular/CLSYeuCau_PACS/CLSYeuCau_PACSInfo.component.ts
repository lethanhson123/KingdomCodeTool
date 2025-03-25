import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSYeuCau_PACS } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau_PACS.model';
import { CLSYeuCau_PACSService } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau_PACS.service';

@Component({
  selector: 'app-CLSYeuCau_PACS-info',
  templateUrl: './CLSYeuCau_PACS-info.component.html',
  styleUrls: ['./CLSYeuCau_PACS-info.component.css']
})
export class CLSYeuCau_PACSInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSYeuCau_PACSService: CLSYeuCau_PACSService,

   ) { }

   ngOnInit(): void {
     this.CLSYeuCau_PACSService.BaseParameter.PACS_ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSYeuCau_PACSSearch();
   }

   CLSYeuCau_PACSSearch() {
     this.CLSYeuCau_PACSService.IsShowLoading = true;
     this.CLSYeuCau_PACSService.GetByPACS_IDAsync().subscribe(
       res => {
         this.CLSYeuCau_PACSService.FormData = res as CLSYeuCau_PACS;
       },
       err => {
       },
       () => {
         this.CLSYeuCau_PACSService.IsShowLoading = false;
       }
     );
   }
   CLSYeuCau_PACSSave() {
     this.CLSYeuCau_PACSService.IsShowLoading = true;
     this.CLSYeuCau_PACSService.SaveAsync().subscribe(
       res => {
         this.CLSYeuCau_PACSService.FormData = res as CLSYeuCau_PACS;
         this.Router.navigateByUrl(environment.CLSYeuCau_PACSInfo + this.CLSYeuCau_PACSService.FormData.PACS_ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSYeuCau_PACSService.IsShowLoading = false;
       }
     );
   }


 }
