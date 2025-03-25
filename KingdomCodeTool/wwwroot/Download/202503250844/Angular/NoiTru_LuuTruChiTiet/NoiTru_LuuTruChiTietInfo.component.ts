import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_LuuTruChiTiet } from 'src/app/shared/eHospital_DongNai_A//NoiTru_LuuTruChiTiet.model';
import { NoiTru_LuuTruChiTietService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_LuuTruChiTiet.service';

@Component({
  selector: 'app-NoiTru_LuuTruChiTiet-info',
  templateUrl: './NoiTru_LuuTruChiTiet-info.component.html',
  styleUrls: ['./NoiTru_LuuTruChiTiet-info.component.css']
})
export class NoiTru_LuuTruChiTietInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_LuuTruChiTietService: NoiTru_LuuTruChiTietService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_LuuTruChiTietService.BaseParameter.LuuTruChiTiet_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_LuuTruChiTietSearch();
   }

   NoiTru_LuuTruChiTietSearch() {
     this.NoiTru_LuuTruChiTietService.IsShowLoading = true;
     this.NoiTru_LuuTruChiTietService.GetByLuuTruChiTiet_IdAsync().subscribe(
       res => {
         this.NoiTru_LuuTruChiTietService.FormData = res as NoiTru_LuuTruChiTiet;
       },
       err => {
       },
       () => {
         this.NoiTru_LuuTruChiTietService.IsShowLoading = false;
       }
     );
   }
   NoiTru_LuuTruChiTietSave() {
     this.NoiTru_LuuTruChiTietService.IsShowLoading = true;
     this.NoiTru_LuuTruChiTietService.SaveAsync().subscribe(
       res => {
         this.NoiTru_LuuTruChiTietService.FormData = res as NoiTru_LuuTruChiTiet;
         this.Router.navigateByUrl(environment.NoiTru_LuuTruChiTietInfo + this.NoiTru_LuuTruChiTietService.FormData.LuuTruChiTiet_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_LuuTruChiTietService.IsShowLoading = false;
       }
     );
   }


 }
