import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSKetQua_Images } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_Images.model';
import { CLSKetQua_ImagesService } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_Images.service';

@Component({
  selector: 'app-CLSKetQua_Images-info',
  templateUrl: './CLSKetQua_Images-info.component.html',
  styleUrls: ['./CLSKetQua_Images-info.component.css']
})
export class CLSKetQua_ImagesInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSKetQua_ImagesService: CLSKetQua_ImagesService,

   ) { }

   ngOnInit(): void {
     this.CLSKetQua_ImagesService.BaseParameter.Images_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSKetQua_ImagesSearch();
   }

   CLSKetQua_ImagesSearch() {
     this.CLSKetQua_ImagesService.IsShowLoading = true;
     this.CLSKetQua_ImagesService.GetByImages_IdAsync().subscribe(
       res => {
         this.CLSKetQua_ImagesService.FormData = res as CLSKetQua_Images;
       },
       err => {
       },
       () => {
         this.CLSKetQua_ImagesService.IsShowLoading = false;
       }
     );
   }
   CLSKetQua_ImagesSave() {
     this.CLSKetQua_ImagesService.IsShowLoading = true;
     this.CLSKetQua_ImagesService.SaveAsync().subscribe(
       res => {
         this.CLSKetQua_ImagesService.FormData = res as CLSKetQua_Images;
         this.Router.navigateByUrl(environment.CLSKetQua_ImagesInfo + this.CLSKetQua_ImagesService.FormData.Images_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSKetQua_ImagesService.IsShowLoading = false;
       }
     );
   }


 }
