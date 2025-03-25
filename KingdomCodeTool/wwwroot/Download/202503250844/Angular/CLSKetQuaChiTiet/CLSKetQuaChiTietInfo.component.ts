import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSKetQuaChiTiet } from 'src/app/shared/eHospital_DongNai_A//CLSKetQuaChiTiet.model';
import { CLSKetQuaChiTietService } from 'src/app/shared/eHospital_DongNai_A//CLSKetQuaChiTiet.service';

@Component({
  selector: 'app-CLSKetQuaChiTiet-info',
  templateUrl: './CLSKetQuaChiTiet-info.component.html',
  styleUrls: ['./CLSKetQuaChiTiet-info.component.css']
})
export class CLSKetQuaChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSKetQuaChiTietService: CLSKetQuaChiTietService,

   ) { }

   ngOnInit(): void {
     this.CLSKetQuaChiTietService.BaseParameter.CLSKetQuaChiTiet_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSKetQuaChiTietSearch();
   }

   CLSKetQuaChiTietSearch() {
     this.CLSKetQuaChiTietService.IsShowLoading = true;
     this.CLSKetQuaChiTietService.GetByCLSKetQuaChiTiet_IdAsync().subscribe(
       res => {
         this.CLSKetQuaChiTietService.FormData = res as CLSKetQuaChiTiet;
       },
       err => {
       },
       () => {
         this.CLSKetQuaChiTietService.IsShowLoading = false;
       }
     );
   }
   CLSKetQuaChiTietSave() {
     this.CLSKetQuaChiTietService.IsShowLoading = true;
     this.CLSKetQuaChiTietService.SaveAsync().subscribe(
       res => {
         this.CLSKetQuaChiTietService.FormData = res as CLSKetQuaChiTiet;
         this.Router.navigateByUrl(environment.CLSKetQuaChiTietInfo + this.CLSKetQuaChiTietService.FormData.CLSKetQuaChiTiet_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSKetQuaChiTietService.IsShowLoading = false;
       }
     );
   }


 }
