import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_TraThuoc } from 'src/app/shared/eHospital_DongNai_A/NoiTru_TraThuoc.model';
import { NoiTru_TraThuocService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_TraThuoc.service';

@Component({
  selector: 'app-NoiTru_TraThuoc',
  templateUrl: './NoiTru_TraThuoc.component.html',
  styleUrls: ['./NoiTru_TraThuoc.component.css']
})
export class NoiTru_TraThuocComponent implements OnInit {

  @ViewChild('NoiTru_TraThuocSort') NoiTru_TraThuocSort: MatSort;
  @ViewChild('NoiTru_TraThuocPaginator') NoiTru_TraThuocPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_TraThuocService: NoiTru_TraThuocService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_TraThuocSearch();
  }

  NoiTru_TraThuocSearch() {
    this.NoiTru_TraThuocService.SearchAll(this.NoiTru_TraThuocSort, this.NoiTru_TraThuocPaginator);
  }
  NoiTru_TraThuocSave(element: NoiTru_TraThuoc) {
    this.NoiTru_TraThuocService.FormData = element;
    this.NotificationService.warn(this.NoiTru_TraThuocService.ComponentSaveAll(this.NoiTru_TraThuocSort, this.NoiTru_TraThuocPaginator));
  }
  NoiTru_TraThuocDelete(element: NoiTru_TraThuoc) {
    this.NoiTru_TraThuocService.FormData = element;
    this.NotificationService.warn(this.NoiTru_TraThuocService.ComponentDeleteAll(this.NoiTru_TraThuocSort, this.NoiTru_TraThuocPaginator));
  }
}
