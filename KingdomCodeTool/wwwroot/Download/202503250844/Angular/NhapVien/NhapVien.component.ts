import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NhapVien } from 'src/app/shared/eHospital_DongNai_A/NhapVien.model';
import { NhapVienService } from 'src/app/shared/eHospital_DongNai_A/NhapVien.service';

@Component({
  selector: 'app-NhapVien',
  templateUrl: './NhapVien.component.html',
  styleUrls: ['./NhapVien.component.css']
})
export class NhapVienComponent implements OnInit {

  @ViewChild('NhapVienSort') NhapVienSort: MatSort;
  @ViewChild('NhapVienPaginator') NhapVienPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NhapVienService: NhapVienService,
  ) { }

  ngOnInit(): void {
    this.NhapVienSearch();
  }

  NhapVienSearch() {
    this.NhapVienService.SearchAll(this.NhapVienSort, this.NhapVienPaginator);
  }
  NhapVienSave(element: NhapVien) {
    this.NhapVienService.FormData = element;
    this.NotificationService.warn(this.NhapVienService.ComponentSaveAll(this.NhapVienSort, this.NhapVienPaginator));
  }
  NhapVienDelete(element: NhapVien) {
    this.NhapVienService.FormData = element;
    this.NotificationService.warn(this.NhapVienService.ComponentDeleteAll(this.NhapVienSort, this.NhapVienPaginator));
  }
}
