import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { CLSKetQuaKhangSinhDo } from 'src/app/shared/eHospital_DongNai_A//CLSKetQuaKhangSinhDo.model';
import { CLSKetQuaKhangSinhDoService } from 'src/app/shared/eHospital_DongNai_A//CLSKetQuaKhangSinhDo.service';

@Component({
  selector: 'app-CLSKetQuaKhangSinhDo-info',
  templateUrl: './CLSKetQuaKhangSinhDo-info.component.html',
  styleUrls: ['./CLSKetQuaKhangSinhDo-info.component.css']
})
export class CLSKetQuaKhangSinhDoInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public CLSKetQuaKhangSinhDoService: CLSKetQuaKhangSinhDoService,

   ) { }

   ngOnInit(): void {
     this.CLSKetQuaKhangSinhDoService.BaseParameter.KetQuaKhangSinhDo_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.CLSKetQuaKhangSinhDoSearch();
   }

   CLSKetQuaKhangSinhDoSearch() {
     this.CLSKetQuaKhangSinhDoService.IsShowLoading = true;
     this.CLSKetQuaKhangSinhDoService.GetByKetQuaKhangSinhDo_IdAsync().subscribe(
       res => {
         this.CLSKetQuaKhangSinhDoService.FormData = res as CLSKetQuaKhangSinhDo;
       },
       err => {
       },
       () => {
         this.CLSKetQuaKhangSinhDoService.IsShowLoading = false;
       }
     );
   }
   CLSKetQuaKhangSinhDoSave() {
     this.CLSKetQuaKhangSinhDoService.IsShowLoading = true;
     this.CLSKetQuaKhangSinhDoService.SaveAsync().subscribe(
       res => {
         this.CLSKetQuaKhangSinhDoService.FormData = res as CLSKetQuaKhangSinhDo;
         this.Router.navigateByUrl(environment.CLSKetQuaKhangSinhDoInfo + this.CLSKetQuaKhangSinhDoService.FormData.KetQuaKhangSinhDo_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.CLSKetQuaKhangSinhDoService.IsShowLoading = false;
       }
     );
   }


 }
