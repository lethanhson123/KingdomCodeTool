import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRChamCongChiTiet } from 'src/app/shared/HRChamCongChiTiet.model';
import { HRChamCongChiTietService } from 'src/app/shared/HRChamCongChiTiet.service';

@Component({
  selector: 'app-HRChamCongChiTiet',
  templateUrl: './HRChamCongChiTiet.component.html',
  styleUrls: ['./HRChamCongChiTiet.component.css']
})
export class HRChamCongChiTietComponent implements OnInit {

  @ViewChild('HRChamCongChiTietSort') HRChamCongChiTietSort: MatSort;
  @ViewChild('HRChamCongChiTietPaginator') HRChamCongChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRChamCongChiTietService: HRChamCongChiTietService,
  ) { }

  ngOnInit(): void {
    this.HRChamCongChiTietSearch();
  }

  HRChamCongChiTietSearch() {
    this.HRChamCongChiTietService.SearchAll(this.HRChamCongChiTietSort, this.HRChamCongChiTietPaginator);
  }
  HRChamCongChiTietSave(element: HRChamCongChiTiet) {
    this.HRChamCongChiTietService.FormData = element;
    this.NotificationService.warn(this.HRChamCongChiTietService.ComponentSaveAll(this.HRChamCongChiTietSort, this.HRChamCongChiTietPaginator));
  }
  HRChamCongChiTietDelete(element: HRChamCongChiTiet) {
    this.HRChamCongChiTietService.FormData = element;
    this.NotificationService.warn(this.HRChamCongChiTietService.ComponentDeleteAll(this.HRChamCongChiTietSort, this.HRChamCongChiTietPaginator));
  }
}
