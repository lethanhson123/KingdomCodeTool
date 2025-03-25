import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_NhapVien } from 'src/app/shared/eHospital_DongNai_A/NoiTru_NhapVien.model';
import { NoiTru_NhapVienService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_NhapVien.service';

@Component({
  selector: 'app-NoiTru_NhapVien',
  templateUrl: './NoiTru_NhapVien.component.html',
  styleUrls: ['./NoiTru_NhapVien.component.css']
})
export class NoiTru_NhapVienComponent implements OnInit {

  @ViewChild('NoiTru_NhapVienSort') NoiTru_NhapVienSort: MatSort;
  @ViewChild('NoiTru_NhapVienPaginator') NoiTru_NhapVienPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_NhapVienService: NoiTru_NhapVienService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_NhapVienSearch();
  }

  NoiTru_NhapVienSearch() {
    this.NoiTru_NhapVienService.SearchAll(this.NoiTru_NhapVienSort, this.NoiTru_NhapVienPaginator);
  }
  NoiTru_NhapVienSave(element: NoiTru_NhapVien) {
    this.NoiTru_NhapVienService.FormData = element;
    this.NotificationService.warn(this.NoiTru_NhapVienService.ComponentSaveAll(this.NoiTru_NhapVienSort, this.NoiTru_NhapVienPaginator));
  }
  NoiTru_NhapVienDelete(element: NoiTru_NhapVien) {
    this.NoiTru_NhapVienService.FormData = element;
    this.NotificationService.warn(this.NoiTru_NhapVienService.ComponentDeleteAll(this.NoiTru_NhapVienSort, this.NoiTru_NhapVienPaginator));
  }
}
