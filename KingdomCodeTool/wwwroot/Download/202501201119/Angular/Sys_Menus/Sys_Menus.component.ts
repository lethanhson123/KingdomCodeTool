import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Menus } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Menus.model';
import { Sys_MenusService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Menus.service';

@Component({
  selector: 'app-Sys_Menus',
  templateUrl: './Sys_Menus.component.html',
  styleUrls: ['./Sys_Menus.component.css']
})
export class Sys_MenusComponent implements OnInit {

  @ViewChild('Sys_MenusSort') Sys_MenusSort: MatSort;
  @ViewChild('Sys_MenusPaginator') Sys_MenusPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_MenusService: Sys_MenusService,
  ) { }

  ngOnInit(): void {
    this.Sys_MenusSearch();
  }

  Sys_MenusSearch() {
    this.Sys_MenusService.SearchAll(this.Sys_MenusSort, this.Sys_MenusPaginator);
  }
  Sys_MenusSave(element: Sys_Menus) {
    this.Sys_MenusService.FormData = element;
    this.NotificationService.warn(this.Sys_MenusService.ComponentSaveAll(this.Sys_MenusSort, this.Sys_MenusPaginator));
  }
  Sys_MenusDelete(element: Sys_Menus) {
    this.Sys_MenusService.FormData = element;
    this.NotificationService.warn(this.Sys_MenusService.ComponentDeleteAll(this.Sys_MenusSort, this.Sys_MenusPaginator));
  }
}
