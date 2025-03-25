import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSKetQua_XQ } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_XQ.model';
import { CLSKetQua_XQService } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_XQ.service';

@Component({
  selector: 'app-CLSKetQua_XQ',
  templateUrl: './CLSKetQua_XQ.component.html',
  styleUrls: ['./CLSKetQua_XQ.component.css']
})
export class CLSKetQua_XQComponent implements OnInit {

  @ViewChild('CLSKetQua_XQSort') CLSKetQua_XQSort: MatSort;
  @ViewChild('CLSKetQua_XQPaginator') CLSKetQua_XQPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSKetQua_XQService: CLSKetQua_XQService,
  ) { }

  ngOnInit(): void {
    this.CLSKetQua_XQSearch();
  }

  CLSKetQua_XQSearch() {
    this.CLSKetQua_XQService.SearchAll(this.CLSKetQua_XQSort, this.CLSKetQua_XQPaginator);
  }
  CLSKetQua_XQSave(element: CLSKetQua_XQ) {
    this.CLSKetQua_XQService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_XQService.ComponentSaveAll(this.CLSKetQua_XQSort, this.CLSKetQua_XQPaginator));
  }
  CLSKetQua_XQDelete(element: CLSKetQua_XQ) {
    this.CLSKetQua_XQService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_XQService.ComponentDeleteAll(this.CLSKetQua_XQSort, this.CLSKetQua_XQPaginator));
  }
}
