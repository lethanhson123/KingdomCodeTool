import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRBangLuong } from 'src/app/shared/HRBangLuong.model';
import { HRBangLuongService } from 'src/app/shared/HRBangLuong.service';

@Component({
  selector: 'app-HRBangLuong',
  templateUrl: './HRBangLuong.component.html',
  styleUrls: ['./HRBangLuong.component.css']
})
export class HRBangLuongComponent implements OnInit {

  @ViewChild('HRBangLuongSort') HRBangLuongSort: MatSort;
  @ViewChild('HRBangLuongPaginator') HRBangLuongPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRBangLuongService: HRBangLuongService,
  ) { }

  ngOnInit(): void {
    this.HRBangLuongSearch();
  }

  HRBangLuongSearch() {
    this.HRBangLuongService.SearchAll(this.HRBangLuongSort, this.HRBangLuongPaginator);
  }
  HRBangLuongSave(element: HRBangLuong) {
    this.HRBangLuongService.FormData = element;
    this.NotificationService.warn(this.HRBangLuongService.ComponentSaveAll(this.HRBangLuongSort, this.HRBangLuongPaginator));
  }
  HRBangLuongDelete(element: HRBangLuong) {
    this.HRBangLuongService.FormData = element;
    this.NotificationService.warn(this.HRBangLuongService.ComponentDeleteAll(this.HRBangLuongSort, this.HRBangLuongPaginator));
  }
}
