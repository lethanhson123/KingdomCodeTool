import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HoaDonChiTiet } from 'src/app/shared/eHospital_DongNai_A/HoaDonChiTiet.model';
import { HoaDonChiTietService } from 'src/app/shared/eHospital_DongNai_A/HoaDonChiTiet.service';

@Component({
  selector: 'app-HoaDonChiTiet',
  templateUrl: './HoaDonChiTiet.component.html',
  styleUrls: ['./HoaDonChiTiet.component.css']
})
export class HoaDonChiTietComponent implements OnInit {

  @ViewChild('HoaDonChiTietSort') HoaDonChiTietSort: MatSort;
  @ViewChild('HoaDonChiTietPaginator') HoaDonChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HoaDonChiTietService: HoaDonChiTietService,
  ) { }

  ngOnInit(): void {
    this.HoaDonChiTietSearch();
  }

  HoaDonChiTietSearch() {
    this.HoaDonChiTietService.SearchAll(this.HoaDonChiTietSort, this.HoaDonChiTietPaginator);
  }
  HoaDonChiTietSave(element: HoaDonChiTiet) {
    this.HoaDonChiTietService.FormData = element;
    this.NotificationService.warn(this.HoaDonChiTietService.ComponentSaveAll(this.HoaDonChiTietSort, this.HoaDonChiTietPaginator));
  }
  HoaDonChiTietDelete(element: HoaDonChiTiet) {
    this.HoaDonChiTietService.FormData = element;
    this.NotificationService.warn(this.HoaDonChiTietService.ComponentDeleteAll(this.HoaDonChiTietSort, this.HoaDonChiTietPaginator));
  }
}
