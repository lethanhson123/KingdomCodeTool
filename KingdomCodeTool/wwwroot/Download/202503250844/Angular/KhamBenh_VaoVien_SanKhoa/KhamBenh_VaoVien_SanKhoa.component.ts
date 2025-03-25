import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { KhamBenh_VaoVien_SanKhoa } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_VaoVien_SanKhoa.model';
import { KhamBenh_VaoVien_SanKhoaService } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_VaoVien_SanKhoa.service';

@Component({
  selector: 'app-KhamBenh_VaoVien_SanKhoa',
  templateUrl: './KhamBenh_VaoVien_SanKhoa.component.html',
  styleUrls: ['./KhamBenh_VaoVien_SanKhoa.component.css']
})
export class KhamBenh_VaoVien_SanKhoaComponent implements OnInit {

  @ViewChild('KhamBenh_VaoVien_SanKhoaSort') KhamBenh_VaoVien_SanKhoaSort: MatSort;
  @ViewChild('KhamBenh_VaoVien_SanKhoaPaginator') KhamBenh_VaoVien_SanKhoaPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public KhamBenh_VaoVien_SanKhoaService: KhamBenh_VaoVien_SanKhoaService,
  ) { }

  ngOnInit(): void {
    this.KhamBenh_VaoVien_SanKhoaSearch();
  }

  KhamBenh_VaoVien_SanKhoaSearch() {
    this.KhamBenh_VaoVien_SanKhoaService.SearchAll(this.KhamBenh_VaoVien_SanKhoaSort, this.KhamBenh_VaoVien_SanKhoaPaginator);
  }
  KhamBenh_VaoVien_SanKhoaSave(element: KhamBenh_VaoVien_SanKhoa) {
    this.KhamBenh_VaoVien_SanKhoaService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_VaoVien_SanKhoaService.ComponentSaveAll(this.KhamBenh_VaoVien_SanKhoaSort, this.KhamBenh_VaoVien_SanKhoaPaginator));
  }
  KhamBenh_VaoVien_SanKhoaDelete(element: KhamBenh_VaoVien_SanKhoa) {
    this.KhamBenh_VaoVien_SanKhoaService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_VaoVien_SanKhoaService.ComponentDeleteAll(this.KhamBenh_VaoVien_SanKhoaSort, this.KhamBenh_VaoVien_SanKhoaPaginator));
  }
}
