import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_SiteDatabaseConnections } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_SiteDatabaseConnections.model';
import { Sys_SiteDatabaseConnectionsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_SiteDatabaseConnections.service';

@Component({
  selector: 'app-Sys_SiteDatabaseConnections',
  templateUrl: './Sys_SiteDatabaseConnections.component.html',
  styleUrls: ['./Sys_SiteDatabaseConnections.component.css']
})
export class Sys_SiteDatabaseConnectionsComponent implements OnInit {

  @ViewChild('Sys_SiteDatabaseConnectionsSort') Sys_SiteDatabaseConnectionsSort: MatSort;
  @ViewChild('Sys_SiteDatabaseConnectionsPaginator') Sys_SiteDatabaseConnectionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_SiteDatabaseConnectionsService: Sys_SiteDatabaseConnectionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_SiteDatabaseConnectionsSearch();
  }

  Sys_SiteDatabaseConnectionsSearch() {
    this.Sys_SiteDatabaseConnectionsService.SearchAll(this.Sys_SiteDatabaseConnectionsSort, this.Sys_SiteDatabaseConnectionsPaginator);
  }
  Sys_SiteDatabaseConnectionsSave(element: Sys_SiteDatabaseConnections) {
    this.Sys_SiteDatabaseConnectionsService.FormData = element;
    this.NotificationService.warn(this.Sys_SiteDatabaseConnectionsService.ComponentSaveAll(this.Sys_SiteDatabaseConnectionsSort, this.Sys_SiteDatabaseConnectionsPaginator));
  }
  Sys_SiteDatabaseConnectionsDelete(element: Sys_SiteDatabaseConnections) {
    this.Sys_SiteDatabaseConnectionsService.FormData = element;
    this.NotificationService.warn(this.Sys_SiteDatabaseConnectionsService.ComponentDeleteAll(this.Sys_SiteDatabaseConnectionsSort, this.Sys_SiteDatabaseConnectionsPaginator));
  }
}
