import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { DanhMucGiamTru } from 'src/app/shared//DanhMucGiamTru.model';
import { DanhMucGiamTruService } from 'src/app/shared//DanhMucGiamTru.service';

@Component({
  selector: 'app-DanhMucGiamTru-info',
  templateUrl: './DanhMucGiamTru-info.component.html',
  styleUrls: ['./DanhMucGiamTru-info.component.css']
})
export class DanhMucGiamTruInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public DanhMucGiamTruService: DanhMucGiamTruService,

   ) { }

   ngOnInit(): void {
     this.DanhMucGiamTruService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.DanhMucGiamTruSearch();
   }

   DanhMucGiamTruSearch() {
     this.DanhMucGiamTruService.IsShowLoading = true;
     this.DanhMucGiamTruService.GetByIDAsync().subscribe(
       res => {
         this.DanhMucGiamTruService.FormData = res as DanhMucGiamTru;
       },
       err => {
       },
       () => {
         this.DanhMucGiamTruService.IsShowLoading = false;
       }
     );
   }
   DanhMucGiamTruSave() {
     this.DanhMucGiamTruService.IsShowLoading = true;
     this.DanhMucGiamTruService.SaveAsync().subscribe(
       res => {
         this.DanhMucGiamTruService.FormData = res as DanhMucGiamTru;
         this.Router.navigateByUrl(environment.DanhMucGiamTruInfo + this.DanhMucGiamTruService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.DanhMucGiamTruService.IsShowLoading = false;
       }
     );
   }


 }
