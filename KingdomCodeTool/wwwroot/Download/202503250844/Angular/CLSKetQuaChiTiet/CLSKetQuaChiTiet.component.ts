import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSKetQuaChiTiet } from 'src/app/shared/eHospital_DongNai_A/CLSKetQuaChiTiet.model';
import { CLSKetQuaChiTietService } from 'src/app/shared/eHospital_DongNai_A/CLSKetQuaChiTiet.service';

@Component({
  selector: 'app-CLSKetQuaChiTiet',
  templateUrl: './CLSKetQuaChiTiet.component.html',
  styleUrls: ['./CLSKetQuaChiTiet.component.css']
})
export class CLSKetQuaChiTietComponent implements OnInit {

  @ViewChild('CLSKetQuaChiTietSort') CLSKetQuaChiTietSort: MatSort;
  @ViewChild('CLSKetQuaChiTietPaginator') CLSKetQuaChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSKetQuaChiTietService: CLSKetQuaChiTietService,
  ) { }

  ngOnInit(): void {
    this.CLSKetQuaChiTietSearch();
  }

  CLSKetQuaChiTietSearch() {
    this.CLSKetQuaChiTietService.SearchAll(this.CLSKetQuaChiTietSort, this.CLSKetQuaChiTietPaginator);
  }
  CLSKetQuaChiTietSave(element: CLSKetQuaChiTiet) {
    this.CLSKetQuaChiTietService.FormData = element;
    this.NotificationService.warn(this.CLSKetQuaChiTietService.ComponentSaveAll(this.CLSKetQuaChiTietSort, this.CLSKetQuaChiTietPaginator));
  }
  CLSKetQuaChiTietDelete(element: CLSKetQuaChiTiet) {
    this.CLSKetQuaChiTietService.FormData = element;
    this.NotificationService.warn(this.CLSKetQuaChiTietService.ComponentDeleteAll(this.CLSKetQuaChiTietSort, this.CLSKetQuaChiTietPaginator));
  }
}
