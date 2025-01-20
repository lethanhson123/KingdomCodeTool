import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_ControlTypes } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_ControlTypes.model';
import { Sys_ControlTypesService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_ControlTypes.service';

@Component({
  selector: 'app-Sys_ControlTypes',
  templateUrl: './Sys_ControlTypes.component.html',
  styleUrls: ['./Sys_ControlTypes.component.css']
})
export class Sys_ControlTypesComponent implements OnInit {

  @ViewChild('Sys_ControlTypesSort') Sys_ControlTypesSort: MatSort;
  @ViewChild('Sys_ControlTypesPaginator') Sys_ControlTypesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ControlTypesService: Sys_ControlTypesService,
  ) { }

  ngOnInit(): void {
    this.Sys_ControlTypesSearch();
  }

  Sys_ControlTypesSearch() {
    this.Sys_ControlTypesService.SearchAll(this.Sys_ControlTypesSort, this.Sys_ControlTypesPaginator);
  }
  Sys_ControlTypesSave(element: Sys_ControlTypes) {
    this.Sys_ControlTypesService.FormData = element;
    this.NotificationService.warn(this.Sys_ControlTypesService.ComponentSaveAll(this.Sys_ControlTypesSort, this.Sys_ControlTypesPaginator));
  }
  Sys_ControlTypesDelete(element: Sys_ControlTypes) {
    this.Sys_ControlTypesService.FormData = element;
    this.NotificationService.warn(this.Sys_ControlTypesService.ComponentDeleteAll(this.Sys_ControlTypesSort, this.Sys_ControlTypesPaginator));
  }
}
