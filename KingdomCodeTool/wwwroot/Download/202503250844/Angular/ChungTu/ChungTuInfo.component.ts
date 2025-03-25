import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { ChungTu } from 'src/app/shared/eHospital_DongNai_A//ChungTu.model';
import { ChungTuService } from 'src/app/shared/eHospital_DongNai_A//ChungTu.service';

@Component({
  selector: 'app-ChungTu-info',
  templateUrl: './ChungTu-info.component.html',
  styleUrls: ['./ChungTu-info.component.css']
})
export class ChungTuInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public ChungTuService: ChungTuService,

   ) { }

   ngOnInit(): void {
     this.ChungTuService.BaseParameter.ChungTu_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.ChungTuSearch();
   }

   ChungTuSearch() {
     this.ChungTuService.IsShowLoading = true;
     this.ChungTuService.GetByChungTu_IdAsync().subscribe(
       res => {
         this.ChungTuService.FormData = res as ChungTu;
       },
       err => {
       },
       () => {
         this.ChungTuService.IsShowLoading = false;
       }
     );
   }
   ChungTuSave() {
     this.ChungTuService.IsShowLoading = true;
     this.ChungTuService.SaveAsync().subscribe(
       res => {
         this.ChungTuService.FormData = res as ChungTu;
         this.Router.navigateByUrl(environment.ChungTuInfo + this.ChungTuService.FormData.ChungTu_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.ChungTuService.IsShowLoading = false;
       }
     );
   }


 }
