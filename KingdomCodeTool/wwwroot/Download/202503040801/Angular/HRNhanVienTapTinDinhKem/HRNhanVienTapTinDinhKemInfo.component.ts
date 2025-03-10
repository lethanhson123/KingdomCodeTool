import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRNhanVienTapTinDinhKem } from 'src/app/shared//HRNhanVienTapTinDinhKem.model';
import { HRNhanVienTapTinDinhKemService } from 'src/app/shared//HRNhanVienTapTinDinhKem.service';

@Component({
  selector: 'app-HRNhanVienTapTinDinhKem-info',
  templateUrl: './HRNhanVienTapTinDinhKem-info.component.html',
  styleUrls: ['./HRNhanVienTapTinDinhKem-info.component.css']
})
export class HRNhanVienTapTinDinhKemInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRNhanVienTapTinDinhKemService: HRNhanVienTapTinDinhKemService,

   ) { }

   ngOnInit(): void {
     this.HRNhanVienTapTinDinhKemService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRNhanVienTapTinDinhKemSearch();
   }

   HRNhanVienTapTinDinhKemSearch() {
     this.HRNhanVienTapTinDinhKemService.IsShowLoading = true;
     this.HRNhanVienTapTinDinhKemService.GetByIDAsync().subscribe(
       res => {
         this.HRNhanVienTapTinDinhKemService.FormData = res as HRNhanVienTapTinDinhKem;
       },
       err => {
       },
       () => {
         this.HRNhanVienTapTinDinhKemService.IsShowLoading = false;
       }
     );
   }
   HRNhanVienTapTinDinhKemSave() {
     this.HRNhanVienTapTinDinhKemService.IsShowLoading = true;
     this.HRNhanVienTapTinDinhKemService.SaveAsync().subscribe(
       res => {
         this.HRNhanVienTapTinDinhKemService.FormData = res as HRNhanVienTapTinDinhKem;
         this.Router.navigateByUrl(environment.HRNhanVienTapTinDinhKemInfo + this.HRNhanVienTapTinDinhKemService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRNhanVienTapTinDinhKemService.IsShowLoading = false;
       }
     );
   }


 }
