import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_DataTypes } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_DataTypes.model';
import { Sys_DataTypesService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_DataTypes.service';

@Component({
  selector: 'app-Sys_DataTypes',
  templateUrl: './Sys_DataTypes.component.html',
  styleUrls: ['./Sys_DataTypes.component.css']
})
export class Sys_DataTypesComponent implements OnInit {

  @ViewChild('Sys_DataTypesSort') Sys_DataTypesSort: MatSort;
  @ViewChild('Sys_DataTypesPaginator') Sys_DataTypesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_DataTypesService: Sys_DataTypesService,
  ) { }

  ngOnInit(): void {
    this.Sys_DataTypesSearch();
  }

  Sys_DataTypesSearch() {
    this.Sys_DataTypesService.SearchAll(this.Sys_DataTypesSort, this.Sys_DataTypesPaginator);
  }
  Sys_DataTypesSave(element: Sys_DataTypes) {
    this.Sys_DataTypesService.FormData = element;
    this.NotificationService.warn(this.Sys_DataTypesService.ComponentSaveAll(this.Sys_DataTypesSort, this.Sys_DataTypesPaginator));
  }
  Sys_DataTypesDelete(element: Sys_DataTypes) {
    this.Sys_DataTypesService.FormData = element;
    this.NotificationService.warn(this.Sys_DataTypesService.ComponentDeleteAll(this.Sys_DataTypesSort, this.Sys_DataTypesPaginator));
  }
}
