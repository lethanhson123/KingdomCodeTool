import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AutoTextSettings } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTextSettings.model';
import { Sys_AutoTextSettingsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTextSettings.service';

@Component({
  selector: 'app-Sys_AutoTextSettings',
  templateUrl: './Sys_AutoTextSettings.component.html',
  styleUrls: ['./Sys_AutoTextSettings.component.css']
})
export class Sys_AutoTextSettingsComponent implements OnInit {

  @ViewChild('Sys_AutoTextSettingsSort') Sys_AutoTextSettingsSort: MatSort;
  @ViewChild('Sys_AutoTextSettingsPaginator') Sys_AutoTextSettingsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AutoTextSettingsService: Sys_AutoTextSettingsService,
  ) { }

  ngOnInit(): void {
    this.Sys_AutoTextSettingsSearch();
  }

  Sys_AutoTextSettingsSearch() {
    this.Sys_AutoTextSettingsService.SearchAll(this.Sys_AutoTextSettingsSort, this.Sys_AutoTextSettingsPaginator);
  }
  Sys_AutoTextSettingsSave(element: Sys_AutoTextSettings) {
    this.Sys_AutoTextSettingsService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextSettingsService.ComponentSaveAll(this.Sys_AutoTextSettingsSort, this.Sys_AutoTextSettingsPaginator));
  }
  Sys_AutoTextSettingsDelete(element: Sys_AutoTextSettings) {
    this.Sys_AutoTextSettingsService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextSettingsService.ComponentDeleteAll(this.Sys_AutoTextSettingsSort, this.Sys_AutoTextSettingsPaginator));
  }
}
