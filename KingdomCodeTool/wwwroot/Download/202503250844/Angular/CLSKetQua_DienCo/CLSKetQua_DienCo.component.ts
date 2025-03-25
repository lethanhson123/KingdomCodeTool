import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSKetQua_DienCo } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_DienCo.model';
import { CLSKetQua_DienCoService } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_DienCo.service';

@Component({
  selector: 'app-CLSKetQua_DienCo',
  templateUrl: './CLSKetQua_DienCo.component.html',
  styleUrls: ['./CLSKetQua_DienCo.component.css']
})
export class CLSKetQua_DienCoComponent implements OnInit {

  @ViewChild('CLSKetQua_DienCoSort') CLSKetQua_DienCoSort: MatSort;
  @ViewChild('CLSKetQua_DienCoPaginator') CLSKetQua_DienCoPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSKetQua_DienCoService: CLSKetQua_DienCoService,
  ) { }

  ngOnInit(): void {
    this.CLSKetQua_DienCoSearch();
  }

  CLSKetQua_DienCoSearch() {
    this.CLSKetQua_DienCoService.SearchAll(this.CLSKetQua_DienCoSort, this.CLSKetQua_DienCoPaginator);
  }
  CLSKetQua_DienCoSave(element: CLSKetQua_DienCo) {
    this.CLSKetQua_DienCoService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_DienCoService.ComponentSaveAll(this.CLSKetQua_DienCoSort, this.CLSKetQua_DienCoPaginator));
  }
  CLSKetQua_DienCoDelete(element: CLSKetQua_DienCo) {
    this.CLSKetQua_DienCoService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_DienCoService.ComponentDeleteAll(this.CLSKetQua_DienCoSort, this.CLSKetQua_DienCoPaginator));
  }
}
