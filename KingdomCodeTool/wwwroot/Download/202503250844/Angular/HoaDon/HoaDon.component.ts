import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HoaDon } from 'src/app/shared/eHospital_DongNai_A/HoaDon.model';
import { HoaDonService } from 'src/app/shared/eHospital_DongNai_A/HoaDon.service';

@Component({
  selector: 'app-HoaDon',
  templateUrl: './HoaDon.component.html',
  styleUrls: ['./HoaDon.component.css']
})
export class HoaDonComponent implements OnInit {

  @ViewChild('HoaDonSort') HoaDonSort: MatSort;
  @ViewChild('HoaDonPaginator') HoaDonPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HoaDonService: HoaDonService,
  ) { }

  ngOnInit(): void {
    this.HoaDonSearch();
  }

  HoaDonSearch() {
    this.HoaDonService.SearchAll(this.HoaDonSort, this.HoaDonPaginator);
  }
  HoaDonSave(element: HoaDon) {
    this.HoaDonService.FormData = element;
    this.NotificationService.warn(this.HoaDonService.ComponentSaveAll(this.HoaDonSort, this.HoaDonPaginator));
  }
  HoaDonDelete(element: HoaDon) {
    this.HoaDonService.FormData = element;
    this.NotificationService.warn(this.HoaDonService.ComponentDeleteAll(this.HoaDonSort, this.HoaDonPaginator));
  }
}
