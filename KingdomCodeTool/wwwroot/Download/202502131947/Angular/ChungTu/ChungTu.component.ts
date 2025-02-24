import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { ChungTu } from 'src/app/shared/eHospital_DongNai_A/ChungTu.model';
import { ChungTuService } from 'src/app/shared/eHospital_DongNai_A/ChungTu.service';

@Component({
  selector: 'app-ChungTu',
  templateUrl: './ChungTu.component.html',
  styleUrls: ['./ChungTu.component.css']
})
export class ChungTuComponent implements OnInit {

  @ViewChild('ChungTuSort') ChungTuSort: MatSort;
  @ViewChild('ChungTuPaginator') ChungTuPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ChungTuService: ChungTuService,
  ) { }

  ngOnInit(): void {
    this.ChungTuSearch();
  }

  ChungTuSearch() {
    this.ChungTuService.SearchAll(this.ChungTuSort, this.ChungTuPaginator);
  }
  ChungTuSave(element: ChungTu) {
    this.ChungTuService.FormData = element;
    this.NotificationService.warn(this.ChungTuService.ComponentSaveAll(this.ChungTuSort, this.ChungTuPaginator));
  }
  ChungTuDelete(element: ChungTu) {
    this.ChungTuService.FormData = element;
    this.NotificationService.warn(this.ChungTuService.ComponentDeleteAll(this.ChungTuSort, this.ChungTuPaginator));
  }
}
