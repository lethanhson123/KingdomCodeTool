import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSKetQua } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua.model';
import { CLSKetQuaService } from 'src/app/shared/eHospital_DongNai_A//CLSKetQua.service';

@Component({
  selector: 'app-CLSKetQua-info',
  templateUrl: './CLSKetQua-info.component.html',
  styleUrls: ['./CLSKetQua-info.component.css']
})
export class CLSKetQuaInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSKetQuaService: CLSKetQuaService,

   ) { }

   ngOnInit(): void {
     this.CLSKetQuaService.BaseParameter.CLSKetQua_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSKetQuaSearch();
   }

   CLSKetQuaSearch() {
     this.CLSKetQuaService.IsShowLoading = true;
     this.CLSKetQuaService.GetByCLSKetQua_IdAsync().subscribe(
       res => {
         this.CLSKetQuaService.FormData = res as CLSKetQua;
       },
       err => {
       },
       () => {
         this.CLSKetQuaService.IsShowLoading = false;
       }
     );
   }
   CLSKetQuaSave() {
     this.CLSKetQuaService.IsShowLoading = true;
     this.CLSKetQuaService.SaveAsync().subscribe(
       res => {
         this.CLSKetQuaService.FormData = res as CLSKetQua;
         this.Router.navigateByUrl(environment.CLSKetQuaInfo + this.CLSKetQuaService.FormData.CLSKetQua_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSKetQuaService.IsShowLoading = false;
       }
     );
   }


 }
