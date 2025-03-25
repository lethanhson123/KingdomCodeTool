import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSYeuCauChiTiet } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCauChiTiet.model';
import { CLSYeuCauChiTietService } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCauChiTiet.service';

@Component({
  selector: 'app-CLSYeuCauChiTiet',
  templateUrl: './CLSYeuCauChiTiet.component.html',
  styleUrls: ['./CLSYeuCauChiTiet.component.css']
})
export class CLSYeuCauChiTietComponent implements OnInit {

  @ViewChild('CLSYeuCauChiTietSort') CLSYeuCauChiTietSort: MatSort;
  @ViewChild('CLSYeuCauChiTietPaginator') CLSYeuCauChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSYeuCauChiTietService: CLSYeuCauChiTietService,
  ) { }

  ngOnInit(): void {
    this.CLSYeuCauChiTietSearch();
  }

  CLSYeuCauChiTietSearch() {
    this.CLSYeuCauChiTietService.SearchAll(this.CLSYeuCauChiTietSort, this.CLSYeuCauChiTietPaginator);
  }
  CLSYeuCauChiTietSave(element: CLSYeuCauChiTiet) {
    this.CLSYeuCauChiTietService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCauChiTietService.ComponentSaveAll(this.CLSYeuCauChiTietSort, this.CLSYeuCauChiTietPaginator));
  }
  CLSYeuCauChiTietDelete(element: CLSYeuCauChiTiet) {
    this.CLSYeuCauChiTietService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCauChiTietService.ComponentDeleteAll(this.CLSYeuCauChiTietSort, this.CLSYeuCauChiTietPaginator));
  }
}
