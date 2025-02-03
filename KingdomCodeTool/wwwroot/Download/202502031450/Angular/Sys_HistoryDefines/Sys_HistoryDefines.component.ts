import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_HistoryDefines } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_HistoryDefines.model';
import { Sys_HistoryDefinesService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_HistoryDefines.service';

@Component({
  selector: 'app-Sys_HistoryDefines',
  templateUrl: './Sys_HistoryDefines.component.html',
  styleUrls: ['./Sys_HistoryDefines.component.css']
})
export class Sys_HistoryDefinesComponent implements OnInit {

  @ViewChild('Sys_HistoryDefinesSort') Sys_HistoryDefinesSort: MatSort;
  @ViewChild('Sys_HistoryDefinesPaginator') Sys_HistoryDefinesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_HistoryDefinesService: Sys_HistoryDefinesService,
  ) { }

  ngOnInit(): void {
    this.Sys_HistoryDefinesSearch();
  }

  Sys_HistoryDefinesSearch() {
    this.Sys_HistoryDefinesService.SearchAll(this.Sys_HistoryDefinesSort, this.Sys_HistoryDefinesPaginator);
  }
  Sys_HistoryDefinesSave(element: Sys_HistoryDefines) {
    this.Sys_HistoryDefinesService.FormData = element;
    this.NotificationService.warn(this.Sys_HistoryDefinesService.ComponentSaveAll(this.Sys_HistoryDefinesSort, this.Sys_HistoryDefinesPaginator));
  }
  Sys_HistoryDefinesDelete(element: Sys_HistoryDefines) {
    this.Sys_HistoryDefinesService.FormData = element;
    this.NotificationService.warn(this.Sys_HistoryDefinesService.ComponentDeleteAll(this.Sys_HistoryDefinesSort, this.Sys_HistoryDefinesPaginator));
  }
}
