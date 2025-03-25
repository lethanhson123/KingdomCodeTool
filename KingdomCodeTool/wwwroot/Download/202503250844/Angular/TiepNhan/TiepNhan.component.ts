import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { TiepNhan } from 'src/app/shared/eHospital_DongNai_A/TiepNhan.model';
import { TiepNhanService } from 'src/app/shared/eHospital_DongNai_A/TiepNhan.service';

@Component({
  selector: 'app-TiepNhan',
  templateUrl: './TiepNhan.component.html',
  styleUrls: ['./TiepNhan.component.css']
})
export class TiepNhanComponent implements OnInit {

  @ViewChild('TiepNhanSort') TiepNhanSort: MatSort;
  @ViewChild('TiepNhanPaginator') TiepNhanPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public TiepNhanService: TiepNhanService,
  ) { }

  ngOnInit(): void {
    this.TiepNhanSearch();
  }

  TiepNhanSearch() {
    this.TiepNhanService.SearchAll(this.TiepNhanSort, this.TiepNhanPaginator);
  }
  TiepNhanSave(element: TiepNhan) {
    this.TiepNhanService.FormData = element;
    this.NotificationService.warn(this.TiepNhanService.ComponentSaveAll(this.TiepNhanSort, this.TiepNhanPaginator));
  }
  TiepNhanDelete(element: TiepNhan) {
    this.TiepNhanService.FormData = element;
    this.NotificationService.warn(this.TiepNhanService.ComponentDeleteAll(this.TiepNhanSort, this.TiepNhanPaginator));
  }
}
