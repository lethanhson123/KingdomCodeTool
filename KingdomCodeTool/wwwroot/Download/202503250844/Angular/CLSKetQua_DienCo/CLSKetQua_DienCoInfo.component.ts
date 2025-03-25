import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSKetQua_DienCo } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_DienCo.model';
import { CLSKetQua_DienCoService } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua_DienCo.service';

@Component({
  selector: 'app-CLSKetQua_DienCo-info',
  templateUrl: './CLSKetQua_DienCo-info.component.html',
  styleUrls: ['./CLSKetQua_DienCo-info.component.css']
})
export class CLSKetQua_DienCoInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSKetQua_DienCoService: CLSKetQua_DienCoService,

   ) { }

   ngOnInit(): void {
     this.CLSKetQua_DienCoService.BaseParameter.CLSKetQua_DienCo_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSKetQua_DienCoSearch();
   }

   CLSKetQua_DienCoSearch() {
     this.CLSKetQua_DienCoService.IsShowLoading = true;
     this.CLSKetQua_DienCoService.GetByCLSKetQua_DienCo_IdAsync().subscribe(
       res => {
         this.CLSKetQua_DienCoService.FormData = res as CLSKetQua_DienCo;
       },
       err => {
       },
       () => {
         this.CLSKetQua_DienCoService.IsShowLoading = false;
       }
     );
   }
   CLSKetQua_DienCoSave() {
     this.CLSKetQua_DienCoService.IsShowLoading = true;
     this.CLSKetQua_DienCoService.SaveAsync().subscribe(
       res => {
         this.CLSKetQua_DienCoService.FormData = res as CLSKetQua_DienCo;
         this.Router.navigateByUrl(environment.CLSKetQua_DienCoInfo + this.CLSKetQua_DienCoService.FormData.CLSKetQua_DienCo_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSKetQua_DienCoService.IsShowLoading = false;
       }
     );
   }


 }
