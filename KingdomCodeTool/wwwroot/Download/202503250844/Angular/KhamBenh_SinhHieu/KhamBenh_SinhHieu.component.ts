import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { KhamBenh_SinhHieu } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_SinhHieu.model';
import { KhamBenh_SinhHieuService } from 'src/app/shared/eHospital_DongNai_A/KhamBenh_SinhHieu.service';

@Component({
  selector: 'app-KhamBenh_SinhHieu',
  templateUrl: './KhamBenh_SinhHieu.component.html',
  styleUrls: ['./KhamBenh_SinhHieu.component.css']
})
export class KhamBenh_SinhHieuComponent implements OnInit {

  @ViewChild('KhamBenh_SinhHieuSort') KhamBenh_SinhHieuSort: MatSort;
  @ViewChild('KhamBenh_SinhHieuPaginator') KhamBenh_SinhHieuPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public KhamBenh_SinhHieuService: KhamBenh_SinhHieuService,
  ) { }

  ngOnInit(): void {
    this.KhamBenh_SinhHieuSearch();
  }

  KhamBenh_SinhHieuSearch() {
    this.KhamBenh_SinhHieuService.SearchAll(this.KhamBenh_SinhHieuSort, this.KhamBenh_SinhHieuPaginator);
  }
  KhamBenh_SinhHieuSave(element: KhamBenh_SinhHieu) {
    this.KhamBenh_SinhHieuService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_SinhHieuService.ComponentSaveAll(this.KhamBenh_SinhHieuSort, this.KhamBenh_SinhHieuPaginator));
  }
  KhamBenh_SinhHieuDelete(element: KhamBenh_SinhHieu) {
    this.KhamBenh_SinhHieuService.FormData = element;
    this.NotificationService.warn(this.KhamBenh_SinhHieuService.ComponentDeleteAll(this.KhamBenh_SinhHieuSort, this.KhamBenh_SinhHieuPaginator));
  }
}
