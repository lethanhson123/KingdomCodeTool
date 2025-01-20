import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_AutoTexts } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTexts.model';
import { Sys_AutoTextsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_AutoTexts.service';

@Component({
  selector: 'app-Sys_AutoTexts',
  templateUrl: './Sys_AutoTexts.component.html',
  styleUrls: ['./Sys_AutoTexts.component.css']
})
export class Sys_AutoTextsComponent implements OnInit {

  @ViewChild('Sys_AutoTextsSort') Sys_AutoTextsSort: MatSort;
  @ViewChild('Sys_AutoTextsPaginator') Sys_AutoTextsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_AutoTextsService: Sys_AutoTextsService,
  ) { }

  ngOnInit(): void {
    this.Sys_AutoTextsSearch();
  }

  Sys_AutoTextsSearch() {
    this.Sys_AutoTextsService.SearchAll(this.Sys_AutoTextsSort, this.Sys_AutoTextsPaginator);
  }
  Sys_AutoTextsSave(element: Sys_AutoTexts) {
    this.Sys_AutoTextsService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextsService.ComponentSaveAll(this.Sys_AutoTextsSort, this.Sys_AutoTextsPaginator));
  }
  Sys_AutoTextsDelete(element: Sys_AutoTexts) {
    this.Sys_AutoTextsService.FormData = element;
    this.NotificationService.warn(this.Sys_AutoTextsService.ComponentDeleteAll(this.Sys_AutoTextsSort, this.Sys_AutoTextsPaginator));
  }
}
