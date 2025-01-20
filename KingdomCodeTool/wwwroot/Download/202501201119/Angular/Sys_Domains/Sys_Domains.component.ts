import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Domains } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Domains.model';
import { Sys_DomainsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Domains.service';

@Component({
  selector: 'app-Sys_Domains',
  templateUrl: './Sys_Domains.component.html',
  styleUrls: ['./Sys_Domains.component.css']
})
export class Sys_DomainsComponent implements OnInit {

  @ViewChild('Sys_DomainsSort') Sys_DomainsSort: MatSort;
  @ViewChild('Sys_DomainsPaginator') Sys_DomainsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_DomainsService: Sys_DomainsService,
  ) { }

  ngOnInit(): void {
    this.Sys_DomainsSearch();
  }

  Sys_DomainsSearch() {
    this.Sys_DomainsService.SearchAll(this.Sys_DomainsSort, this.Sys_DomainsPaginator);
  }
  Sys_DomainsSave(element: Sys_Domains) {
    this.Sys_DomainsService.FormData = element;
    this.NotificationService.warn(this.Sys_DomainsService.ComponentSaveAll(this.Sys_DomainsSort, this.Sys_DomainsPaginator));
  }
  Sys_DomainsDelete(element: Sys_Domains) {
    this.Sys_DomainsService.FormData = element;
    this.NotificationService.warn(this.Sys_DomainsService.ComponentDeleteAll(this.Sys_DomainsSort, this.Sys_DomainsPaginator));
  }
}
