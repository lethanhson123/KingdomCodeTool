import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_LuuTru } from 'src/app/shared/eHospital_DongNai_A//NoiTru_LuuTru.model';
import { NoiTru_LuuTruService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_LuuTru.service';

@Component({
  selector: 'app-NoiTru_LuuTru-info',
  templateUrl: './NoiTru_LuuTru-info.component.html',
  styleUrls: ['./NoiTru_LuuTru-info.component.css']
})
export class NoiTru_LuuTruInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_LuuTruService: NoiTru_LuuTruService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_LuuTruService.BaseParameter.LuuTru_Id = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_LuuTruSearch();
   }

   NoiTru_LuuTruSearch() {
     this.NoiTru_LuuTruService.IsShowLoading = true;
     this.NoiTru_LuuTruService.GetByLuuTru_IdAsync().subscribe(
       res => {
         this.NoiTru_LuuTruService.FormData = res as NoiTru_LuuTru;
       },
       err => {
       },
       () => {
         this.NoiTru_LuuTruService.IsShowLoading = false;
       }
     );
   }
   NoiTru_LuuTruSave() {
     this.NoiTru_LuuTruService.IsShowLoading = true;
     this.NoiTru_LuuTruService.SaveAsync().subscribe(
       res => {
         this.NoiTru_LuuTruService.FormData = res as NoiTru_LuuTru;
         this.Router.navigateByUrl(environment.NoiTru_LuuTruInfo + this.NoiTru_LuuTruService.FormData.LuuTru_Id);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_LuuTruService.IsShowLoading = false;
       }
     );
   }


 }
