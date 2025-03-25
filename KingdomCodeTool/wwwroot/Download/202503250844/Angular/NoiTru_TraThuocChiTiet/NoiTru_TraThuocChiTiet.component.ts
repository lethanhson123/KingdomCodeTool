import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_TraThuocChiTiet } from 'src/app/shared/eHospital_DongNai_A/NoiTru_TraThuocChiTiet.model';
import { NoiTru_TraThuocChiTietService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_TraThuocChiTiet.service';

@Component({
  selector: 'app-NoiTru_TraThuocChiTiet',
  templateUrl: './NoiTru_TraThuocChiTiet.component.html',
  styleUrls: ['./NoiTru_TraThuocChiTiet.component.css']
})
export class NoiTru_TraThuocChiTietComponent implements OnInit {

  @ViewChild('NoiTru_TraThuocChiTietSort') NoiTru_TraThuocChiTietSort: MatSort;
  @ViewChild('NoiTru_TraThuocChiTietPaginator') NoiTru_TraThuocChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_TraThuocChiTietService: NoiTru_TraThuocChiTietService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_TraThuocChiTietSearch();
  }

  NoiTru_TraThuocChiTietSearch() {
    this.NoiTru_TraThuocChiTietService.SearchAll(this.NoiTru_TraThuocChiTietSort, this.NoiTru_TraThuocChiTietPaginator);
  }
  NoiTru_TraThuocChiTietSave(element: NoiTru_TraThuocChiTiet) {
    this.NoiTru_TraThuocChiTietService.FormData = element;
    this.NotificationService.warn(this.NoiTru_TraThuocChiTietService.ComponentSaveAll(this.NoiTru_TraThuocChiTietSort, this.NoiTru_TraThuocChiTietPaginator));
  }
  NoiTru_TraThuocChiTietDelete(element: NoiTru_TraThuocChiTiet) {
    this.NoiTru_TraThuocChiTietService.FormData = element;
    this.NotificationService.warn(this.NoiTru_TraThuocChiTietService.ComponentDeleteAll(this.NoiTru_TraThuocChiTietSort, this.NoiTru_TraThuocChiTietPaginator));
  }
}
