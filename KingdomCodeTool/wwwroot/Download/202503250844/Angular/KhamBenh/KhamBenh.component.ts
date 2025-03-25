import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { KhamBenh } from 'src/app/shared/eHospital_DongNai_A/KhamBenh.model';
import { KhamBenhService } from 'src/app/shared/eHospital_DongNai_A/KhamBenh.service';

@Component({
  selector: 'app-KhamBenh',
  templateUrl: './KhamBenh.component.html',
  styleUrls: ['./KhamBenh.component.css']
})
export class KhamBenhComponent implements OnInit {

  @ViewChild('KhamBenhSort') KhamBenhSort: MatSort;
  @ViewChild('KhamBenhPaginator') KhamBenhPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public KhamBenhService: KhamBenhService,
  ) { }

  ngOnInit(): void {
    this.KhamBenhSearch();
  }

  KhamBenhSearch() {
    this.KhamBenhService.SearchAll(this.KhamBenhSort, this.KhamBenhPaginator);
  }
  KhamBenhSave(element: KhamBenh) {
    this.KhamBenhService.FormData = element;
    this.NotificationService.warn(this.KhamBenhService.ComponentSaveAll(this.KhamBenhSort, this.KhamBenhPaginator));
  }
  KhamBenhDelete(element: KhamBenh) {
    this.KhamBenhService.FormData = element;
    this.NotificationService.warn(this.KhamBenhService.ComponentDeleteAll(this.KhamBenhSort, this.KhamBenhPaginator));
  }
}
