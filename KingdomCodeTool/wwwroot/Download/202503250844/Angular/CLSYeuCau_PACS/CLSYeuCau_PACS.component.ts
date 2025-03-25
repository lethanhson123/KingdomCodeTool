import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSYeuCau_PACS } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau_PACS.model';
import { CLSYeuCau_PACSService } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau_PACS.service';

@Component({
  selector: 'app-CLSYeuCau_PACS',
  templateUrl: './CLSYeuCau_PACS.component.html',
  styleUrls: ['./CLSYeuCau_PACS.component.css']
})
export class CLSYeuCau_PACSComponent implements OnInit {

  @ViewChild('CLSYeuCau_PACSSort') CLSYeuCau_PACSSort: MatSort;
  @ViewChild('CLSYeuCau_PACSPaginator') CLSYeuCau_PACSPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSYeuCau_PACSService: CLSYeuCau_PACSService,
  ) { }

  ngOnInit(): void {
    this.CLSYeuCau_PACSSearch();
  }

  CLSYeuCau_PACSSearch() {
    this.CLSYeuCau_PACSService.SearchAll(this.CLSYeuCau_PACSSort, this.CLSYeuCau_PACSPaginator);
  }
  CLSYeuCau_PACSSave(element: CLSYeuCau_PACS) {
    this.CLSYeuCau_PACSService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCau_PACSService.ComponentSaveAll(this.CLSYeuCau_PACSSort, this.CLSYeuCau_PACSPaginator));
  }
  CLSYeuCau_PACSDelete(element: CLSYeuCau_PACS) {
    this.CLSYeuCau_PACSService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCau_PACSService.ComponentDeleteAll(this.CLSYeuCau_PACSSort, this.CLSYeuCau_PACSPaginator));
  }
}
