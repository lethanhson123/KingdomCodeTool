import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { DanhMucDonViTinh } from 'src/app/shared/DanhMucDonViTinh.model';
import { DanhMucDonViTinhService } from 'src/app/shared/DanhMucDonViTinh.service';

@Component({
  selector: 'app-DanhMucDonViTinh',
  templateUrl: './DanhMucDonViTinh.component.html',
  styleUrls: ['./DanhMucDonViTinh.component.css']
})
export class DanhMucDonViTinhComponent implements OnInit {

  @ViewChild('DanhMucDonViTinhSort') DanhMucDonViTinhSort: MatSort;
  @ViewChild('DanhMucDonViTinhPaginator') DanhMucDonViTinhPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucDonViTinhService: DanhMucDonViTinhService,
  ) { }

  ngOnInit(): void {
    this.DanhMucDonViTinhSearch();
  }

  DanhMucDonViTinhSearch() {
    this.DanhMucDonViTinhService.SearchAll(this.DanhMucDonViTinhSort, this.DanhMucDonViTinhPaginator);
  }
  DanhMucDonViTinhSave(element: DanhMucDonViTinh) {
    this.DanhMucDonViTinhService.FormData = element;
    this.NotificationService.warn(this.DanhMucDonViTinhService.ComponentSaveAll(this.DanhMucDonViTinhSort, this.DanhMucDonViTinhPaginator));
  }
  DanhMucDonViTinhDelete(element: DanhMucDonViTinh) {
    this.DanhMucDonViTinhService.FormData = element;
    this.NotificationService.warn(this.DanhMucDonViTinhService.ComponentDeleteAll(this.DanhMucDonViTinhSort, this.DanhMucDonViTinhPaginator));
  }
}
