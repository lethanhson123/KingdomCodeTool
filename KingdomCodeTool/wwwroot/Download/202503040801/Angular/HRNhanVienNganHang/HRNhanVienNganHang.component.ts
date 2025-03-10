import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRNhanVienNganHang } from 'src/app/shared/HRNhanVienNganHang.model';
import { HRNhanVienNganHangService } from 'src/app/shared/HRNhanVienNganHang.service';

@Component({
  selector: 'app-HRNhanVienNganHang',
  templateUrl: './HRNhanVienNganHang.component.html',
  styleUrls: ['./HRNhanVienNganHang.component.css']
})
export class HRNhanVienNganHangComponent implements OnInit {

  @ViewChild('HRNhanVienNganHangSort') HRNhanVienNganHangSort: MatSort;
  @ViewChild('HRNhanVienNganHangPaginator') HRNhanVienNganHangPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRNhanVienNganHangService: HRNhanVienNganHangService,
  ) { }

  ngOnInit(): void {
    this.HRNhanVienNganHangSearch();
  }

  HRNhanVienNganHangSearch() {
    this.HRNhanVienNganHangService.SearchAll(this.HRNhanVienNganHangSort, this.HRNhanVienNganHangPaginator);
  }
  HRNhanVienNganHangSave(element: HRNhanVienNganHang) {
    this.HRNhanVienNganHangService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienNganHangService.ComponentSaveAll(this.HRNhanVienNganHangSort, this.HRNhanVienNganHangPaginator));
  }
  HRNhanVienNganHangDelete(element: HRNhanVienNganHang) {
    this.HRNhanVienNganHangService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienNganHangService.ComponentDeleteAll(this.HRNhanVienNganHangSort, this.HRNhanVienNganHangPaginator));
  }
}
