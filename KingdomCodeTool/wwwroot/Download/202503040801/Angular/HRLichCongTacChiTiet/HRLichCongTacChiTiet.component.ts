import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRLichCongTacChiTiet } from 'src/app/shared/HRLichCongTacChiTiet.model';
import { HRLichCongTacChiTietService } from 'src/app/shared/HRLichCongTacChiTiet.service';

@Component({
  selector: 'app-HRLichCongTacChiTiet',
  templateUrl: './HRLichCongTacChiTiet.component.html',
  styleUrls: ['./HRLichCongTacChiTiet.component.css']
})
export class HRLichCongTacChiTietComponent implements OnInit {

  @ViewChild('HRLichCongTacChiTietSort') HRLichCongTacChiTietSort: MatSort;
  @ViewChild('HRLichCongTacChiTietPaginator') HRLichCongTacChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRLichCongTacChiTietService: HRLichCongTacChiTietService,
  ) { }

  ngOnInit(): void {
    this.HRLichCongTacChiTietSearch();
  }

  HRLichCongTacChiTietSearch() {
    this.HRLichCongTacChiTietService.SearchAll(this.HRLichCongTacChiTietSort, this.HRLichCongTacChiTietPaginator);
  }
  HRLichCongTacChiTietSave(element: HRLichCongTacChiTiet) {
    this.HRLichCongTacChiTietService.FormData = element;
    this.NotificationService.warn(this.HRLichCongTacChiTietService.ComponentSaveAll(this.HRLichCongTacChiTietSort, this.HRLichCongTacChiTietPaginator));
  }
  HRLichCongTacChiTietDelete(element: HRLichCongTacChiTiet) {
    this.HRLichCongTacChiTietService.FormData = element;
    this.NotificationService.warn(this.HRLichCongTacChiTietService.ComponentDeleteAll(this.HRLichCongTacChiTietSort, this.HRLichCongTacChiTietPaginator));
  }
}
