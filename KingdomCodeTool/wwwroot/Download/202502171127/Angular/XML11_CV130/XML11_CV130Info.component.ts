import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { XML11_CV130 } from 'src/app/shared/eHospital_DongNai_A//XML11_CV130.model';
import { XML11_CV130Service } from 'src/app/shared/eHospital_DongNai_A//XML11_CV130.service';

@Component({
  selector: 'app-XML11_CV130-info',
  templateUrl: './XML11_CV130-info.component.html',
  styleUrls: ['./XML11_CV130-info.component.css']
})
export class XML11_CV130InfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public XML11_CV130Service: XML11_CV130Service,

   ) { }

   ngOnInit(): void {
     this.XML11_CV130Service.BaseParameter.XML11_CV130_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.XML11_CV130Search();
   }

   XML11_CV130Search() {
     this.XML11_CV130Service.IsShowLoading = true;
     this.XML11_CV130Service.GetByXML11_CV130_IdAsync().subscribe(
       res => {
         this.XML11_CV130Service.FormData = res as XML11_CV130;
       },
       err => {
       },
       () => {
         this.XML11_CV130Service.IsShowLoading = false;
       }
     );
   }
   XML11_CV130Save() {
     this.XML11_CV130Service.IsShowLoading = true;
     this.XML11_CV130Service.SaveAsync().subscribe(
       res => {
         this.XML11_CV130Service.FormData = res as XML11_CV130;
         this.Router.navigateByUrl(environment.XML11_CV130Info + this.XML11_CV130Service.FormData.XML11_CV130_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.XML11_CV130Service.IsShowLoading = false;
       }
     );
   }


 }
