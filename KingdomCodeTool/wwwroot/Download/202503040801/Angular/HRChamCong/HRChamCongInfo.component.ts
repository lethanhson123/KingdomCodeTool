import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRChamCong } from 'src/app/shared//HRChamCong.model';
import { HRChamCongService } from 'src/app/shared//HRChamCong.service';

@Component({
  selector: 'app-HRChamCong-info',
  templateUrl: './HRChamCong-info.component.html',
  styleUrls: ['./HRChamCong-info.component.css']
})
export class HRChamCongInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRChamCongService: HRChamCongService,

   ) { }

   ngOnInit(): void {
     this.HRChamCongService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRChamCongSearch();
   }

   HRChamCongSearch() {
     this.HRChamCongService.IsShowLoading = true;
     this.HRChamCongService.GetByIDAsync().subscribe(
       res => {
         this.HRChamCongService.FormData = res as HRChamCong;
       },
       err => {
       },
       () => {
         this.HRChamCongService.IsShowLoading = false;
       }
     );
   }
   HRChamCongSave() {
     this.HRChamCongService.IsShowLoading = true;
     this.HRChamCongService.SaveAsync().subscribe(
       res => {
         this.HRChamCongService.FormData = res as HRChamCong;
         this.Router.navigateByUrl(environment.HRChamCongInfo + this.HRChamCongService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRChamCongService.IsShowLoading = false;
       }
     );
   }


 }
