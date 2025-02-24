import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { ChungTuChiTiet } from 'src/app/shared/eHospital_DongNai_A/ChungTuChiTiet.model';
import { ChungTuChiTietService } from 'src/app/shared/eHospital_DongNai_A/ChungTuChiTiet.service';

@Component({
  selector: 'app-ChungTuChiTiet',
  templateUrl: './ChungTuChiTiet.component.html',
  styleUrls: ['./ChungTuChiTiet.component.css']
})
export class ChungTuChiTietComponent implements OnInit {

  @ViewChild('ChungTuChiTietSort') ChungTuChiTietSort: MatSort;
  @ViewChild('ChungTuChiTietPaginator') ChungTuChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ChungTuChiTietService: ChungTuChiTietService,
  ) { }

  ngOnInit(): void {
    this.ChungTuChiTietSearch();
  }

  ChungTuChiTietSearch() {
    this.ChungTuChiTietService.SearchAll(this.ChungTuChiTietSort, this.ChungTuChiTietPaginator);
  }
  ChungTuChiTietSave(element: ChungTuChiTiet) {
    this.ChungTuChiTietService.FormData = element;
    this.NotificationService.warn(this.ChungTuChiTietService.ComponentSaveAll(this.ChungTuChiTietSort, this.ChungTuChiTietPaginator));
  }
  ChungTuChiTietDelete(element: ChungTuChiTiet) {
    this.ChungTuChiTietService.FormData = element;
    this.NotificationService.warn(this.ChungTuChiTietService.ComponentDeleteAll(this.ChungTuChiTietSort, this.ChungTuChiTietPaginator));
  }
}
