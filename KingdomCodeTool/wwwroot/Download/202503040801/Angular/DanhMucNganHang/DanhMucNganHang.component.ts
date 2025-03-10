import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { DanhMucNganHang } from 'src/app/shared/DanhMucNganHang.model';
import { DanhMucNganHangService } from 'src/app/shared/DanhMucNganHang.service';

@Component({
  selector: 'app-DanhMucNganHang',
  templateUrl: './DanhMucNganHang.component.html',
  styleUrls: ['./DanhMucNganHang.component.css']
})
export class DanhMucNganHangComponent implements OnInit {

  @ViewChild('DanhMucNganHangSort') DanhMucNganHangSort: MatSort;
  @ViewChild('DanhMucNganHangPaginator') DanhMucNganHangPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucNganHangService: DanhMucNganHangService,
  ) { }

  ngOnInit(): void {
    this.DanhMucNganHangSearch();
  }

  DanhMucNganHangSearch() {
    this.DanhMucNganHangService.SearchAll(this.DanhMucNganHangSort, this.DanhMucNganHangPaginator);
  }
  DanhMucNganHangSave(element: DanhMucNganHang) {
    this.DanhMucNganHangService.FormData = element;
    this.NotificationService.warn(this.DanhMucNganHangService.ComponentSaveAll(this.DanhMucNganHangSort, this.DanhMucNganHangPaginator));
  }
  DanhMucNganHangDelete(element: DanhMucNganHang) {
    this.DanhMucNganHangService.FormData = element;
    this.NotificationService.warn(this.DanhMucNganHangService.ComponentDeleteAll(this.DanhMucNganHangSort, this.DanhMucNganHangPaginator));
  }
}
