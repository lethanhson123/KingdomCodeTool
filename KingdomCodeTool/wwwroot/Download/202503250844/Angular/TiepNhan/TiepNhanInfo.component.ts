import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { TiepNhan } from 'src/app/shared/eHospital_DongNai_A//TiepNhan.model';
import { TiepNhanService } from 'src/app/shared/eHospital_DongNai_A//TiepNhan.service';

@Component({
  selector: 'app-TiepNhan-info',
  templateUrl: './TiepNhan-info.component.html',
  styleUrls: ['./TiepNhan-info.component.css']
})
export class TiepNhanInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public TiepNhanService: TiepNhanService,

   ) { }

   ngOnInit(): void {
     this.TiepNhanService.BaseParameter.TiepNhan_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.TiepNhanSearch();
   }

   TiepNhanSearch() {
     this.TiepNhanService.IsShowLoading = true;
     this.TiepNhanService.GetByTiepNhan_IdAsync().subscribe(
       res => {
         this.TiepNhanService.FormData = res as TiepNhan;
       },
       err => {
       },
       () => {
         this.TiepNhanService.IsShowLoading = false;
       }
     );
   }
   TiepNhanSave() {
     this.TiepNhanService.IsShowLoading = true;
     this.TiepNhanService.SaveAsync().subscribe(
       res => {
         this.TiepNhanService.FormData = res as TiepNhan;
         this.Router.navigateByUrl(environment.TiepNhanInfo + this.TiepNhanService.FormData.TiepNhan_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.TiepNhanService.IsShowLoading = false;
       }
     );
   }


 }
