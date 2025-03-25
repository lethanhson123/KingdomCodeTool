import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSYeuCau_QMS } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau_QMS.model';
import { CLSYeuCau_QMSService } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau_QMS.service';

@Component({
  selector: 'app-CLSYeuCau_QMS',
  templateUrl: './CLSYeuCau_QMS.component.html',
  styleUrls: ['./CLSYeuCau_QMS.component.css']
})
export class CLSYeuCau_QMSComponent implements OnInit {

  @ViewChild('CLSYeuCau_QMSSort') CLSYeuCau_QMSSort: MatSort;
  @ViewChild('CLSYeuCau_QMSPaginator') CLSYeuCau_QMSPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSYeuCau_QMSService: CLSYeuCau_QMSService,
  ) { }

  ngOnInit(): void {
    this.CLSYeuCau_QMSSearch();
  }

  CLSYeuCau_QMSSearch() {
    this.CLSYeuCau_QMSService.SearchAll(this.CLSYeuCau_QMSSort, this.CLSYeuCau_QMSPaginator);
  }
  CLSYeuCau_QMSSave(element: CLSYeuCau_QMS) {
    this.CLSYeuCau_QMSService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCau_QMSService.ComponentSaveAll(this.CLSYeuCau_QMSSort, this.CLSYeuCau_QMSPaginator));
  }
  CLSYeuCau_QMSDelete(element: CLSYeuCau_QMS) {
    this.CLSYeuCau_QMSService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCau_QMSService.ComponentDeleteAll(this.CLSYeuCau_QMSSort, this.CLSYeuCau_QMSPaginator));
  }
}
