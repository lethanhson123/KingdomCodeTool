import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Parameters } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Parameters.model';
import { Sys_ParametersService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Parameters.service';

@Component({
  selector: 'app-Sys_Parameters',
  templateUrl: './Sys_Parameters.component.html',
  styleUrls: ['./Sys_Parameters.component.css']
})
export class Sys_ParametersComponent implements OnInit {

  @ViewChild('Sys_ParametersSort') Sys_ParametersSort: MatSort;
  @ViewChild('Sys_ParametersPaginator') Sys_ParametersPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ParametersService: Sys_ParametersService,
  ) { }

  ngOnInit(): void {
    this.Sys_ParametersSearch();
  }

  Sys_ParametersSearch() {
    this.Sys_ParametersService.SearchAll(this.Sys_ParametersSort, this.Sys_ParametersPaginator);
  }
  Sys_ParametersSave(element: Sys_Parameters) {
    this.Sys_ParametersService.FormData = element;
    this.NotificationService.warn(this.Sys_ParametersService.ComponentSaveAll(this.Sys_ParametersSort, this.Sys_ParametersPaginator));
  }
  Sys_ParametersDelete(element: Sys_Parameters) {
    this.Sys_ParametersService.FormData = element;
    this.NotificationService.warn(this.Sys_ParametersService.ComponentDeleteAll(this.Sys_ParametersSort, this.Sys_ParametersPaginator));
  }
}
