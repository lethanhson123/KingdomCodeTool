import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_UserPasswordHistory } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserPasswordHistory.model';
import { Sys_UserPasswordHistoryService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserPasswordHistory.service';

@Component({
  selector: 'app-Sys_UserPasswordHistory',
  templateUrl: './Sys_UserPasswordHistory.component.html',
  styleUrls: ['./Sys_UserPasswordHistory.component.css']
})
export class Sys_UserPasswordHistoryComponent implements OnInit {

  @ViewChild('Sys_UserPasswordHistorySort') Sys_UserPasswordHistorySort: MatSort;
  @ViewChild('Sys_UserPasswordHistoryPaginator') Sys_UserPasswordHistoryPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_UserPasswordHistoryService: Sys_UserPasswordHistoryService,
  ) { }

  ngOnInit(): void {
    this.Sys_UserPasswordHistorySearch();
  }

  Sys_UserPasswordHistorySearch() {
    this.Sys_UserPasswordHistoryService.SearchAll(this.Sys_UserPasswordHistorySort, this.Sys_UserPasswordHistoryPaginator);
  }
  Sys_UserPasswordHistorySave(element: Sys_UserPasswordHistory) {
    this.Sys_UserPasswordHistoryService.FormData = element;
    this.NotificationService.warn(this.Sys_UserPasswordHistoryService.ComponentSaveAll(this.Sys_UserPasswordHistorySort, this.Sys_UserPasswordHistoryPaginator));
  }
  Sys_UserPasswordHistoryDelete(element: Sys_UserPasswordHistory) {
    this.Sys_UserPasswordHistoryService.FormData = element;
    this.NotificationService.warn(this.Sys_UserPasswordHistoryService.ComponentDeleteAll(this.Sys_UserPasswordHistorySort, this.Sys_UserPasswordHistoryPaginator));
  }
}
