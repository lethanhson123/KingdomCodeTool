import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_ReportDetails } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_ReportDetails.model';
import { Sys_ReportDetailsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_ReportDetails.service';

@Component({
  selector: 'app-Sys_ReportDetails',
  templateUrl: './Sys_ReportDetails.component.html',
  styleUrls: ['./Sys_ReportDetails.component.css']
})
export class Sys_ReportDetailsComponent implements OnInit {

  @ViewChild('Sys_ReportDetailsSort') Sys_ReportDetailsSort: MatSort;
  @ViewChild('Sys_ReportDetailsPaginator') Sys_ReportDetailsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ReportDetailsService: Sys_ReportDetailsService,
  ) { }

  ngOnInit(): void {
    this.Sys_ReportDetailsSearch();
  }

  Sys_ReportDetailsSearch() {
    this.Sys_ReportDetailsService.SearchAll(this.Sys_ReportDetailsSort, this.Sys_ReportDetailsPaginator);
  }
  Sys_ReportDetailsSave(element: Sys_ReportDetails) {
    this.Sys_ReportDetailsService.FormData = element;
    this.NotificationService.warn(this.Sys_ReportDetailsService.ComponentSaveAll(this.Sys_ReportDetailsSort, this.Sys_ReportDetailsPaginator));
  }
  Sys_ReportDetailsDelete(element: Sys_ReportDetails) {
    this.Sys_ReportDetailsService.FormData = element;
    this.NotificationService.warn(this.Sys_ReportDetailsService.ComponentDeleteAll(this.Sys_ReportDetailsSort, this.Sys_ReportDetailsPaginator));
  }
}
