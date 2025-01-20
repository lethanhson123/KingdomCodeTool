import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Configurations } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Configurations.model';
import { Sys_ConfigurationsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Configurations.service';

@Component({
  selector: 'app-Sys_Configurations',
  templateUrl: './Sys_Configurations.component.html',
  styleUrls: ['./Sys_Configurations.component.css']
})
export class Sys_ConfigurationsComponent implements OnInit {

  @ViewChild('Sys_ConfigurationsSort') Sys_ConfigurationsSort: MatSort;
  @ViewChild('Sys_ConfigurationsPaginator') Sys_ConfigurationsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ConfigurationsService: Sys_ConfigurationsService,
  ) { }

  ngOnInit(): void {
    this.Sys_ConfigurationsSearch();
  }

  Sys_ConfigurationsSearch() {
    this.Sys_ConfigurationsService.SearchAll(this.Sys_ConfigurationsSort, this.Sys_ConfigurationsPaginator);
  }
  Sys_ConfigurationsSave(element: Sys_Configurations) {
    this.Sys_ConfigurationsService.FormData = element;
    this.NotificationService.warn(this.Sys_ConfigurationsService.ComponentSaveAll(this.Sys_ConfigurationsSort, this.Sys_ConfigurationsPaginator));
  }
  Sys_ConfigurationsDelete(element: Sys_Configurations) {
    this.Sys_ConfigurationsService.FormData = element;
    this.NotificationService.warn(this.Sys_ConfigurationsService.ComponentDeleteAll(this.Sys_ConfigurationsSort, this.Sys_ConfigurationsPaginator));
  }
}
