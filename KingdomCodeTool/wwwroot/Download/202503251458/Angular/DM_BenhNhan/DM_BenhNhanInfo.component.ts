import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DM_BenhNhan } from 'src/app/shared/eHospital_DongNai_A_Dictionary//DM_BenhNhan.model';
import { DM_BenhNhanService } from 'src/app/shared/eHospital_DongNai_A_Dictionary//DM_BenhNhan.service';

@Component({
  selector: 'app-DM_BenhNhan-info',
  templateUrl: './DM_BenhNhan-info.component.html',
  styleUrls: ['./DM_BenhNhan-info.component.css']
})
export class DM_BenhNhanInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DM_BenhNhanService: DM_BenhNhanService,

   ) { }

   ngOnInit(): void {
     this.DM_BenhNhanService.BaseParameter.BenhNhan_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.DM_BenhNhanSearch();
   }

   DM_BenhNhanSearch() {
     this.DM_BenhNhanService.IsShowLoading = true;
     this.DM_BenhNhanService.GetByBenhNhan_IdAsync().subscribe(
       res => {
         this.DM_BenhNhanService.FormData = res as DM_BenhNhan;
       },
       err => {
       },
       () => {
         this.DM_BenhNhanService.IsShowLoading = false;
       }
     );
   }
   DM_BenhNhanSave() {
     this.DM_BenhNhanService.IsShowLoading = true;
     this.DM_BenhNhanService.SaveAsync().subscribe(
       res => {
         this.DM_BenhNhanService.FormData = res as DM_BenhNhan;
         this.Router.navigateByUrl(environment.DM_BenhNhanInfo + this.DM_BenhNhanService.FormData.BenhNhan_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DM_BenhNhanService.IsShowLoading = false;
       }
     );
   }


 }
