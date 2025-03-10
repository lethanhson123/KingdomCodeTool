import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { DanhMucMayChamCong } from 'src/app/shared/DanhMucMayChamCong.model';
import { DanhMucMayChamCongService } from 'src/app/shared/DanhMucMayChamCong.service';

@Component({
  selector: 'app-DanhMucMayChamCong',
  templateUrl: './DanhMucMayChamCong.component.html',
  styleUrls: ['./DanhMucMayChamCong.component.css']
})
export class DanhMucMayChamCongComponent implements OnInit {

  @ViewChild('DanhMucMayChamCongSort') DanhMucMayChamCongSort: MatSort;
  @ViewChild('DanhMucMayChamCongPaginator') DanhMucMayChamCongPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucMayChamCongService: DanhMucMayChamCongService,
  ) { }

  ngOnInit(): void {
    this.DanhMucMayChamCongSearch();
  }

  DanhMucMayChamCongSearch() {
    this.DanhMucMayChamCongService.SearchAll(this.DanhMucMayChamCongSort, this.DanhMucMayChamCongPaginator);
  }
  DanhMucMayChamCongSave(element: DanhMucMayChamCong) {
    this.DanhMucMayChamCongService.FormData = element;
    this.NotificationService.warn(this.DanhMucMayChamCongService.ComponentSaveAll(this.DanhMucMayChamCongSort, this.DanhMucMayChamCongPaginator));
  }
  DanhMucMayChamCongDelete(element: DanhMucMayChamCong) {
    this.DanhMucMayChamCongService.FormData = element;
    this.NotificationService.warn(this.DanhMucMayChamCongService.ComponentDeleteAll(this.DanhMucMayChamCongSort, this.DanhMucMayChamCongPaginator));
  }
}
