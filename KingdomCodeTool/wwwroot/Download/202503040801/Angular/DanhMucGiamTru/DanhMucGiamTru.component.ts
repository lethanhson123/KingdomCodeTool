import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { DanhMucGiamTru } from 'src/app/shared/DanhMucGiamTru.model';
import { DanhMucGiamTruService } from 'src/app/shared/DanhMucGiamTru.service';

@Component({
  selector: 'app-DanhMucGiamTru',
  templateUrl: './DanhMucGiamTru.component.html',
  styleUrls: ['./DanhMucGiamTru.component.css']
})
export class DanhMucGiamTruComponent implements OnInit {

  @ViewChild('DanhMucGiamTruSort') DanhMucGiamTruSort: MatSort;
  @ViewChild('DanhMucGiamTruPaginator') DanhMucGiamTruPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucGiamTruService: DanhMucGiamTruService,
  ) { }

  ngOnInit(): void {
    this.DanhMucGiamTruSearch();
  }

  DanhMucGiamTruSearch() {
    this.DanhMucGiamTruService.SearchAll(this.DanhMucGiamTruSort, this.DanhMucGiamTruPaginator);
  }
  DanhMucGiamTruSave(element: DanhMucGiamTru) {
    this.DanhMucGiamTruService.FormData = element;
    this.NotificationService.warn(this.DanhMucGiamTruService.ComponentSaveAll(this.DanhMucGiamTruSort, this.DanhMucGiamTruPaginator));
  }
  DanhMucGiamTruDelete(element: DanhMucGiamTru) {
    this.DanhMucGiamTruService.FormData = element;
    this.NotificationService.warn(this.DanhMucGiamTruService.ComponentDeleteAll(this.DanhMucGiamTruSort, this.DanhMucGiamTruPaginator));
  }
}
