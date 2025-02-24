import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { XML3_CV130 } from 'src/app/shared/eHospital_DongNai_A//XML3_CV130.model';
import { XML3_CV130Service } from 'src/app/shared/eHospital_DongNai_A//XML3_CV130.service';

@Component({
  selector: 'app-XML3_CV130-info',
  templateUrl: './XML3_CV130-info.component.html',
  styleUrls: ['./XML3_CV130-info.component.css']
})
export class XML3_CV130InfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public XML3_CV130Service: XML3_CV130Service,

   ) { }

   ngOnInit(): void {
     this.XML3_CV130Service.BaseParameter.XML3_CV130_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.XML3_CV130Search();
   }

   XML3_CV130Search() {
     this.XML3_CV130Service.IsShowLoading = true;
     this.XML3_CV130Service.GetByXML3_CV130_IdAsync().subscribe(
       res => {
         this.XML3_CV130Service.FormData = res as XML3_CV130;
       },
       err => {
       },
       () => {
         this.XML3_CV130Service.IsShowLoading = false;
       }
     );
   }
   XML3_CV130Save() {
     this.XML3_CV130Service.IsShowLoading = true;
     this.XML3_CV130Service.SaveAsync().subscribe(
       res => {
         this.XML3_CV130Service.FormData = res as XML3_CV130;
         this.Router.navigateByUrl(environment.XML3_CV130Info + this.XML3_CV130Service.FormData.XML3_CV130_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.XML3_CV130Service.IsShowLoading = false;
       }
     );
   }


 }
