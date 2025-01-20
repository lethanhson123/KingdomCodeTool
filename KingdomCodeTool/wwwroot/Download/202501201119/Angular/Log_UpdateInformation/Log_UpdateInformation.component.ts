import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Log_UpdateInformation } from 'src/app/shared/_eHospital_DongNai_A_System/Log_UpdateInformation.model';
import { Log_UpdateInformationService } from 'src/app/shared/_eHospital_DongNai_A_System/Log_UpdateInformation.service';

@Component({
  selector: 'app-Log_UpdateInformation',
  templateUrl: './Log_UpdateInformation.component.html',
  styleUrls: ['./Log_UpdateInformation.component.css']
})
export class Log_UpdateInformationComponent implements OnInit {

  @ViewChild('Log_UpdateInformationSort') Log_UpdateInformationSort: MatSort;
  @ViewChild('Log_UpdateInformationPaginator') Log_UpdateInformationPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Log_UpdateInformationService: Log_UpdateInformationService,
  ) { }

  ngOnInit(): void {
    this.Log_UpdateInformationSearch();
  }

  Log_UpdateInformationSearch() {
    this.Log_UpdateInformationService.SearchAll(this.Log_UpdateInformationSort, this.Log_UpdateInformationPaginator);
  }
  Log_UpdateInformationSave(element: Log_UpdateInformation) {
    this.Log_UpdateInformationService.FormData = element;
    this.NotificationService.warn(this.Log_UpdateInformationService.ComponentSaveAll(this.Log_UpdateInformationSort, this.Log_UpdateInformationPaginator));
  }
  Log_UpdateInformationDelete(element: Log_UpdateInformation) {
    this.Log_UpdateInformationService.FormData = element;
    this.NotificationService.warn(this.Log_UpdateInformationService.ComponentDeleteAll(this.Log_UpdateInformationSort, this.Log_UpdateInformationPaginator));
  }
}
