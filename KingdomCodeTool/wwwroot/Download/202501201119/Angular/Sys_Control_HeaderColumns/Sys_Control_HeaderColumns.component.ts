import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Control_HeaderColumns } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Control_HeaderColumns.model';
import { Sys_Control_HeaderColumnsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Control_HeaderColumns.service';

@Component({
  selector: 'app-Sys_Control_HeaderColumns',
  templateUrl: './Sys_Control_HeaderColumns.component.html',
  styleUrls: ['./Sys_Control_HeaderColumns.component.css']
})
export class Sys_Control_HeaderColumnsComponent implements OnInit {

  @ViewChild('Sys_Control_HeaderColumnsSort') Sys_Control_HeaderColumnsSort: MatSort;
  @ViewChild('Sys_Control_HeaderColumnsPaginator') Sys_Control_HeaderColumnsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_Control_HeaderColumnsService: Sys_Control_HeaderColumnsService,
  ) { }

  ngOnInit(): void {
    this.Sys_Control_HeaderColumnsSearch();
  }

  Sys_Control_HeaderColumnsSearch() {
    this.Sys_Control_HeaderColumnsService.SearchAll(this.Sys_Control_HeaderColumnsSort, this.Sys_Control_HeaderColumnsPaginator);
  }
  Sys_Control_HeaderColumnsSave(element: Sys_Control_HeaderColumns) {
    this.Sys_Control_HeaderColumnsService.FormData = element;
    this.NotificationService.warn(this.Sys_Control_HeaderColumnsService.ComponentSaveAll(this.Sys_Control_HeaderColumnsSort, this.Sys_Control_HeaderColumnsPaginator));
  }
  Sys_Control_HeaderColumnsDelete(element: Sys_Control_HeaderColumns) {
    this.Sys_Control_HeaderColumnsService.FormData = element;
    this.NotificationService.warn(this.Sys_Control_HeaderColumnsService.ComponentDeleteAll(this.Sys_Control_HeaderColumnsSort, this.Sys_Control_HeaderColumnsPaginator));
  }
}
