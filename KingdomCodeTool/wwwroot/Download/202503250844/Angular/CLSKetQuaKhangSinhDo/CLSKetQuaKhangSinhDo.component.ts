import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSKetQuaKhangSinhDo } from 'src/app/shared/eHospital_DongNai_A/CLSKetQuaKhangSinhDo.model';
import { CLSKetQuaKhangSinhDoService } from 'src/app/shared/eHospital_DongNai_A/CLSKetQuaKhangSinhDo.service';

@Component({
  selector: 'app-CLSKetQuaKhangSinhDo',
  templateUrl: './CLSKetQuaKhangSinhDo.component.html',
  styleUrls: ['./CLSKetQuaKhangSinhDo.component.css']
})
export class CLSKetQuaKhangSinhDoComponent implements OnInit {

  @ViewChild('CLSKetQuaKhangSinhDoSort') CLSKetQuaKhangSinhDoSort: MatSort;
  @ViewChild('CLSKetQuaKhangSinhDoPaginator') CLSKetQuaKhangSinhDoPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSKetQuaKhangSinhDoService: CLSKetQuaKhangSinhDoService,
  ) { }

  ngOnInit(): void {
    this.CLSKetQuaKhangSinhDoSearch();
  }

  CLSKetQuaKhangSinhDoSearch() {
    this.CLSKetQuaKhangSinhDoService.SearchAll(this.CLSKetQuaKhangSinhDoSort, this.CLSKetQuaKhangSinhDoPaginator);
  }
  CLSKetQuaKhangSinhDoSave(element: CLSKetQuaKhangSinhDo) {
    this.CLSKetQuaKhangSinhDoService.FormData = element;
    this.NotificationService.warn(this.CLSKetQuaKhangSinhDoService.ComponentSaveAll(this.CLSKetQuaKhangSinhDoSort, this.CLSKetQuaKhangSinhDoPaginator));
  }
  CLSKetQuaKhangSinhDoDelete(element: CLSKetQuaKhangSinhDo) {
    this.CLSKetQuaKhangSinhDoService.FormData = element;
    this.NotificationService.warn(this.CLSKetQuaKhangSinhDoService.ComponentDeleteAll(this.CLSKetQuaKhangSinhDoSort, this.CLSKetQuaKhangSinhDoPaginator));
  }
}
