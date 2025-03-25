import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_ToaThuoc } from 'src/app/shared/eHospital_DongNai_A//NoiTru_ToaThuoc.model';
import { NoiTru_ToaThuocService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_ToaThuoc.service';

@Component({
  selector: 'app-NoiTru_ToaThuoc-info',
  templateUrl: './NoiTru_ToaThuoc-info.component.html',
  styleUrls: ['./NoiTru_ToaThuoc-info.component.css']
})
export class NoiTru_ToaThuocInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_ToaThuocService: NoiTru_ToaThuocService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_ToaThuocService.BaseParameter.ToaThuoc_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_ToaThuocSearch();
   }

   NoiTru_ToaThuocSearch() {
     this.NoiTru_ToaThuocService.IsShowLoading = true;
     this.NoiTru_ToaThuocService.GetByToaThuoc_IdAsync().subscribe(
       res => {
         this.NoiTru_ToaThuocService.FormData = res as NoiTru_ToaThuoc;
       },
       err => {
       },
       () => {
         this.NoiTru_ToaThuocService.IsShowLoading = false;
       }
     );
   }
   NoiTru_ToaThuocSave() {
     this.NoiTru_ToaThuocService.IsShowLoading = true;
     this.NoiTru_ToaThuocService.SaveAsync().subscribe(
       res => {
         this.NoiTru_ToaThuocService.FormData = res as NoiTru_ToaThuoc;
         this.Router.navigateByUrl(environment.NoiTru_ToaThuocInfo + this.NoiTru_ToaThuocService.FormData.ToaThuoc_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_ToaThuocService.IsShowLoading = false;
       }
     );
   }


 }
