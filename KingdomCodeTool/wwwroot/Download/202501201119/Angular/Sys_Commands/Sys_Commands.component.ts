import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Commands } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Commands.model';
import { Sys_CommandsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Commands.service';

@Component({
  selector: 'app-Sys_Commands',
  templateUrl: './Sys_Commands.component.html',
  styleUrls: ['./Sys_Commands.component.css']
})
export class Sys_CommandsComponent implements OnInit {

  @ViewChild('Sys_CommandsSort') Sys_CommandsSort: MatSort;
  @ViewChild('Sys_CommandsPaginator') Sys_CommandsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_CommandsService: Sys_CommandsService,
  ) { }

  ngOnInit(): void {
    this.Sys_CommandsSearch();
  }

  Sys_CommandsSearch() {
    this.Sys_CommandsService.SearchAll(this.Sys_CommandsSort, this.Sys_CommandsPaginator);
  }
  Sys_CommandsSave(element: Sys_Commands) {
    this.Sys_CommandsService.FormData = element;
    this.NotificationService.warn(this.Sys_CommandsService.ComponentSaveAll(this.Sys_CommandsSort, this.Sys_CommandsPaginator));
  }
  Sys_CommandsDelete(element: Sys_Commands) {
    this.Sys_CommandsService.FormData = element;
    this.NotificationService.warn(this.Sys_CommandsService.ComponentDeleteAll(this.Sys_CommandsSort, this.Sys_CommandsPaginator));
  }
}
