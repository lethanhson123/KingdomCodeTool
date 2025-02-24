import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { XML7_CV130 } from 'src/app/shared/eHospital_DongNai_A//XML7_CV130.model';
import { XML7_CV130Service } from 'src/app/shared/eHospital_DongNai_A//XML7_CV130.service';

@Component({
  selector: 'app-XML7_CV130-info',
  templateUrl: './XML7_CV130-info.component.html',
  styleUrls: ['./XML7_CV130-info.component.css']
})
export class XML7_CV130InfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public XML7_CV130Service: XML7_CV130Service,

   ) { }

   ngOnInit(): void {
     this.XML7_CV130Service.BaseParameter.XML7_CV130_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.XML7_CV130Search();
   }

   XML7_CV130Search() {
     this.XML7_CV130Service.IsShowLoading = true;
     this.XML7_CV130Service.GetByXML7_CV130_IdAsync().subscribe(
       res => {
         this.XML7_CV130Service.FormData = res as XML7_CV130;
       },
       err => {
       },
       () => {
         this.XML7_CV130Service.IsShowLoading = false;
       }
     );
   }
   XML7_CV130Save() {
     this.XML7_CV130Service.IsShowLoading = true;
     this.XML7_CV130Service.SaveAsync().subscribe(
       res => {
         this.XML7_CV130Service.FormData = res as XML7_CV130;
         this.Router.navigateByUrl(environment.XML7_CV130Info + this.XML7_CV130Service.FormData.XML7_CV130_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.XML7_CV130Service.IsShowLoading = false;
       }
     );
   }


 }
