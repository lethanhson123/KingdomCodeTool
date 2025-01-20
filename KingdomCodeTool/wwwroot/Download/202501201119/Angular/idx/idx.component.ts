import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { idx } from 'src/app/shared/_eHospital_DongNai_A_System/idx.model';
import { idxService } from 'src/app/shared/_eHospital_DongNai_A_System/idx.service';

@Component({
  selector: 'app-idx',
  templateUrl: './idx.component.html',
  styleUrls: ['./idx.component.css']
})
export class idxComponent implements OnInit {

  @ViewChild('idxSort') idxSort: MatSort;
  @ViewChild('idxPaginator') idxPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public idxService: idxService,
  ) { }

  ngOnInit(): void {
    this.idxSearch();
  }

  idxSearch() {
    this.idxService.SearchAll(this.idxSort, this.idxPaginator);
  }
  idxSave(element: idx) {
    this.idxService.FormData = element;
    this.NotificationService.warn(this.idxService.ComponentSaveAll(this.idxSort, this.idxPaginator));
  }
  idxDelete(element: idx) {
    this.idxService.FormData = element;
    this.NotificationService.warn(this.idxService.ComponentDeleteAll(this.idxSort, this.idxPaginator));
  }
}
