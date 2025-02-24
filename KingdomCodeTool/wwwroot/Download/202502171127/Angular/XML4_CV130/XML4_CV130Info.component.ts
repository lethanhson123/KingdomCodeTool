import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { XML4_CV130 } from 'src/app/shared/eHospital_DongNai_A//XML4_CV130.model';
import { XML4_CV130Service } from 'src/app/shared/eHospital_DongNai_A//XML4_CV130.service';

@Component({
  selector: 'app-XML4_CV130-info',
  templateUrl: './XML4_CV130-info.component.html',
  styleUrls: ['./XML4_CV130-info.component.css']
})
export class XML4_CV130InfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public XML4_CV130Service: XML4_CV130Service,

   ) { }

   ngOnInit(): void {
     this.XML4_CV130Service.BaseParameter.XML4_CV130_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.XML4_CV130Search();
   }

   XML4_CV130Search() {
     this.XML4_CV130Service.IsShowLoading = true;
     this.XML4_CV130Service.GetByXML4_CV130_IdAsync().subscribe(
       res => {
         this.XML4_CV130Service.FormData = res as XML4_CV130;
       },
       err => {
       },
       () => {
         this.XML4_CV130Service.IsShowLoading = false;
       }
     );
   }
   XML4_CV130Save() {
     this.XML4_CV130Service.IsShowLoading = true;
     this.XML4_CV130Service.SaveAsync().subscribe(
       res => {
         this.XML4_CV130Service.FormData = res as XML4_CV130;
         this.Router.navigateByUrl(environment.XML4_CV130Info + this.XML4_CV130Service.FormData.XML4_CV130_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.XML4_CV130Service.IsShowLoading = false;
       }
     );
   }


 }
