import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucDonViTinh } from 'src/app/shared//DanhMucDonViTinh.model';
import { DanhMucDonViTinhService } from 'src/app/shared//DanhMucDonViTinh.service';

@Component({
  selector: 'app-DanhMucDonViTinh-info',
  templateUrl: './DanhMucDonViTinh-info.component.html',
  styleUrls: ['./DanhMucDonViTinh-info.component.css']
})
export class DanhMucDonViTinhInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucDonViTinhService: DanhMucDonViTinhService,

   ) { }

   ngOnInit(): void {
     this.DanhMucDonViTinhService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucDonViTinhSearch();
   }

   DanhMucDonViTinhSearch() {
     this.DanhMucDonViTinhService.IsShowLoading = true;
     this.DanhMucDonViTinhService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucDonViTinhService.FormData = res as DanhMucDonViTinh;
       },
       err => {
       },
       () => {
         this.DanhMucDonViTinhService.IsShowLoading = false;
       }
     );
   }
   DanhMucDonViTinhSave() {
     this.DanhMucDonViTinhService.IsShowLoading = true;
     this.DanhMucDonViTinhService.SaveAsync().subscribe(
       res => {
         this.DanhMucDonViTinhService.FormData = res as DanhMucDonViTinh;
         this.Router.navigateByUrl(environment.DanhMucDonViTinhInfo + this.DanhMucDonViTinhService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucDonViTinhService.IsShowLoading = false;
       }
     );
   }


 }
