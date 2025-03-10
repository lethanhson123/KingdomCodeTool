import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRNhanVienThanhVien } from 'src/app/shared/HRNhanVienThanhVien.model';
import { HRNhanVienThanhVienService } from 'src/app/shared/HRNhanVienThanhVien.service';

@Component({
  selector: 'app-HRNhanVienThanhVien',
  templateUrl: './HRNhanVienThanhVien.component.html',
  styleUrls: ['./HRNhanVienThanhVien.component.css']
})
export class HRNhanVienThanhVienComponent implements OnInit {

  @ViewChild('HRNhanVienThanhVienSort') HRNhanVienThanhVienSort: MatSort;
  @ViewChild('HRNhanVienThanhVienPaginator') HRNhanVienThanhVienPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRNhanVienThanhVienService: HRNhanVienThanhVienService,
  ) { }

  ngOnInit(): void {
    this.HRNhanVienThanhVienSearch();
  }

  HRNhanVienThanhVienSearch() {
    this.HRNhanVienThanhVienService.SearchAll(this.HRNhanVienThanhVienSort, this.HRNhanVienThanhVienPaginator);
  }
  HRNhanVienThanhVienSave(element: HRNhanVienThanhVien) {
    this.HRNhanVienThanhVienService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienThanhVienService.ComponentSaveAll(this.HRNhanVienThanhVienSort, this.HRNhanVienThanhVienPaginator));
  }
  HRNhanVienThanhVienDelete(element: HRNhanVienThanhVien) {
    this.HRNhanVienThanhVienService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienThanhVienService.ComponentDeleteAll(this.HRNhanVienThanhVienSort, this.HRNhanVienThanhVienPaginator));
  }
}
