import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HoaDon } from 'src/app/shared/eHospital_DongNai_A//HoaDon.model';
import { HoaDonService } from 'src/app/shared/eHospital_DongNai_A//HoaDon.service';

@Component({
  selector: 'app-HoaDon-info',
  templateUrl: './HoaDon-info.component.html',
  styleUrls: ['./HoaDon-info.component.css']
})
export class HoaDonInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HoaDonService: HoaDonService,

   ) { }

   ngOnInit(): void {
     this.HoaDonService.BaseParameter.HoaDon_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.HoaDonSearch();
   }

   HoaDonSearch() {
     this.HoaDonService.IsShowLoading = true;
     this.HoaDonService.GetByHoaDon_IdAsync().subscribe(
       res => {
         this.HoaDonService.FormData = res as HoaDon;
       },
       err => {
       },
       () => {
         this.HoaDonService.IsShowLoading = false;
       }
     );
   }
   HoaDonSave() {
     this.HoaDonService.IsShowLoading = true;
     this.HoaDonService.SaveAsync().subscribe(
       res => {
         this.HoaDonService.FormData = res as HoaDon;
         this.Router.navigateByUrl(environment.HoaDonInfo + this.HoaDonService.FormData.HoaDon_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HoaDonService.IsShowLoading = false;
       }
     );
   }


 }
