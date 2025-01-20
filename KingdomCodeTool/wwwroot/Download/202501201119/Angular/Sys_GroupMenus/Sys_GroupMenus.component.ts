import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_GroupMenus } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_GroupMenus.model';
import { Sys_GroupMenusService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_GroupMenus.service';

@Component({
  selector: 'app-Sys_GroupMenus',
  templateUrl: './Sys_GroupMenus.component.html',
  styleUrls: ['./Sys_GroupMenus.component.css']
})
export class Sys_GroupMenusComponent implements OnInit {

  @ViewChild('Sys_GroupMenusSort') Sys_GroupMenusSort: MatSort;
  @ViewChild('Sys_GroupMenusPaginator') Sys_GroupMenusPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_GroupMenusService: Sys_GroupMenusService,
  ) { }

  ngOnInit(): void {
    this.Sys_GroupMenusSearch();
  }

  Sys_GroupMenusSearch() {
    this.Sys_GroupMenusService.SearchAll(this.Sys_GroupMenusSort, this.Sys_GroupMenusPaginator);
  }
  Sys_GroupMenusSave(element: Sys_GroupMenus) {
    this.Sys_GroupMenusService.FormData = element;
    this.NotificationService.warn(this.Sys_GroupMenusService.ComponentSaveAll(this.Sys_GroupMenusSort, this.Sys_GroupMenusPaginator));
  }
  Sys_GroupMenusDelete(element: Sys_GroupMenus) {
    this.Sys_GroupMenusService.FormData = element;
    this.NotificationService.warn(this.Sys_GroupMenusService.ComponentDeleteAll(this.Sys_GroupMenusSort, this.Sys_GroupMenusPaginator));
  }
}
