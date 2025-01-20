import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Controls } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Controls.model';
import { Sys_ControlsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Controls.service';

@Component({
  selector: 'app-Sys_Controls',
  templateUrl: './Sys_Controls.component.html',
  styleUrls: ['./Sys_Controls.component.css']
})
export class Sys_ControlsComponent implements OnInit {

  @ViewChild('Sys_ControlsSort') Sys_ControlsSort: MatSort;
  @ViewChild('Sys_ControlsPaginator') Sys_ControlsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ControlsService: Sys_ControlsService,
  ) { }

  ngOnInit(): void {
    this.Sys_ControlsSearch();
  }

  Sys_ControlsSearch() {
    this.Sys_ControlsService.SearchAll(this.Sys_ControlsSort, this.Sys_ControlsPaginator);
  }
  Sys_ControlsSave(element: Sys_Controls) {
    this.Sys_ControlsService.FormData = element;
    this.NotificationService.warn(this.Sys_ControlsService.ComponentSaveAll(this.Sys_ControlsSort, this.Sys_ControlsPaginator));
  }
  Sys_ControlsDelete(element: Sys_Controls) {
    this.Sys_ControlsService.FormData = element;
    this.NotificationService.warn(this.Sys_ControlsService.ComponentDeleteAll(this.Sys_ControlsSort, this.Sys_ControlsPaginator));
  }
}
