import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Reports } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Reports.model';
import { Sys_ReportsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Reports.service';

@Component({
  selector: 'app-Sys_Reports',
  templateUrl: './Sys_Reports.component.html',
  styleUrls: ['./Sys_Reports.component.css']
})
export class Sys_ReportsComponent implements OnInit {

  @ViewChild('Sys_ReportsSort') Sys_ReportsSort: MatSort;
  @ViewChild('Sys_ReportsPaginator') Sys_ReportsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ReportsService: Sys_ReportsService,
  ) { }

  ngOnInit(): void {
    this.Sys_ReportsSearch();
  }

  Sys_ReportsSearch() {
    this.Sys_ReportsService.SearchAll(this.Sys_ReportsSort, this.Sys_ReportsPaginator);
  }
  Sys_ReportsSave(element: Sys_Reports) {
    this.Sys_ReportsService.FormData = element;
    this.NotificationService.warn(this.Sys_ReportsService.ComponentSaveAll(this.Sys_ReportsSort, this.Sys_ReportsPaginator));
  }
  Sys_ReportsDelete(element: Sys_Reports) {
    this.Sys_ReportsService.FormData = element;
    this.NotificationService.warn(this.Sys_ReportsService.ComponentDeleteAll(this.Sys_ReportsSort, this.Sys_ReportsPaginator));
  }
}
