import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AppSettings } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppSettings.model';
import { Sys_AppSettingsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppSettings.service';

@Component({
  selector: 'app-Sys_AppSettings',
  templateUrl: './Sys_AppSettings.component.html',
  styleUrls: ['./Sys_AppSettings.component.css']
})
export class Sys_AppSettingsComponent implements OnInit {

  @ViewChild('Sys_AppSettingsSort') Sys_AppSettingsSort: MatSort;
  @ViewChild('Sys_AppSettingsPaginator') Sys_AppSettingsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AppSettingsService: Sys_AppSettingsService,
  ) { }

  ngOnInit(): void {
    this.Sys_AppSettingsSearch();
  }

  Sys_AppSettingsSearch() {
    this.Sys_AppSettingsService.SearchAll(this.Sys_AppSettingsSort, this.Sys_AppSettingsPaginator);
  }
  Sys_AppSettingsSave(element: Sys_AppSettings) {
    this.Sys_AppSettingsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppSettingsService.ComponentSaveAll(this.Sys_AppSettingsSort, this.Sys_AppSettingsPaginator));
  }
  Sys_AppSettingsDelete(element: Sys_AppSettings) {
    this.Sys_AppSettingsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppSettingsService.ComponentDeleteAll(this.Sys_AppSettingsSort, this.Sys_AppSettingsPaginator));
  }
}
