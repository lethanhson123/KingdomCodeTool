import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_ModifySource_Client } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ModifySource_Client.model';
import { Sys_ModifySource_ClientService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ModifySource_Client.service';

@Component({
  selector: 'app-Sys_ModifySource_Client',
  templateUrl: './Sys_ModifySource_Client.component.html',
  styleUrls: ['./Sys_ModifySource_Client.component.css']
})
export class Sys_ModifySource_ClientComponent implements OnInit {

  @ViewChild('Sys_ModifySource_ClientSort') Sys_ModifySource_ClientSort: MatSort;
  @ViewChild('Sys_ModifySource_ClientPaginator') Sys_ModifySource_ClientPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ModifySource_ClientService: Sys_ModifySource_ClientService,
  ) { }

  ngOnInit(): void {
    this.Sys_ModifySource_ClientSearch();
  }

  Sys_ModifySource_ClientSearch() {
    this.Sys_ModifySource_ClientService.SearchAll(this.Sys_ModifySource_ClientSort, this.Sys_ModifySource_ClientPaginator);
  }
  Sys_ModifySource_ClientSave(element: Sys_ModifySource_Client) {
    this.Sys_ModifySource_ClientService.FormData = element;
    this.NotificationService.warn(this.Sys_ModifySource_ClientService.ComponentSaveAll(this.Sys_ModifySource_ClientSort, this.Sys_ModifySource_ClientPaginator));
  }
  Sys_ModifySource_ClientDelete(element: Sys_ModifySource_Client) {
    this.Sys_ModifySource_ClientService.FormData = element;
    this.NotificationService.warn(this.Sys_ModifySource_ClientService.ComponentDeleteAll(this.Sys_ModifySource_ClientSort, this.Sys_ModifySource_ClientPaginator));
  }
}
