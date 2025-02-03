import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_ComboDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ComboDefinitions.model';
import { Sys_ComboDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ComboDefinitions.service';

@Component({
  selector: 'app-Sys_ComboDefinitions',
  templateUrl: './Sys_ComboDefinitions.component.html',
  styleUrls: ['./Sys_ComboDefinitions.component.css']
})
export class Sys_ComboDefinitionsComponent implements OnInit {

  @ViewChild('Sys_ComboDefinitionsSort') Sys_ComboDefinitionsSort: MatSort;
  @ViewChild('Sys_ComboDefinitionsPaginator') Sys_ComboDefinitionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ComboDefinitionsService: Sys_ComboDefinitionsService,
  ) { }

  ngOnInit(): void {
    this.Sys_ComboDefinitionsSearch();
  }

  Sys_ComboDefinitionsSearch() {
    this.Sys_ComboDefinitionsService.SearchAll(this.Sys_ComboDefinitionsSort, this.Sys_ComboDefinitionsPaginator);
  }
  Sys_ComboDefinitionsSave(element: Sys_ComboDefinitions) {
    this.Sys_ComboDefinitionsService.FormData = element;
    this.NotificationService.warn(this.Sys_ComboDefinitionsService.ComponentSaveAll(this.Sys_ComboDefinitionsSort, this.Sys_ComboDefinitionsPaginator));
  }
  Sys_ComboDefinitionsDelete(element: Sys_ComboDefinitions) {
    this.Sys_ComboDefinitionsService.FormData = element;
    this.NotificationService.warn(this.Sys_ComboDefinitionsService.ComponentDeleteAll(this.Sys_ComboDefinitionsSort, this.Sys_ComboDefinitionsPaginator));
  }
}
