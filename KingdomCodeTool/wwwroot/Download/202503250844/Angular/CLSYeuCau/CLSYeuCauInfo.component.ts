import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSYeuCau } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau.model';
import { CLSYeuCauService } from 'src/app/shared/eHospital_DongNai_A//CLSYeuCau.service';

@Component({
  selector: 'app-CLSYeuCau-info',
  templateUrl: './CLSYeuCau-info.component.html',
  styleUrls: ['./CLSYeuCau-info.component.css']
})
export class CLSYeuCauInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSYeuCauService: CLSYeuCauService,

   ) { }

   ngOnInit(): void {
     this.CLSYeuCauService.BaseParameter.CLSYeuCau_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSYeuCauSearch();
   }

   CLSYeuCauSearch() {
     this.CLSYeuCauService.IsShowLoading = true;
     this.CLSYeuCauService.GetByCLSYeuCau_IdAsync().subscribe(
       res => {
         this.CLSYeuCauService.FormData = res as CLSYeuCau;
       },
       err => {
       },
       () => {
         this.CLSYeuCauService.IsShowLoading = false;
       }
     );
   }
   CLSYeuCauSave() {
     this.CLSYeuCauService.IsShowLoading = true;
     this.CLSYeuCauService.SaveAsync().subscribe(
       res => {
         this.CLSYeuCauService.FormData = res as CLSYeuCau;
         this.Router.navigateByUrl(environment.CLSYeuCauInfo + this.CLSYeuCauService.FormData.CLSYeuCau_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSYeuCauService.IsShowLoading = false;
       }
     );
   }


 }
