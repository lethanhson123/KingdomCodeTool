import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { KhamBenh_ToaThuoc } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_ToaThuoc.model';
import { KhamBenh_ToaThuocService } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_ToaThuoc.service';

@Component({
  selector: 'app-KhamBenh_ToaThuoc',
  templateUrl: './KhamBenh_ToaThuoc.component.html',
  styleUrls: ['./KhamBenh_ToaThuoc.component.css']
})
export class KhamBenh_ToaThuocComponent implements OnInit {

  @ViewChild('KhamBenh_ToaThuocSort') KhamBenh_ToaThuocSort: MatSort;
  @ViewChild('KhamBenh_ToaThuocPaginator') KhamBenh_ToaThuocPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public KhamBenh_ToaThuocService: KhamBenh_ToaThuocService,
  ) { }

  ngOnInit(): void {
    this.KhamBenh_ToaThuocSearch();
  }

  KhamBenh_ToaThuocSearch() {
    this.KhamBenh_ToaThuocService.SearchAll(this.KhamBenh_ToaThuocSort, this.KhamBenh_ToaThuocPaginator);
  }
  KhamBenh_ToaThuocSave(element: KhamBenh_ToaThuoc) {
    this.KhamBenh_ToaThuocService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_ToaThuocService.ComponentSaveAll(this.KhamBenh_ToaThuocSort, this.KhamBenh_ToaThuocPaginator));
  }
  KhamBenh_ToaThuocDelete(element: KhamBenh_ToaThuoc) {
    this.KhamBenh_ToaThuocService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_ToaThuocService.ComponentDeleteAll(this.KhamBenh_ToaThuocSort, this.KhamBenh_ToaThuocPaginator));
  }
}
