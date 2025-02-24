import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AppPrivateSettings } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppPrivateSettings.model';
import { Sys_AppPrivateSettingsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppPrivateSettings.service';

@Component({
  selector: 'app-Sys_AppPrivateSettings',
  templateUrl: './Sys_AppPrivateSettings.component.html',
  styleUrls: ['./Sys_AppPrivateSettings.component.css']
})
export class Sys_AppPrivateSettingsComponent implements OnInit {

  @ViewChild('Sys_AppPrivateSettingsSort') Sys_AppPrivateSettingsSort: MatSort;
  @ViewChild('Sys_AppPrivateSettingsPaginator') Sys_AppPrivateSettingsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AppPrivateSettingsService: Sys_AppPrivateSettingsService,
  ) { }

  ngOnInit(): void {
    this.Sys_AppPrivateSettingsSearch();
  }

  Sys_AppPrivateSettingsSearch() {
    this.Sys_AppPrivateSettingsService.SearchAll(this.Sys_AppPrivateSettingsSort, this.Sys_AppPrivateSettingsPaginator);
  }
  Sys_AppPrivateSettingsSave(element: Sys_AppPrivateSettings) {
    this.Sys_AppPrivateSettingsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppPrivateSettingsService.ComponentSaveAll(this.Sys_AppPrivateSettingsSort, this.Sys_AppPrivateSettingsPaginator));
  }
  Sys_AppPrivateSettingsDelete(element: Sys_AppPrivateSettings) {
    this.Sys_AppPrivateSettingsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppPrivateSettingsService.ComponentDeleteAll(this.Sys_AppPrivateSettingsSort, this.Sys_AppPrivateSettingsPaginator));
  }
}
