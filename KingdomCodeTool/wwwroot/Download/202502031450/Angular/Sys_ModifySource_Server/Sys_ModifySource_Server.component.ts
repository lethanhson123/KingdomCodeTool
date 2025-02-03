import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_ModifySource_Server } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ModifySource_Server.model';
import { Sys_ModifySource_ServerService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ModifySource_Server.service';

@Component({
  selector: 'app-Sys_ModifySource_Server',
  templateUrl: './Sys_ModifySource_Server.component.html',
  styleUrls: ['./Sys_ModifySource_Server.component.css']
})
export class Sys_ModifySource_ServerComponent implements OnInit {

  @ViewChild('Sys_ModifySource_ServerSort') Sys_ModifySource_ServerSort: MatSort;
  @ViewChild('Sys_ModifySource_ServerPaginator') Sys_ModifySource_ServerPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ModifySource_ServerService: Sys_ModifySource_ServerService,
  ) { }

  ngOnInit(): void {
    this.Sys_ModifySource_ServerSearch();
  }

  Sys_ModifySource_ServerSearch() {
    this.Sys_ModifySource_ServerService.SearchAll(this.Sys_ModifySource_ServerSort, this.Sys_ModifySource_ServerPaginator);
  }
  Sys_ModifySource_ServerSave(element: Sys_ModifySource_Server) {
    this.Sys_ModifySource_ServerService.FormData = element;
    this.NotificationService.warn(this.Sys_ModifySource_ServerService.ComponentSaveAll(this.Sys_ModifySource_ServerSort, this.Sys_ModifySource_ServerPaginator));
  }
  Sys_ModifySource_ServerDelete(element: Sys_ModifySource_Server) {
    this.Sys_ModifySource_ServerService.FormData = element;
    this.NotificationService.warn(this.Sys_ModifySource_ServerService.ComponentDeleteAll(this.Sys_ModifySource_ServerSort, this.Sys_ModifySource_ServerPaginator));
  }
}
