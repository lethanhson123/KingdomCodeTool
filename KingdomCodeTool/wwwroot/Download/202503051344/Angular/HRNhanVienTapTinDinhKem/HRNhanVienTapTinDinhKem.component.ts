import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRNhanVienTapTinDinhKem } from 'src/app/shared/HRNhanVienTapTinDinhKem.model';
import { HRNhanVienTapTinDinhKemService } from 'src/app/shared/HRNhanVienTapTinDinhKem.service';

@Component({
  selector: 'app-HRNhanVienTapTinDinhKem',
  templateUrl: './HRNhanVienTapTinDinhKem.component.html',
  styleUrls: ['./HRNhanVienTapTinDinhKem.component.css']
})
export class HRNhanVienTapTinDinhKemComponent implements OnInit {

  @ViewChild('HRNhanVienTapTinDinhKemSort') HRNhanVienTapTinDinhKemSort: MatSort;
  @ViewChild('HRNhanVienTapTinDinhKemPaginator') HRNhanVienTapTinDinhKemPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRNhanVienTapTinDinhKemService: HRNhanVienTapTinDinhKemService,
  ) { }

  ngOnInit(): void {
    this.HRNhanVienTapTinDinhKemSearch();
  }

  HRNhanVienTapTinDinhKemSearch() {
    this.HRNhanVienTapTinDinhKemService.SearchAll(this.HRNhanVienTapTinDinhKemSort, this.HRNhanVienTapTinDinhKemPaginator);
  }
  HRNhanVienTapTinDinhKemSave(element: HRNhanVienTapTinDinhKem) {
    this.HRNhanVienTapTinDinhKemService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienTapTinDinhKemService.ComponentSaveAll(this.HRNhanVienTapTinDinhKemSort, this.HRNhanVienTapTinDinhKemPaginator));
  }
  HRNhanVienTapTinDinhKemDelete(element: HRNhanVienTapTinDinhKem) {
    this.HRNhanVienTapTinDinhKemService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienTapTinDinhKemService.ComponentDeleteAll(this.HRNhanVienTapTinDinhKemSort, this.HRNhanVienTapTinDinhKemPaginator));
  }
}
