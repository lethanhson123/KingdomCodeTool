import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_List_SourceFile } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_List_SourceFile.model';
import { Sys_List_SourceFileService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_List_SourceFile.service';

@Component({
  selector: 'app-Sys_List_SourceFile',
  templateUrl: './Sys_List_SourceFile.component.html',
  styleUrls: ['./Sys_List_SourceFile.component.css']
})
export class Sys_List_SourceFileComponent implements OnInit {

  @ViewChild('Sys_List_SourceFileSort') Sys_List_SourceFileSort: MatSort;
  @ViewChild('Sys_List_SourceFilePaginator') Sys_List_SourceFilePaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_List_SourceFileService: Sys_List_SourceFileService,
  ) { }

  ngOnInit(): void {
    this.Sys_List_SourceFileSearch();
  }

  Sys_List_SourceFileSearch() {
    this.Sys_List_SourceFileService.SearchAll(this.Sys_List_SourceFileSort, this.Sys_List_SourceFilePaginator);
  }
  Sys_List_SourceFileSave(element: Sys_List_SourceFile) {
    this.Sys_List_SourceFileService.FormData = element;
    this.NotificationService.warn(this.Sys_List_SourceFileService.ComponentSaveAll(this.Sys_List_SourceFileSort, this.Sys_List_SourceFilePaginator));
  }
  Sys_List_SourceFileDelete(element: Sys_List_SourceFile) {
    this.Sys_List_SourceFileService.FormData = element;
    this.NotificationService.warn(this.Sys_List_SourceFileService.ComponentDeleteAll(this.Sys_List_SourceFileSort, this.Sys_List_SourceFilePaginator));
  }
}
