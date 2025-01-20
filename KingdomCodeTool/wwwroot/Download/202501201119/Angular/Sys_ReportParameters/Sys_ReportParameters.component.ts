import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_ReportParameters } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_ReportParameters.model';
import { Sys_ReportParametersService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_ReportParameters.service';

@Component({
  selector: 'app-Sys_ReportParameters',
  templateUrl: './Sys_ReportParameters.component.html',
  styleUrls: ['./Sys_ReportParameters.component.css']
})
export class Sys_ReportParametersComponent implements OnInit {

  @ViewChild('Sys_ReportParametersSort') Sys_ReportParametersSort: MatSort;
  @ViewChild('Sys_ReportParametersPaginator') Sys_ReportParametersPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ReportParametersService: Sys_ReportParametersService,
  ) { }

  ngOnInit(): void {
    this.Sys_ReportParametersSearch();
  }

  Sys_ReportParametersSearch() {
    this.Sys_ReportParametersService.SearchAll(this.Sys_ReportParametersSort, this.Sys_ReportParametersPaginator);
  }
  Sys_ReportParametersSave(element: Sys_ReportParameters) {
    this.Sys_ReportParametersService.FormData = element;
    this.NotificationService.warn(this.Sys_ReportParametersService.ComponentSaveAll(this.Sys_ReportParametersSort, this.Sys_ReportParametersPaginator));
  }
  Sys_ReportParametersDelete(element: Sys_ReportParameters) {
    this.Sys_ReportParametersService.FormData = element;
    this.NotificationService.warn(this.Sys_ReportParametersService.ComponentDeleteAll(this.Sys_ReportParametersSort, this.Sys_ReportParametersPaginator));
  }
}
