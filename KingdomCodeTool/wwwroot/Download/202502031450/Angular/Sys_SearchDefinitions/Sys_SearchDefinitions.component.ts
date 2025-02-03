import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_SearchDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_SearchDefinitions.model';
import { Sys_SearchDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_SearchDefinitions.service';

@Component({
  selector: 'app-Sys_SearchDefinitions',
  templateUrl: './Sys_SearchDefinitions.component.html',
  styleUrls: ['./Sys_SearchDefinitions.component.css']
})
export class Sys_SearchDefinitionsComponent implements OnInit {

  @ViewChild('Sys_SearchDefinitionsSort') Sys_SearchDefinitionsSort: MatSort;
  @ViewChild('Sys_SearchDefinitionsPaginator') Sys_SearchDefinitionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_SearchDefinitionsService: Sys_SearchDefinitionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_SearchDefinitionsSearch();
  }

  Sys_SearchDefinitionsSearch() {
    this.Sys_SearchDefinitionsService.SearchAll(this.Sys_SearchDefinitionsSort, this.Sys_SearchDefinitionsPaginator);
  }
  Sys_SearchDefinitionsSave(element: Sys_SearchDefinitions) {
    this.Sys_SearchDefinitionsService.FormData = element;
    this.NotificationService.warn(this.Sys_SearchDefinitionsService.ComponentSaveAll(this.Sys_SearchDefinitionsSort, this.Sys_SearchDefinitionsPaginator));
  }
  Sys_SearchDefinitionsDelete(element: Sys_SearchDefinitions) {
    this.Sys_SearchDefinitionsService.FormData = element;
    this.NotificationService.warn(this.Sys_SearchDefinitionsService.ComponentDeleteAll(this.Sys_SearchDefinitionsSort, this.Sys_SearchDefinitionsPaginator));
  }
}
