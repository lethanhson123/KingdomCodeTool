import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_UserCommands } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserCommands.model';
import { Sys_UserCommandsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_UserCommands.service';

@Component({
  selector: 'app-Sys_UserCommands',
  templateUrl: './Sys_UserCommands.component.html',
  styleUrls: ['./Sys_UserCommands.component.css']
})
export class Sys_UserCommandsComponent implements OnInit {

  @ViewChild('Sys_UserCommandsSort') Sys_UserCommandsSort: MatSort;
  @ViewChild('Sys_UserCommandsPaginator') Sys_UserCommandsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_UserCommandsService: Sys_UserCommandsService,
  ) { }

  ngOnInit(): void {
    this.Sys_UserCommandsSearch();
  }

  Sys_UserCommandsSearch() {
    this.Sys_UserCommandsService.SearchAll(this.Sys_UserCommandsSort, this.Sys_UserCommandsPaginator);
  }
  Sys_UserCommandsSave(element: Sys_UserCommands) {
    this.Sys_UserCommandsService.FormData = element;
    this.NotificationService.warn(this.Sys_UserCommandsService.ComponentSaveAll(this.Sys_UserCommandsSort, this.Sys_UserCommandsPaginator));
  }
  Sys_UserCommandsDelete(element: Sys_UserCommands) {
    this.Sys_UserCommandsService.FormData = element;
    this.NotificationService.warn(this.Sys_UserCommandsService.ComponentDeleteAll(this.Sys_UserCommandsSort, this.Sys_UserCommandsPaginator));
  }
}
