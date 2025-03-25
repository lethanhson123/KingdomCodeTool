import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_TraThuoc } from 'src/app/shared/eHospital_DongNai_A//NoiTru_TraThuoc.model';
import { NoiTru_TraThuocService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_TraThuoc.service';

@Component({
  selector: 'app-NoiTru_TraThuoc-info',
  templateUrl: './NoiTru_TraThuoc-info.component.html',
  styleUrls: ['./NoiTru_TraThuoc-info.component.css']
})
export class NoiTru_TraThuocInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_TraThuocService: NoiTru_TraThuocService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_TraThuocService.BaseParameter.NoiTru_TraThuoc_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_TraThuocSearch();
   }

   NoiTru_TraThuocSearch() {
     this.NoiTru_TraThuocService.IsShowLoading = true;
     this.NoiTru_TraThuocService.GetByNoiTru_TraThuoc_IdAsync().subscribe(
       res => {
         this.NoiTru_TraThuocService.FormData = res as NoiTru_TraThuoc;
       },
       err => {
       },
       () => {
         this.NoiTru_TraThuocService.IsShowLoading = false;
       }
     );
   }
   NoiTru_TraThuocSave() {
     this.NoiTru_TraThuocService.IsShowLoading = true;
     this.NoiTru_TraThuocService.SaveAsync().subscribe(
       res => {
         this.NoiTru_TraThuocService.FormData = res as NoiTru_TraThuoc;
         this.Router.navigateByUrl(environment.NoiTru_TraThuocInfo + this.NoiTru_TraThuocService.FormData.NoiTru_TraThuoc_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_TraThuocService.IsShowLoading = false;
       }
     );
   }


 }
