import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_ToaThuoc } from 'src/app/shared/eHospital_DongNai_A/NoiTru_ToaThuoc.model';
import { NoiTru_ToaThuocService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_ToaThuoc.service';

@Component({
  selector: 'app-NoiTru_ToaThuoc',
  templateUrl: './NoiTru_ToaThuoc.component.html',
  styleUrls: ['./NoiTru_ToaThuoc.component.css']
})
export class NoiTru_ToaThuocComponent implements OnInit {

  @ViewChild('NoiTru_ToaThuocSort') NoiTru_ToaThuocSort: MatSort;
  @ViewChild('NoiTru_ToaThuocPaginator') NoiTru_ToaThuocPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_ToaThuocService: NoiTru_ToaThuocService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_ToaThuocSearch();
  }

  NoiTru_ToaThuocSearch() {
    this.NoiTru_ToaThuocService.SearchAll(this.NoiTru_ToaThuocSort, this.NoiTru_ToaThuocPaginator);
  }
  NoiTru_ToaThuocSave(element: NoiTru_ToaThuoc) {
    this.NoiTru_ToaThuocService.FormData = element;
    this.NotificationService.warn(this.NoiTru_ToaThuocService.ComponentSaveAll(this.NoiTru_ToaThuocSort, this.NoiTru_ToaThuocPaginator));
  }
  NoiTru_ToaThuocDelete(element: NoiTru_ToaThuoc) {
    this.NoiTru_ToaThuocService.FormData = element;
    this.NotificationService.warn(this.NoiTru_ToaThuocService.ComponentDeleteAll(this.NoiTru_ToaThuocSort, this.NoiTru_ToaThuocPaginator));
  }
}
