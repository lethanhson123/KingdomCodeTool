import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { DanhMucThue } from 'src/app/shared/DanhMucThue.model';
import { DanhMucThueService } from 'src/app/shared/DanhMucThue.service';

@Component({
  selector: 'app-DanhMucThue',
  templateUrl: './DanhMucThue.component.html',
  styleUrls: ['./DanhMucThue.component.css']
})
export class DanhMucThueComponent implements OnInit {

  @ViewChild('DanhMucThueSort') DanhMucThueSort: MatSort;
  @ViewChild('DanhMucThuePaginator') DanhMucThuePaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucThueService: DanhMucThueService,
  ) { }

  ngOnInit(): void {
    this.DanhMucThueSearch();
  }

  DanhMucThueSearch() {
    this.DanhMucThueService.SearchAll(this.DanhMucThueSort, this.DanhMucThuePaginator);
  }
  DanhMucThueSave(element: DanhMucThue) {
    this.DanhMucThueService.FormData = element;
    this.NotificationService.warn(this.DanhMucThueService.ComponentSaveAll(this.DanhMucThueSort, this.DanhMucThuePaginator));
  }
  DanhMucThueDelete(element: DanhMucThue) {
    this.DanhMucThueService.FormData = element;
    this.NotificationService.warn(this.DanhMucThueService.ComponentDeleteAll(this.DanhMucThueSort, this.DanhMucThuePaginator));
  }
}
