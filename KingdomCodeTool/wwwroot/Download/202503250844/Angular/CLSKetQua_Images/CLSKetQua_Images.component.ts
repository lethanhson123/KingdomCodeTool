import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSKetQua_Images } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_Images.model';
import { CLSKetQua_ImagesService } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua_Images.service';

@Component({
  selector: 'app-CLSKetQua_Images',
  templateUrl: './CLSKetQua_Images.component.html',
  styleUrls: ['./CLSKetQua_Images.component.css']
})
export class CLSKetQua_ImagesComponent implements OnInit {

  @ViewChild('CLSKetQua_ImagesSort') CLSKetQua_ImagesSort: MatSort;
  @ViewChild('CLSKetQua_ImagesPaginator') CLSKetQua_ImagesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSKetQua_ImagesService: CLSKetQua_ImagesService,
  ) { }

  ngOnInit(): void {
    this.CLSKetQua_ImagesSearch();
  }

  CLSKetQua_ImagesSearch() {
    this.CLSKetQua_ImagesService.SearchAll(this.CLSKetQua_ImagesSort, this.CLSKetQua_ImagesPaginator);
  }
  CLSKetQua_ImagesSave(element: CLSKetQua_Images) {
    this.CLSKetQua_ImagesService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_ImagesService.ComponentSaveAll(this.CLSKetQua_ImagesSort, this.CLSKetQua_ImagesPaginator));
  }
  CLSKetQua_ImagesDelete(element: CLSKetQua_Images) {
    this.CLSKetQua_ImagesService.FormData = element;
    this.NotificationService.warn(this.CLSKetQua_ImagesService.ComponentDeleteAll(this.CLSKetQua_ImagesSort, this.CLSKetQua_ImagesPaginator));
  }
}
