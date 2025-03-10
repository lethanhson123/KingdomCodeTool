import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { DanhMucLuongCoBan } from 'src/app/shared/DanhMucLuongCoBan.model';
import { DanhMucLuongCoBanService } from 'src/app/shared/DanhMucLuongCoBan.service';

@Component({
  selector: 'app-DanhMucLuongCoBan',
  templateUrl: './DanhMucLuongCoBan.component.html',
  styleUrls: ['./DanhMucLuongCoBan.component.css']
})
export class DanhMucLuongCoBanComponent implements OnInit {

  @ViewChild('DanhMucLuongCoBanSort') DanhMucLuongCoBanSort: MatSort;
  @ViewChild('DanhMucLuongCoBanPaginator') DanhMucLuongCoBanPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucLuongCoBanService: DanhMucLuongCoBanService,
  ) { }

  ngOnInit(): void {
    this.DanhMucLuongCoBanSearch();
  }

  DanhMucLuongCoBanSearch() {
    this.DanhMucLuongCoBanService.SearchAll(this.DanhMucLuongCoBanSort, this.DanhMucLuongCoBanPaginator);
  }
  DanhMucLuongCoBanSave(element: DanhMucLuongCoBan) {
    this.DanhMucLuongCoBanService.FormData = element;
    this.NotificationService.warn(this.DanhMucLuongCoBanService.ComponentSaveAll(this.DanhMucLuongCoBanSort, this.DanhMucLuongCoBanPaginator));
  }
  DanhMucLuongCoBanDelete(element: DanhMucLuongCoBan) {
    this.DanhMucLuongCoBanService.FormData = element;
    this.NotificationService.warn(this.DanhMucLuongCoBanService.ComponentDeleteAll(this.DanhMucLuongCoBanSort, this.DanhMucLuongCoBanPaginator));
  }
}
