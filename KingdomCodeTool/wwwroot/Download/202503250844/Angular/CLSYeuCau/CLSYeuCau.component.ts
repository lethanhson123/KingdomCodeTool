import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSYeuCau } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau.model';
import { CLSYeuCauService } from 'src/app/shared/eHospital_DongNai_A/CLSYeuCau.service';

@Component({
  selector: 'app-CLSYeuCau',
  templateUrl: './CLSYeuCau.component.html',
  styleUrls: ['./CLSYeuCau.component.css']
})
export class CLSYeuCauComponent implements OnInit {

  @ViewChild('CLSYeuCauSort') CLSYeuCauSort: MatSort;
  @ViewChild('CLSYeuCauPaginator') CLSYeuCauPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSYeuCauService: CLSYeuCauService,
  ) { }

  ngOnInit(): void {
    this.CLSYeuCauSearch();
  }

  CLSYeuCauSearch() {
    this.CLSYeuCauService.SearchAll(this.CLSYeuCauSort, this.CLSYeuCauPaginator);
  }
  CLSYeuCauSave(element: CLSYeuCau) {
    this.CLSYeuCauService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCauService.ComponentSaveAll(this.CLSYeuCauSort, this.CLSYeuCauPaginator));
  }
  CLSYeuCauDelete(element: CLSYeuCau) {
    this.CLSYeuCauService.FormData = element;
    this.NotificationService.warn(this.CLSYeuCauService.ComponentDeleteAll(this.CLSYeuCauSort, this.CLSYeuCauPaginator));
  }
}
