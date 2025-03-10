import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { ThongKeChiTiet } from 'src/app/shared//ThongKeChiTiet.model';
import { ThongKeChiTietService } from 'src/app/shared//ThongKeChiTiet.service';

@Component({
  selector: 'app-ThongKeChiTiet-info',
  templateUrl: './ThongKeChiTiet-info.component.html',
  styleUrls: ['./ThongKeChiTiet-info.component.css']
})
export class ThongKeChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public ThongKeChiTietService: ThongKeChiTietService,

   ) { }

   ngOnInit(): void {
     this.ThongKeChiTietService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.ThongKeChiTietSearch();
   }

   ThongKeChiTietSearch() {
     this.ThongKeChiTietService.IsShowLoading = true;
     this.ThongKeChiTietService.GetByIDAsync().subscribe(
       res => {
         this.ThongKeChiTietService.FormData = res as ThongKeChiTiet;
       },
       err => {
       },
       () => {
         this.ThongKeChiTietService.IsShowLoading = false;
       }
     );
   }
   ThongKeChiTietSave() {
     this.ThongKeChiTietService.IsShowLoading = true;
     this.ThongKeChiTietService.SaveAsync().subscribe(
       res => {
         this.ThongKeChiTietService.FormData = res as ThongKeChiTiet;
         this.Router.navigateByUrl(environment.ThongKeChiTietInfo + this.ThongKeChiTietService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.ThongKeChiTietService.IsShowLoading = false;
       }
     );
   }


 }
