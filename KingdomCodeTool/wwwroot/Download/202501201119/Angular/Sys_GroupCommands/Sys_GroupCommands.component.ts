import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_GroupCommands } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_GroupCommands.model';
import { Sys_GroupCommandsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_GroupCommands.service';

@Component({
  selector: 'app-Sys_GroupCommands',
  templateUrl: './Sys_GroupCommands.component.html',
  styleUrls: ['./Sys_GroupCommands.component.css']
})
export class Sys_GroupCommandsComponent implements OnInit {

  @ViewChild('Sys_GroupCommandsSort') Sys_GroupCommandsSort: MatSort;
  @ViewChild('Sys_GroupCommandsPaginator') Sys_GroupCommandsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_GroupCommandsService: Sys_GroupCommandsService,
  ) { }

  ngOnInit(): void {
    this.Sys_GroupCommandsSearch();
  }

  Sys_GroupCommandsSearch() {
    this.Sys_GroupCommandsService.SearchAll(this.Sys_GroupCommandsSort, this.Sys_GroupCommandsPaginator);
  }
  Sys_GroupCommandsSave(element: Sys_GroupCommands) {
    this.Sys_GroupCommandsService.FormData = element;
    this.NotificationService.warn(this.Sys_GroupCommandsService.ComponentSaveAll(this.Sys_GroupCommandsSort, this.Sys_GroupCommandsPaginator));
  }
  Sys_GroupCommandsDelete(element: Sys_GroupCommands) {
    this.Sys_GroupCommandsService.FormData = element;
    this.NotificationService.warn(this.Sys_GroupCommandsService.ComponentDeleteAll(this.Sys_GroupCommandsSort, this.Sys_GroupCommandsPaginator));
  }
}
