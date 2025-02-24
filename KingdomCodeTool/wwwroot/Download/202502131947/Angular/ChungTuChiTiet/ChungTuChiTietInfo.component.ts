import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { ChungTuChiTiet } from 'src/app/shared/eHospital_DongNai_A//ChungTuChiTiet.model';
import { ChungTuChiTietService } from 'src/app/shared/eHospital_DongNai_A//ChungTuChiTiet.service';

@Component({
  selector: 'app-ChungTuChiTiet-info',
  templateUrl: './ChungTuChiTiet-info.component.html',
  styleUrls: ['./ChungTuChiTiet-info.component.css']
})
export class ChungTuChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public ChungTuChiTietService: ChungTuChiTietService,

   ) { }

   ngOnInit(): void {
     this.ChungTuChiTietService.BaseParameter.ChungTuChiTiet_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.ChungTuChiTietSearch();
   }

   ChungTuChiTietSearch() {
     this.ChungTuChiTietService.IsShowLoading = true;
     this.ChungTuChiTietService.GetByChungTuChiTiet_IdAsync().subscribe(
       res => {
         this.ChungTuChiTietService.FormData = res as ChungTuChiTiet;
       },
       err => {
       },
       () => {
         this.ChungTuChiTietService.IsShowLoading = false;
       }
     );
   }
   ChungTuChiTietSave() {
     this.ChungTuChiTietService.IsShowLoading = true;
     this.ChungTuChiTietService.SaveAsync().subscribe(
       res => {
         this.ChungTuChiTietService.FormData = res as ChungTuChiTiet;
         this.Router.navigateByUrl(environment.ChungTuChiTietInfo + this.ChungTuChiTietService.FormData.ChungTuChiTiet_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.ChungTuChiTietService.IsShowLoading = false;
       }
     );
   }


 }
