import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';



import { NoiTru_LuuTru_Trace } from 'src/app/shared/eHospital_DongNai_A//NoiTru_LuuTru_Trace.model';
import { NoiTru_LuuTru_TraceService } from 'src/app/shared/eHospital_DongNai_A//NoiTru_LuuTru_Trace.service';

@Component({
  selector: 'app-NoiTru_LuuTru_Trace-info',
  templateUrl: './NoiTru_LuuTru_Trace-info.component.html',
  styleUrls: ['./NoiTru_LuuTru_Trace-info.component.css']
})
export class NoiTru_LuuTru_TraceInfoComponent implements OnInit {

  constructor(
     public ActiveRouter: ActivatedRoute,
     public Router: Router,
     public NotificationService: NotificationService,
     public DownloadService: DownloadService,

     public NoiTru_LuuTru_TraceService: NoiTru_LuuTru_TraceService,

   ) { }

   ngOnInit(): void {
     this.NoiTru_LuuTru_TraceService.BaseParameter.ID = Number(this.ActiveRouter.snapshot.params.ID);
     this.NoiTru_LuuTru_TraceSearch();
   }

   NoiTru_LuuTru_TraceSearch() {
     this.NoiTru_LuuTru_TraceService.IsShowLoading = true;
     this.NoiTru_LuuTru_TraceService.GetByIDAsync().subscribe(
       res => {
         this.NoiTru_LuuTru_TraceService.FormData = res as NoiTru_LuuTru_Trace;
       },
       err => {
       },
       () => {
         this.NoiTru_LuuTru_TraceService.IsShowLoading = false;
       }
     );
   }
   NoiTru_LuuTru_TraceSave() {
     this.NoiTru_LuuTru_TraceService.IsShowLoading = true;
     this.NoiTru_LuuTru_TraceService.SaveAsync().subscribe(
       res => {
         this.NoiTru_LuuTru_TraceService.FormData = res as NoiTru_LuuTru_Trace;
         this.Router.navigateByUrl(environment.NoiTru_LuuTru_TraceInfo + this.NoiTru_LuuTru_TraceService.FormData.ID);
         this.NotificationService.warn(environment.SaveSuccess);
       },
       err => {
         this.NotificationService.warn(environment.SaveNotSuccess);
       },
       () => {
         this.NoiTru_LuuTru_TraceService.IsShowLoading = false;
       }
     );
   }


 }
