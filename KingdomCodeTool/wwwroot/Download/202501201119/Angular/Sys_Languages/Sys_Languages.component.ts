import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Languages } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Languages.model';
import { Sys_LanguagesService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Languages.service';

@Component({
  selector: 'app-Sys_Languages',
  templateUrl: './Sys_Languages.component.html',
  styleUrls: ['./Sys_Languages.component.css']
})
export class Sys_LanguagesComponent implements OnInit {

  @ViewChild('Sys_LanguagesSort') Sys_LanguagesSort: MatSort;
  @ViewChild('Sys_LanguagesPaginator') Sys_LanguagesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_LanguagesService: Sys_LanguagesService,
  ) { }

  ngOnInit(): void {
    this.Sys_LanguagesSearch();
  }

  Sys_LanguagesSearch() {
    this.Sys_LanguagesService.SearchAll(this.Sys_LanguagesSort, this.Sys_LanguagesPaginator);
  }
  Sys_LanguagesSave(element: Sys_Languages) {
    this.Sys_LanguagesService.FormData = element;
    this.NotificationService.warn(this.Sys_LanguagesService.ComponentSaveAll(this.Sys_LanguagesSort, this.Sys_LanguagesPaginator));
  }
  Sys_LanguagesDelete(element: Sys_Languages) {
    this.Sys_LanguagesService.FormData = element;
    this.NotificationService.warn(this.Sys_LanguagesService.ComponentDeleteAll(this.Sys_LanguagesSort, this.Sys_LanguagesPaginator));
  }
}
