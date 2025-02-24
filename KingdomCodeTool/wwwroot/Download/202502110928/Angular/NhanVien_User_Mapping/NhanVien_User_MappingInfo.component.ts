import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NhanVien_User_Mapping } from 'src/app/shared/eHospital_DongNai_A_Dictionary//NhanVien_User_Mapping.model';
import { NhanVien_User_MappingService } from 'src/app/shared/eHospital_DongNai_A_Dictionary//NhanVien_User_Mapping.service';

@Component({
  selector: 'app-NhanVien_User_Mapping-info',
  templateUrl: './NhanVien_User_Mapping-info.component.html',
  styleUrls: ['./NhanVien_User_Mapping-info.component.css']
})
export class NhanVien_User_MappingInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NhanVien_User_MappingService: NhanVien_User_MappingService,

   ) { }

   ngOnInit(): void {
     this.NhanVien_User_MappingService.BaseParameter.NhanVien_User_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NhanVien_User_MappingSearch();
   }

   NhanVien_User_MappingSearch() {
     this.NhanVien_User_MappingService.IsShowLoading = true;
     this.NhanVien_User_MappingService.GetByNhanVien_User_IdAsync().subscribe(
       res => {
         this.NhanVien_User_MappingService.FormData = res as NhanVien_User_Mapping;
       },
       err => {
       },
       () => {
         this.NhanVien_User_MappingService.IsShowLoading = false;
       }
     );
   }
   NhanVien_User_MappingSave() {
     this.NhanVien_User_MappingService.IsShowLoading = true;
     this.NhanVien_User_MappingService.SaveAsync().subscribe(
       res => {
         this.NhanVien_User_MappingService.FormData = res as NhanVien_User_Mapping;
         this.Router.navigateByUrl(environment.NhanVien_User_MappingInfo + this.NhanVien_User_MappingService.FormData.NhanVien_User_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NhanVien_User_MappingService.IsShowLoading = false;
       }
     );
   }


 }
