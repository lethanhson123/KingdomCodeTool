import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { BenhAn } from 'src/app/shared/eHospital_DongNai_A/BenhAn.model';
import { BenhAnService } from 'src/app/shared/eHospital_DongNai_A/BenhAn.service';

@Component({
  selector: 'app-BenhAn',
  templateUrl: './BenhAn.component.html',
  styleUrls: ['./BenhAn.component.css']
})
export class BenhAnComponent implements OnInit {

  @ViewChild('BenhAnSort') BenhAnSort: MatSort;
  @ViewChild('BenhAnPaginator') BenhAnPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public BenhAnService: BenhAnService,
  ) { }

  ngOnInit(): void {
    this.BenhAnSearch();
  }

  BenhAnSearch() {
    this.BenhAnService.SearchAll(this.BenhAnSort, this.BenhAnPaginator);
  }
  BenhAnSave(element: BenhAn) {
    this.BenhAnService.FormData = element;
    this.NotificationService.warn(this.BenhAnService.ComponentSaveAll(this.BenhAnSort, this.BenhAnPaginator));
  }
  BenhAnDelete(element: BenhAn) {
    this.BenhAnService.FormData = element;
    this.NotificationService.warn(this.BenhAnService.ComponentDeleteAll(this.BenhAnSort, this.BenhAnPaginator));
  }
}
