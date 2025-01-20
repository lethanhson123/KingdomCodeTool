import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Modules } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Modules.model';
import { Sys_ModulesService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Modules.service';

@Component({
  selector: 'app-Sys_Modules',
  templateUrl: './Sys_Modules.component.html',
  styleUrls: ['./Sys_Modules.component.css']
})
export class Sys_ModulesComponent implements OnInit {

  @ViewChild('Sys_ModulesSort') Sys_ModulesSort: MatSort;
  @ViewChild('Sys_ModulesPaginator') Sys_ModulesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ModulesService: Sys_ModulesService,
  ) { }

  ngOnInit(): void {
    this.Sys_ModulesSearch();
  }

  Sys_ModulesSearch() {
    this.Sys_ModulesService.SearchAll(this.Sys_ModulesSort, this.Sys_ModulesPaginator);
  }
  Sys_ModulesSave(element: Sys_Modules) {
    this.Sys_ModulesService.FormData = element;
    this.NotificationService.warn(this.Sys_ModulesService.ComponentSaveAll(this.Sys_ModulesSort, this.Sys_ModulesPaginator));
  }
  Sys_ModulesDelete(element: Sys_Modules) {
    this.Sys_ModulesService.FormData = element;
    this.NotificationService.warn(this.Sys_ModulesService.ComponentDeleteAll(this.Sys_ModulesSort, this.Sys_ModulesPaginator));
  }
}
