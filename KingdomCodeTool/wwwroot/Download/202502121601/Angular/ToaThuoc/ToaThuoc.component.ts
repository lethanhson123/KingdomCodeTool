import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { ToaThuoc } from 'src/app/shared/eHospital_DongNai_A/ToaThuoc.model';
import { ToaThuocService } from 'src/app/shared/eHospital_DongNai_A/ToaThuoc.service';

@Component({
  selector: 'app-ToaThuoc',
  templateUrl: './ToaThuoc.component.html',
  styleUrls: ['./ToaThuoc.component.css']
})
export class ToaThuocComponent implements OnInit {

  @ViewChild('ToaThuocSort') ToaThuocSort: MatSort;
  @ViewChild('ToaThuocPaginator') ToaThuocPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ToaThuocService: ToaThuocService,
  ) { }

  ngOnInit(): void {
    this.ToaThuocSearch();
  }

  ToaThuocSearch() {
    this.ToaThuocService.SearchAll(this.ToaThuocSort, this.ToaThuocPaginator);
  }
  ToaThuocSave(element: ToaThuoc) {
    this.ToaThuocService.FormData = element;
    this.NotificationService.warn(this.ToaThuocService.ComponentSaveAll(this.ToaThuocSort, this.ToaThuocPaginator));
  }
  ToaThuocDelete(element: ToaThuoc) {
    this.ToaThuocService.FormData = element;
    this.NotificationService.warn(this.ToaThuocService.ComponentDeleteAll(this.ToaThuocSort, this.ToaThuocPaginator));
  }
}
