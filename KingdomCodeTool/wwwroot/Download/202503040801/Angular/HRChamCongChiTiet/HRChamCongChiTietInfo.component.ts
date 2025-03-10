import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRChamCongChiTiet } from 'src/app/shared//HRChamCongChiTiet.model';
import { HRChamCongChiTietService } from 'src/app/shared//HRChamCongChiTiet.service';

@Component({
  selector: 'app-HRChamCongChiTiet-info',
  templateUrl: './HRChamCongChiTiet-info.component.html',
  styleUrls: ['./HRChamCongChiTiet-info.component.css']
})
export class HRChamCongChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRChamCongChiTietService: HRChamCongChiTietService,

   ) { }

   ngOnInit(): void {
     this.HRChamCongChiTietService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRChamCongChiTietSearch();
   }

   HRChamCongChiTietSearch() {
     this.HRChamCongChiTietService.IsShowLoading = true;
     this.HRChamCongChiTietService.GetByIDAsync().subscribe(
       res => {
         this.HRChamCongChiTietService.FormData = res as HRChamCongChiTiet;
       },
       err => {
       },
       () => {
         this.HRChamCongChiTietService.IsShowLoading = false;
       }
     );
   }
   HRChamCongChiTietSave() {
     this.HRChamCongChiTietService.IsShowLoading = true;
     this.HRChamCongChiTietService.SaveAsync().subscribe(
       res => {
         this.HRChamCongChiTietService.FormData = res as HRChamCongChiTiet;
         this.Router.navigateByUrl(environment.HRChamCongChiTietInfo + this.HRChamCongChiTietService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRChamCongChiTietService.IsShowLoading = false;
       }
     );
   }


 }
