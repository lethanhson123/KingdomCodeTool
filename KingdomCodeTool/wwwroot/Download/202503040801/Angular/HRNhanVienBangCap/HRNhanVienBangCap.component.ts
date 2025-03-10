import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRNhanVienBangCap } from 'src/app/shared/HRNhanVienBangCap.model';
import { HRNhanVienBangCapService } from 'src/app/shared/HRNhanVienBangCap.service';

@Component({
  selector: 'app-HRNhanVienBangCap',
  templateUrl: './HRNhanVienBangCap.component.html',
  styleUrls: ['./HRNhanVienBangCap.component.css']
})
export class HRNhanVienBangCapComponent implements OnInit {

  @ViewChild('HRNhanVienBangCapSort') HRNhanVienBangCapSort: MatSort;
  @ViewChild('HRNhanVienBangCapPaginator') HRNhanVienBangCapPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRNhanVienBangCapService: HRNhanVienBangCapService,
  ) { }

  ngOnInit(): void {
    this.HRNhanVienBangCapSearch();
  }

  HRNhanVienBangCapSearch() {
    this.HRNhanVienBangCapService.SearchAll(this.HRNhanVienBangCapSort, this.HRNhanVienBangCapPaginator);
  }
  HRNhanVienBangCapSave(element: HRNhanVienBangCap) {
    this.HRNhanVienBangCapService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienBangCapService.ComponentSaveAll(this.HRNhanVienBangCapSort, this.HRNhanVienBangCapPaginator));
  }
  HRNhanVienBangCapDelete(element: HRNhanVienBangCap) {
    this.HRNhanVienBangCapService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienBangCapService.ComponentDeleteAll(this.HRNhanVienBangCapSort, this.HRNhanVienBangCapPaginator));
  }
}
