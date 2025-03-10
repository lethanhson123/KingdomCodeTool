import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucChamCong } from 'src/app/shared//DanhMucChamCong.model';
import { DanhMucChamCongService } from 'src/app/shared//DanhMucChamCong.service';

@Component({
  selector: 'app-DanhMucChamCong-info',
  templateUrl: './DanhMucChamCong-info.component.html',
  styleUrls: ['./DanhMucChamCong-info.component.css']
})
export class DanhMucChamCongInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucChamCongService: DanhMucChamCongService,

   ) { }

   ngOnInit(): void {
     this.DanhMucChamCongService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucChamCongSearch();
   }

   DanhMucChamCongSearch() {
     this.DanhMucChamCongService.IsShowLoading = true;
     this.DanhMucChamCongService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucChamCongService.FormData = res as DanhMucChamCong;
       },
       err => {
       },
       () => {
         this.DanhMucChamCongService.IsShowLoading = false;
       }
     );
   }
   DanhMucChamCongSave() {
     this.DanhMucChamCongService.IsShowLoading = true;
     this.DanhMucChamCongService.SaveAsync().subscribe(
       res => {
         this.DanhMucChamCongService.FormData = res as DanhMucChamCong;
         this.Router.navigateByUrl(environment.DanhMucChamCongInfo + this.DanhMucChamCongService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucChamCongService.IsShowLoading = false;
       }
     );
   }


 }
