import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRNhanVienPhuCap } from 'src/app/shared/HRNhanVienPhuCap.model';
import { HRNhanVienPhuCapService } from 'src/app/shared/HRNhanVienPhuCap.service';

@Component({
  selector: 'app-HRNhanVienPhuCap',
  templateUrl: './HRNhanVienPhuCap.component.html',
  styleUrls: ['./HRNhanVienPhuCap.component.css']
})
export class HRNhanVienPhuCapComponent implements OnInit {

  @ViewChild('HRNhanVienPhuCapSort') HRNhanVienPhuCapSort: MatSort;
  @ViewChild('HRNhanVienPhuCapPaginator') HRNhanVienPhuCapPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRNhanVienPhuCapService: HRNhanVienPhuCapService,
  ) { }

  ngOnInit(): void {
    this.HRNhanVienPhuCapSearch();
  }

  HRNhanVienPhuCapSearch() {
    this.HRNhanVienPhuCapService.SearchAll(this.HRNhanVienPhuCapSort, this.HRNhanVienPhuCapPaginator);
  }
  HRNhanVienPhuCapSave(element: HRNhanVienPhuCap) {
    this.HRNhanVienPhuCapService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienPhuCapService.ComponentSaveAll(this.HRNhanVienPhuCapSort, this.HRNhanVienPhuCapPaginator));
  }
  HRNhanVienPhuCapDelete(element: HRNhanVienPhuCap) {
    this.HRNhanVienPhuCapService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienPhuCapService.ComponentDeleteAll(this.HRNhanVienPhuCapSort, this.HRNhanVienPhuCapPaginator));
  }
}
