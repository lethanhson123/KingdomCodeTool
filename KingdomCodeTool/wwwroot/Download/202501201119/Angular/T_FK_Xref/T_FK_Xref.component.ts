import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { T_FK_Xref } from 'src/app/shared/_eHospital_DongNai_A_System/T_FK_Xref.model';
import { T_FK_XrefService } from 'src/app/shared/_eHospital_DongNai_A_System/T_FK_Xref.service';

@Component({
  selector: 'app-T_FK_Xref',
  templateUrl: './T_FK_Xref.component.html',
  styleUrls: ['./T_FK_Xref.component.css']
})
export class T_FK_XrefComponent implements OnInit {

  @ViewChild('T_FK_XrefSort') T_FK_XrefSort: MatSort;
  @ViewChild('T_FK_XrefPaginator') T_FK_XrefPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public T_FK_XrefService: T_FK_XrefService,
  ) { }

  ngOnInit(): void {
    this.T_FK_XrefSearch();
  }

  T_FK_XrefSearch() {
    this.T_FK_XrefService.SearchAll(this.T_FK_XrefSort, this.T_FK_XrefPaginator);
  }
  T_FK_XrefSave(element: T_FK_Xref) {
    this.T_FK_XrefService.FormData = element;
    this.NotificationService.warn(this.T_FK_XrefService.ComponentSaveAll(this.T_FK_XrefSort, this.T_FK_XrefPaginator));
  }
  T_FK_XrefDelete(element: T_FK_Xref) {
    this.T_FK_XrefService.FormData = element;
    this.NotificationService.warn(this.T_FK_XrefService.ComponentDeleteAll(this.T_FK_XrefSort, this.T_FK_XrefPaginator));
  }
}
