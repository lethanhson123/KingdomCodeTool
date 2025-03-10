import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { DanhMucChamCong } from 'src/app/shared/DanhMucChamCong.model';
import { DanhMucChamCongService } from 'src/app/shared/DanhMucChamCong.service';

@Component({
  selector: 'app-DanhMucChamCong',
  templateUrl: './DanhMucChamCong.component.html',
  styleUrls: ['./DanhMucChamCong.component.css']
})
export class DanhMucChamCongComponent implements OnInit {

  @ViewChild('DanhMucChamCongSort') DanhMucChamCongSort: MatSort;
  @ViewChild('DanhMucChamCongPaginator') DanhMucChamCongPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucChamCongService: DanhMucChamCongService,
  ) { }

  ngOnInit(): void {
    this.DanhMucChamCongSearch();
  }

  DanhMucChamCongSearch() {
    this.DanhMucChamCongService.SearchAll(this.DanhMucChamCongSort, this.DanhMucChamCongPaginator);
  }
  DanhMucChamCongSave(element: DanhMucChamCong) {
    this.DanhMucChamCongService.FormData = element;
    this.NotificationService.warn(this.DanhMucChamCongService.ComponentSaveAll(this.DanhMucChamCongSort, this.DanhMucChamCongPaginator));
  }
  DanhMucChamCongDelete(element: DanhMucChamCong) {
    this.DanhMucChamCongService.FormData = element;
    this.NotificationService.warn(this.DanhMucChamCongService.ComponentDeleteAll(this.DanhMucChamCongSort, this.DanhMucChamCongPaginator));
  }
}
