import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { ToaThuoc } from 'src/app/shared/eHospital_DongNai_A//ToaThuoc.model';
import { ToaThuocService } from 'src/app/shared/eHospital_DongNai_A//ToaThuoc.service';

@Component({
  selector: 'app-ToaThuoc-info',
  templateUrl: './ToaThuoc-info.component.html',
  styleUrls: ['./ToaThuoc-info.component.css']
})
export class ToaThuocInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public ToaThuocService: ToaThuocService,

   ) { }

   ngOnInit(): void {
     this.ToaThuocService.BaseParameter.ToaThuoc_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.ToaThuocSearch();
   }

   ToaThuocSearch() {
     this.ToaThuocService.IsShowLoading = true;
     this.ToaThuocService.GetByToaThuoc_IdAsync().subscribe(
       res => {
         this.ToaThuocService.FormData = res as ToaThuoc;
       },
       err => {
       },
       () => {
         this.ToaThuocService.IsShowLoading = false;
       }
     );
   }
   ToaThuocSave() {
     this.ToaThuocService.IsShowLoading = true;
     this.ToaThuocService.SaveAsync().subscribe(
       res => {
         this.ToaThuocService.FormData = res as ToaThuoc;
         this.Router.navigateByUrl(environment.ToaThuocInfo + this.ToaThuocService.FormData.ToaThuoc_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.ToaThuocService.IsShowLoading = false;
       }
     );
   }


 }
