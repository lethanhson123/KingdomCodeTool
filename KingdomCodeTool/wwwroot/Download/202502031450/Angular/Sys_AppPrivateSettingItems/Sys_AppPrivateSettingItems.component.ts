import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AppPrivateSettingItems } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppPrivateSettingItems.model';
import { Sys_AppPrivateSettingItemsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_AppPrivateSettingItems.service';

@Component({
  selector: 'app-Sys_AppPrivateSettingItems',
  templateUrl: './Sys_AppPrivateSettingItems.component.html',
  styleUrls: ['./Sys_AppPrivateSettingItems.component.css']
})
export class Sys_AppPrivateSettingItemsComponent implements OnInit {

  @ViewChild('Sys_AppPrivateSettingItemsSort') Sys_AppPrivateSettingItemsSort: MatSort;
  @ViewChild('Sys_AppPrivateSettingItemsPaginator') Sys_AppPrivateSettingItemsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AppPrivateSettingItemsService: Sys_AppPrivateSettingItemsService,
  ) { }

  ngOnInit(): void {
    this.Sys_AppPrivateSettingItemsSearch();
  }

  Sys_AppPrivateSettingItemsSearch() {
    this.Sys_AppPrivateSettingItemsService.SearchAll(this.Sys_AppPrivateSettingItemsSort, this.Sys_AppPrivateSettingItemsPaginator);
  }
  Sys_AppPrivateSettingItemsSave(element: Sys_AppPrivateSettingItems) {
    this.Sys_AppPrivateSettingItemsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppPrivateSettingItemsService.ComponentSaveAll(this.Sys_AppPrivateSettingItemsSort, this.Sys_AppPrivateSettingItemsPaginator));
  }
  Sys_AppPrivateSettingItemsDelete(element: Sys_AppPrivateSettingItems) {
    this.Sys_AppPrivateSettingItemsService.FormData = element;
    this.NotificationService.warn(this.Sys_AppPrivateSettingItemsService.ComponentDeleteAll(this.Sys_AppPrivateSettingItemsSort, this.Sys_AppPrivateSettingItemsPaginator));
  }
}
