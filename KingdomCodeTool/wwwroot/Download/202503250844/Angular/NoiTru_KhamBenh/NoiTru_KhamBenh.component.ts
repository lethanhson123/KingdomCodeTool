import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_KhamBenh } from 'src/app/shared/eHospital_DongNai_A/NoiTru_KhamBenh.model';
import { NoiTru_KhamBenhService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_KhamBenh.service';

@Component({
  selector: 'app-NoiTru_KhamBenh',
  templateUrl: './NoiTru_KhamBenh.component.html',
  styleUrls: ['./NoiTru_KhamBenh.component.css']
})
export class NoiTru_KhamBenhComponent implements OnInit {

  @ViewChild('NoiTru_KhamBenhSort') NoiTru_KhamBenhSort: MatSort;
  @ViewChild('NoiTru_KhamBenhPaginator') NoiTru_KhamBenhPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_KhamBenhService: NoiTru_KhamBenhService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_KhamBenhSearch();
  }

  NoiTru_KhamBenhSearch() {
    this.NoiTru_KhamBenhService.SearchAll(this.NoiTru_KhamBenhSort, this.NoiTru_KhamBenhPaginator);
  }
  NoiTru_KhamBenhSave(element: NoiTru_KhamBenh) {
    this.NoiTru_KhamBenhService.FormData = element;
    this.NotificationService.warn(this.NoiTru_KhamBenhService.ComponentSaveAll(this.NoiTru_KhamBenhSort, this.NoiTru_KhamBenhPaginator));
  }
  NoiTru_KhamBenhDelete(element: NoiTru_KhamBenh) {
    this.NoiTru_KhamBenhService.FormData = element;
    this.NotificationService.warn(this.NoiTru_KhamBenhService.ComponentDeleteAll(this.NoiTru_KhamBenhSort, this.NoiTru_KhamBenhPaginator));
  }
}
