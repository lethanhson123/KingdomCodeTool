import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucMayChamCong } from 'src/app/shared//DanhMucMayChamCong.model';
import { DanhMucMayChamCongService } from 'src/app/shared//DanhMucMayChamCong.service';

@Component({
  selector: 'app-DanhMucMayChamCong-info',
  templateUrl: './DanhMucMayChamCong-info.component.html',
  styleUrls: ['./DanhMucMayChamCong-info.component.css']
})
export class DanhMucMayChamCongInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucMayChamCongService: DanhMucMayChamCongService,

   ) { }

   ngOnInit(): void {
     this.DanhMucMayChamCongService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucMayChamCongSearch();
   }

   DanhMucMayChamCongSearch() {
     this.DanhMucMayChamCongService.IsShowLoading = true;
     this.DanhMucMayChamCongService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucMayChamCongService.FormData = res as DanhMucMayChamCong;
       },
       err => {
       },
       () => {
         this.DanhMucMayChamCongService.IsShowLoading = false;
       }
     );
   }
   DanhMucMayChamCongSave() {
     this.DanhMucMayChamCongService.IsShowLoading = true;
     this.DanhMucMayChamCongService.SaveAsync().subscribe(
       res => {
         this.DanhMucMayChamCongService.FormData = res as DanhMucMayChamCong;
         this.Router.navigateByUrl(environment.DanhMucMayChamCongInfo + this.DanhMucMayChamCongService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucMayChamCongService.IsShowLoading = false;
       }
     );
   }


 }
