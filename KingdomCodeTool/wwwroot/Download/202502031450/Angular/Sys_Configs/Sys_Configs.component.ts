import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Configs } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_Configs.model';
import { Sys_ConfigsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_Configs.service';

@Component({
  selector: 'app-Sys_Configs',
  templateUrl: './Sys_Configs.component.html',
  styleUrls: ['./Sys_Configs.component.css']
})
export class Sys_ConfigsComponent implements OnInit {

  @ViewChild('Sys_ConfigsSort') Sys_ConfigsSort: MatSort;
  @ViewChild('Sys_ConfigsPaginator') Sys_ConfigsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ConfigsService: Sys_ConfigsService,
  ) { }

  ngOnInit(): void {
    this.Sys_ConfigsSearch();
  }

  Sys_ConfigsSearch() {
    this.Sys_ConfigsService.SearchAll(this.Sys_ConfigsSort, this.Sys_ConfigsPaginator);
  }
  Sys_ConfigsSave(element: Sys_Configs) {
    this.Sys_ConfigsService.FormData = element;
    this.NotificationService.warn(this.Sys_ConfigsService.ComponentSaveAll(this.Sys_ConfigsSort, this.Sys_ConfigsPaginator));
  }
  Sys_ConfigsDelete(element: Sys_Configs) {
    this.Sys_ConfigsService.FormData = element;
    this.NotificationService.warn(this.Sys_ConfigsService.ComponentDeleteAll(this.Sys_ConfigsSort, this.Sys_ConfigsPaginator));
  }
}
