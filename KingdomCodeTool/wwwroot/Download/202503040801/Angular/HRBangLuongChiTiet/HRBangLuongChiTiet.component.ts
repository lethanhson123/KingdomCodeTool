import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRBangLuongChiTiet } from 'src/app/shared/HRBangLuongChiTiet.model';
import { HRBangLuongChiTietService } from 'src/app/shared/HRBangLuongChiTiet.service';

@Component({
  selector: 'app-HRBangLuongChiTiet',
  templateUrl: './HRBangLuongChiTiet.component.html',
  styleUrls: ['./HRBangLuongChiTiet.component.css']
})
export class HRBangLuongChiTietComponent implements OnInit {

  @ViewChild('HRBangLuongChiTietSort') HRBangLuongChiTietSort: MatSort;
  @ViewChild('HRBangLuongChiTietPaginator') HRBangLuongChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRBangLuongChiTietService: HRBangLuongChiTietService,
  ) { }

  ngOnInit(): void {
    this.HRBangLuongChiTietSearch();
  }

  HRBangLuongChiTietSearch() {
    this.HRBangLuongChiTietService.SearchAll(this.HRBangLuongChiTietSort, this.HRBangLuongChiTietPaginator);
  }
  HRBangLuongChiTietSave(element: HRBangLuongChiTiet) {
    this.HRBangLuongChiTietService.FormData = element;
    this.NotificationService.warn(this.HRBangLuongChiTietService.ComponentSaveAll(this.HRBangLuongChiTietSort, this.HRBangLuongChiTietPaginator));
  }
  HRBangLuongChiTietDelete(element: HRBangLuongChiTiet) {
    this.HRBangLuongChiTietService.FormData = element;
    this.NotificationService.warn(this.HRBangLuongChiTietService.ComponentDeleteAll(this.HRBangLuongChiTietSort, this.HRBangLuongChiTietPaginator));
  }
}
