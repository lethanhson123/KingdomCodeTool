import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_LoginSessions } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_LoginSessions.model';
import { Sys_LoginSessionsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_LoginSessions.service';

@Component({
  selector: 'app-Sys_LoginSessions',
  templateUrl: './Sys_LoginSessions.component.html',
  styleUrls: ['./Sys_LoginSessions.component.css']
})
export class Sys_LoginSessionsComponent implements OnInit {

  @ViewChild('Sys_LoginSessionsSort') Sys_LoginSessionsSort: MatSort;
  @ViewChild('Sys_LoginSessionsPaginator') Sys_LoginSessionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_LoginSessionsService: Sys_LoginSessionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_LoginSessionsSearch();
  }

  Sys_LoginSessionsSearch() {
    this.Sys_LoginSessionsService.SearchAll(this.Sys_LoginSessionsSort, this.Sys_LoginSessionsPaginator);
  }
  Sys_LoginSessionsSave(element: Sys_LoginSessions) {
    this.Sys_LoginSessionsService.FormData = element;
    this.NotificationService.warn(this.Sys_LoginSessionsService.ComponentSaveAll(this.Sys_LoginSessionsSort, this.Sys_LoginSessionsPaginator));
  }
  Sys_LoginSessionsDelete(element: Sys_LoginSessions) {
    this.Sys_LoginSessionsService.FormData = element;
    this.NotificationService.warn(this.Sys_LoginSessionsService.ComponentDeleteAll(this.Sys_LoginSessionsSort, this.Sys_LoginSessionsPaginator));
  }
}
