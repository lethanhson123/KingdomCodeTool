import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRNhanVien } from 'src/app/shared/HRNhanVien.model';
import { HRNhanVienService } from 'src/app/shared/HRNhanVien.service';

@Component({
  selector: 'app-HRNhanVien',
  templateUrl: './HRNhanVien.component.html',
  styleUrls: ['./HRNhanVien.component.css']
})
export class HRNhanVienComponent implements OnInit {

  @ViewChild('HRNhanVienSort') HRNhanVienSort: MatSort;
  @ViewChild('HRNhanVienPaginator') HRNhanVienPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRNhanVienService: HRNhanVienService,
  ) { }

  ngOnInit(): void {
    this.HRNhanVienSearch();
  }

  HRNhanVienSearch() {
    this.HRNhanVienService.SearchAll(this.HRNhanVienSort, this.HRNhanVienPaginator);
  }
  HRNhanVienSave(element: HRNhanVien) {
    this.HRNhanVienService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienService.ComponentSaveAll(this.HRNhanVienSort, this.HRNhanVienPaginator));
  }
  HRNhanVienDelete(element: HRNhanVien) {
    this.HRNhanVienService.FormData = element;
    this.NotificationService.warn(this.HRNhanVienService.ComponentDeleteAll(this.HRNhanVienSort, this.HRNhanVienPaginator));
  }
}
