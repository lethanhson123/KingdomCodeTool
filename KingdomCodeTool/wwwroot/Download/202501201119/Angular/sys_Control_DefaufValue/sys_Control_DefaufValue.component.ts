import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { sys_Control_DefaufValue } from 'src/app/shared/_eHospital_DongNai_A_System/sys_Control_DefaufValue.model';
import { sys_Control_DefaufValueService } from 'src/app/shared/_eHospital_DongNai_A_System/sys_Control_DefaufValue.service';

@Component({
  selector: 'app-sys_Control_DefaufValue',
  templateUrl: './sys_Control_DefaufValue.component.html',
  styleUrls: ['./sys_Control_DefaufValue.component.css']
})
export class sys_Control_DefaufValueComponent implements OnInit {

  @ViewChild('sys_Control_DefaufValueSort') sys_Control_DefaufValueSort: MatSort;
  @ViewChild('sys_Control_DefaufValuePaginator') sys_Control_DefaufValuePaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public sys_Control_DefaufValueService: sys_Control_DefaufValueService,
  ) { }

  ngOnInit(): void {
    this.sys_Control_DefaufValueSearch();
  }

  sys_Control_DefaufValueSearch() {
    this.sys_Control_DefaufValueService.SearchAll(this.sys_Control_DefaufValueSort, this.sys_Control_DefaufValuePaginator);
  }
  sys_Control_DefaufValueSave(element: sys_Control_DefaufValue) {
    this.sys_Control_DefaufValueService.FormData = element;
    this.NotificationService.warn(this.sys_Control_DefaufValueService.ComponentSaveAll(this.sys_Control_DefaufValueSort, this.sys_Control_DefaufValuePaginator));
  }
  sys_Control_DefaufValueDelete(element: sys_Control_DefaufValue) {
    this.sys_Control_DefaufValueService.FormData = element;
    this.NotificationService.warn(this.sys_Control_DefaufValueService.ComponentDeleteAll(this.sys_Control_DefaufValueSort, this.sys_Control_DefaufValuePaginator));
  }
}
