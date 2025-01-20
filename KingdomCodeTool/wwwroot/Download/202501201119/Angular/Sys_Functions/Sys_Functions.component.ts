import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Functions } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Functions.model';
import { Sys_FunctionsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Functions.service';

@Component({
  selector: 'app-Sys_Functions',
  templateUrl: './Sys_Functions.component.html',
  styleUrls: ['./Sys_Functions.component.css']
})
export class Sys_FunctionsComponent implements OnInit {

  @ViewChild('Sys_FunctionsSort') Sys_FunctionsSort: MatSort;
  @ViewChild('Sys_FunctionsPaginator') Sys_FunctionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_FunctionsService: Sys_FunctionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_FunctionsSearch();
  }

  Sys_FunctionsSearch() {
    this.Sys_FunctionsService.SearchAll(this.Sys_FunctionsSort, this.Sys_FunctionsPaginator);
  }
  Sys_FunctionsSave(element: Sys_Functions) {
    this.Sys_FunctionsService.FormData = element;
    this.NotificationService.warn(this.Sys_FunctionsService.ComponentSaveAll(this.Sys_FunctionsSort, this.Sys_FunctionsPaginator));
  }
  Sys_FunctionsDelete(element: Sys_Functions) {
    this.Sys_FunctionsService.FormData = element;
    this.NotificationService.warn(this.Sys_FunctionsService.ComponentDeleteAll(this.Sys_FunctionsSort, this.Sys_FunctionsPaginator));
  }
}
