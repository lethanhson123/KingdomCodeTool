import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Value_Languages } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Value_Languages.model';
import { Sys_Value_LanguagesService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Value_Languages.service';

@Component({
  selector: 'app-Sys_Value_Languages',
  templateUrl: './Sys_Value_Languages.component.html',
  styleUrls: ['./Sys_Value_Languages.component.css']
})
export class Sys_Value_LanguagesComponent implements OnInit {

  @ViewChild('Sys_Value_LanguagesSort') Sys_Value_LanguagesSort: MatSort;
  @ViewChild('Sys_Value_LanguagesPaginator') Sys_Value_LanguagesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_Value_LanguagesService: Sys_Value_LanguagesService,
  ) { }

  ngOnInit(): void {
    this.Sys_Value_LanguagesSearch();
  }

  Sys_Value_LanguagesSearch() {
    this.Sys_Value_LanguagesService.SearchAll(this.Sys_Value_LanguagesSort, this.Sys_Value_LanguagesPaginator);
  }
  Sys_Value_LanguagesSave(element: Sys_Value_Languages) {
    this.Sys_Value_LanguagesService.FormData = element;
    this.NotificationService.warn(this.Sys_Value_LanguagesService.ComponentSaveAll(this.Sys_Value_LanguagesSort, this.Sys_Value_LanguagesPaginator));
  }
  Sys_Value_LanguagesDelete(element: Sys_Value_Languages) {
    this.Sys_Value_LanguagesService.FormData = element;
    this.NotificationService.warn(this.Sys_Value_LanguagesService.ComponentDeleteAll(this.Sys_Value_LanguagesSort, this.Sys_Value_LanguagesPaginator));
  }
}
