import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRNhanVienHopDong } from 'src/app/shared/HRNhanVienHopDong.model';
import { HRNhanVienHopDongService } from 'src/app/shared/HRNhanVienHopDong.service';

@Component({
  selector: 'app-HRNhanVienHopDong',
  templateUrl: './HRNhanVienHopDong.component.html',
  styleUrls: ['./HRNhanVienHopDong.component.css']
})
export class HRNhanVienHopDongComponent implements OnInit {

  @ViewChild('HRNhanVienHopDongSort') HRNhanVienHopDongSort: MatSort;
  @ViewChild('HRNhanVienHopDongPaginator') HRNhanVienHopDongPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRNhanVienHopDongService: HRNhanVienHopDongService,
  ) { }

  ngOnInit(): void {
    this.HRNhanVienHopDongSearch();
  }

  HRNhanVienHopDongSearch() {
    this.HRNhanVienHopDongService.SearchAll(this.HRNhanVienHopDongSort, this.HRNhanVienHopDongPaginator);
  }
  HRNhanVienHopDongSave(element: HRNhanVienHopDong) {
    this.HRNhanVienHopDongService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienHopDongService.ComponentSaveAll(this.HRNhanVienHopDongSort, this.HRNhanVienHopDongPaginator));
  }
  HRNhanVienHopDongDelete(element: HRNhanVienHopDong) {
    this.HRNhanVienHopDongService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienHopDongService.ComponentDeleteAll(this.HRNhanVienHopDongSort, this.HRNhanVienHopDongPaginator));
  }
}
