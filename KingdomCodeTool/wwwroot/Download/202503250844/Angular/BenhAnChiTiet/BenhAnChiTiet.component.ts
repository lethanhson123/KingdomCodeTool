import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { BenhAnChiTiet } from 'src/app/shared/eHospital_DongNai_A/BenhAnChiTiet.model';
import { BenhAnChiTietService } from 'src/app/shared/eHospital_DongNai_A/BenhAnChiTiet.service';

@Component({
  selector: 'app-BenhAnChiTiet',
  templateUrl: './BenhAnChiTiet.component.html',
  styleUrls: ['./BenhAnChiTiet.component.css']
})
export class BenhAnChiTietComponent implements OnInit {

  @ViewChild('BenhAnChiTietSort') BenhAnChiTietSort: MatSort;
  @ViewChild('BenhAnChiTietPaginator') BenhAnChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public BenhAnChiTietService: BenhAnChiTietService,
  ) { }

  ngOnInit(): void {
    this.BenhAnChiTietSearch();
  }

  BenhAnChiTietSearch() {
    this.BenhAnChiTietService.SearchAll(this.BenhAnChiTietSort, this.BenhAnChiTietPaginator);
  }
  BenhAnChiTietSave(element: BenhAnChiTiet) {
    this.BenhAnChiTietService.FormData = element;
    this.NotificationService.warn(this.BenhAnChiTietService.ComponentSaveAll(this.BenhAnChiTietSort, this.BenhAnChiTietPaginator));
  }
  BenhAnChiTietDelete(element: BenhAnChiTiet) {
    this.BenhAnChiTietService.FormData = element;
    this.NotificationService.warn(this.BenhAnChiTietService.ComponentDeleteAll(this.BenhAnChiTietSort, this.BenhAnChiTietPaginator));
  }
}
