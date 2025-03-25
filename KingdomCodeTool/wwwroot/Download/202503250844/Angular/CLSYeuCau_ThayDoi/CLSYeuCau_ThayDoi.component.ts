import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSYeuCau_ThayDoi } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau_ThayDoi.model';
import { CLSYeuCau_ThayDoiService } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau_ThayDoi.service';

@Component({
  selector: 'app-CLSYeuCau_ThayDoi',
  templateUrl: './CLSYeuCau_ThayDoi.component.html',
  styleUrls: ['./CLSYeuCau_ThayDoi.component.css']
})
export class CLSYeuCau_ThayDoiComponent implements OnInit {

  @ViewChild('CLSYeuCau_ThayDoiSort') CLSYeuCau_ThayDoiSort: MatSort;
  @ViewChild('CLSYeuCau_ThayDoiPaginator') CLSYeuCau_ThayDoiPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSYeuCau_ThayDoiService: CLSYeuCau_ThayDoiService,
  ) { }

  ngOnInit(): void {
    this.CLSYeuCau_ThayDoiSearch();
  }

  CLSYeuCau_ThayDoiSearch() {
    this.CLSYeuCau_ThayDoiService.SearchAll(this.CLSYeuCau_ThayDoiSort, this.CLSYeuCau_ThayDoiPaginator);
  }
  CLSYeuCau_ThayDoiSave(element: CLSYeuCau_ThayDoi) {
    this.CLSYeuCau_ThayDoiService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCau_ThayDoiService.ComponentSaveAll(this.CLSYeuCau_ThayDoiSort, this.CLSYeuCau_ThayDoiPaginator));
  }
  CLSYeuCau_ThayDoiDelete(element: CLSYeuCau_ThayDoi) {
    this.CLSYeuCau_ThayDoiService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCau_ThayDoiService.ComponentDeleteAll(this.CLSYeuCau_ThayDoiSort, this.CLSYeuCau_ThayDoiPaginator));
  }
}
