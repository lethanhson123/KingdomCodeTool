import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { KhamBenh_VaoVien } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_VaoVien.model';
import { KhamBenh_VaoVienService } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_VaoVien.service';

@Component({
  selector: 'app-KhamBenh_VaoVien',
  templateUrl: './KhamBenh_VaoVien.component.html',
  styleUrls: ['./KhamBenh_VaoVien.component.css']
})
export class KhamBenh_VaoVienComponent implements OnInit {

  @ViewChild('KhamBenh_VaoVienSort') KhamBenh_VaoVienSort: MatSort;
  @ViewChild('KhamBenh_VaoVienPaginator') KhamBenh_VaoVienPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public KhamBenh_VaoVienService: KhamBenh_VaoVienService,
  ) { }

  ngOnInit(): void {
    this.KhamBenh_VaoVienSearch();
  }

  KhamBenh_VaoVienSearch() {
    this.KhamBenh_VaoVienService.SearchAll(this.KhamBenh_VaoVienSort, this.KhamBenh_VaoVienPaginator);
  }
  KhamBenh_VaoVienSave(element: KhamBenh_VaoVien) {
    this.KhamBenh_VaoVienService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_VaoVienService.ComponentSaveAll(this.KhamBenh_VaoVienSort, this.KhamBenh_VaoVienPaginator));
  }
  KhamBenh_VaoVienDelete(element: KhamBenh_VaoVien) {
    this.KhamBenh_VaoVienService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_VaoVienService.ComponentDeleteAll(this.KhamBenh_VaoVienSort, this.KhamBenh_VaoVienPaginator));
  }
}
