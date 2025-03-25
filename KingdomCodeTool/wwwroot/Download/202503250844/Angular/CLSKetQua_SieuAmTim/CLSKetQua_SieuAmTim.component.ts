import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSKetQua_SieuAmTim } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_SieuAmTim.model';
import { CLSKetQua_SieuAmTimService } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_SieuAmTim.service';

@Component({
  selector: 'app-CLSKetQua_SieuAmTim',
  templateUrl: './CLSKetQua_SieuAmTim.component.html',
  styleUrls: ['./CLSKetQua_SieuAmTim.component.css']
})
export class CLSKetQua_SieuAmTimComponent implements OnInit {

  @ViewChild('CLSKetQua_SieuAmTimSort') CLSKetQua_SieuAmTimSort: MatSort;
  @ViewChild('CLSKetQua_SieuAmTimPaginator') CLSKetQua_SieuAmTimPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSKetQua_SieuAmTimService: CLSKetQua_SieuAmTimService,
  ) { }

  ngOnInit(): void {
    this.CLSKetQua_SieuAmTimSearch();
  }

  CLSKetQua_SieuAmTimSearch() {
    this.CLSKetQua_SieuAmTimService.SearchAll(this.CLSKetQua_SieuAmTimSort, this.CLSKetQua_SieuAmTimPaginator);
  }
  CLSKetQua_SieuAmTimSave(element: CLSKetQua_SieuAmTim) {
    this.CLSKetQua_SieuAmTimService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_SieuAmTimService.ComponentSaveAll(this.CLSKetQua_SieuAmTimSort, this.CLSKetQua_SieuAmTimPaginator));
  }
  CLSKetQua_SieuAmTimDelete(element: CLSKetQua_SieuAmTim) {
    this.CLSKetQua_SieuAmTimService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_SieuAmTimService.ComponentDeleteAll(this.CLSKetQua_SieuAmTimSort, this.CLSKetQua_SieuAmTimPaginator));
  }
}
