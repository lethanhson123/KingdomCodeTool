import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_LovDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_LovDefinitions.model';
import { Sys_LovDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_LovDefinitions.service';

@Component({
  selector: 'app-Sys_LovDefinitions',
  templateUrl: './Sys_LovDefinitions.component.html',
  styleUrls: ['./Sys_LovDefinitions.component.css']
})
export class Sys_LovDefinitionsComponent implements OnInit {

  @ViewChild('Sys_LovDefinitionsSort') Sys_LovDefinitionsSort: MatSort;
  @ViewChild('Sys_LovDefinitionsPaginator') Sys_LovDefinitionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_LovDefinitionsService: Sys_LovDefinitionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_LovDefinitionsSearch();
  }

  Sys_LovDefinitionsSearch() {
    this.Sys_LovDefinitionsService.SearchAll(this.Sys_LovDefinitionsSort, this.Sys_LovDefinitionsPaginator);
  }
  Sys_LovDefinitionsSave(element: Sys_LovDefinitions) {
    this.Sys_LovDefinitionsService.FormData = element;
    this.NotificationService.warn(this.Sys_LovDefinitionsService.ComponentSaveAll(this.Sys_LovDefinitionsSort, this.Sys_LovDefinitionsPaginator));
  }
  Sys_LovDefinitionsDelete(element: Sys_LovDefinitions) {
    this.Sys_LovDefinitionsService.FormData = element;
    this.NotificationService.warn(this.Sys_LovDefinitionsService.ComponentDeleteAll(this.Sys_LovDefinitionsSort, this.Sys_LovDefinitionsPaginator));
  }
}
