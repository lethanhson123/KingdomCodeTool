import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { ThongKe } from 'src/app/shared//ThongKe.model';
import { ThongKeService } from 'src/app/shared//ThongKe.service';

@Component({
  selector: 'app-ThongKe-info',
  templateUrl: './ThongKe-info.component.html',
  styleUrls: ['./ThongKe-info.component.css']
})
export class ThongKeInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public ThongKeService: ThongKeService,

   ) { }

   ngOnInit(): void {
     this.ThongKeService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.ThongKeSearch();
   }

   ThongKeSearch() {
     this.ThongKeService.IsShowLoading = true;
     this.ThongKeService.GetByIDAsync().subscribe(
       res => {
         this.ThongKeService.FormData = res as ThongKe;
       },
       err => {
       },
       () => {
         this.ThongKeService.IsShowLoading = false;
       }
     );
   }
   ThongKeSave() {
     this.ThongKeService.IsShowLoading = true;
     this.ThongKeService.SaveAsync().subscribe(
       res => {
         this.ThongKeService.FormData = res as ThongKe;
         this.Router.navigateByUrl(environment.ThongKeInfo + this.ThongKeService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.ThongKeService.IsShowLoading = false;
       }
     );
   }


 }
