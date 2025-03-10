import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { HRLichCongTac } from 'src/app/shared//HRLichCongTac.model';
import { HRLichCongTacService } from 'src/app/shared//HRLichCongTac.service';

@Component({
  selector: 'app-HRLichCongTac-info',
  templateUrl: './HRLichCongTac-info.component.html',
  styleUrls: ['./HRLichCongTac-info.component.css']
})
export class HRLichCongTacInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public HRLichCongTacService: HRLichCongTacService,

   ) { }

   ngOnInit(): void {
     this.HRLichCongTacService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.HRLichCongTacSearch();
   }

   HRLichCongTacSearch() {
     this.HRLichCongTacService.IsShowLoading = true;
     this.HRLichCongTacService.GetByIDAsync().subscribe(
       res => {
         this.HRLichCongTacService.FormData = res as HRLichCongTac;
       },
       err => {
       },
       () => {
         this.HRLichCongTacService.IsShowLoading = false;
       }
     );
   }
   HRLichCongTacSave() {
     this.HRLichCongTacService.IsShowLoading = true;
     this.HRLichCongTacService.SaveAsync().subscribe(
       res => {
         this.HRLichCongTacService.FormData = res as HRLichCongTac;
         this.Router.navigateByUrl(environment.HRLichCongTacInfo + this.HRLichCongTacService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.HRLichCongTacService.IsShowLoading = false;
       }
     );
   }


 }
