import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { BenhSu } from 'src/app/shared/eHospital_DongNai_A_Config/BenhSu.model';
import { BenhSuService } from 'src/app/shared/eHospital_DongNai_A_Config/BenhSu.service';

@Component({
  selector: 'app-BenhSu',
  templateUrl: './BenhSu.component.html',
  styleUrls: ['./BenhSu.component.css']
})
export class BenhSuComponent implements OnInit {

  @ViewChild('BenhSuSort') BenhSuSort: MatSort;
  @ViewChild('BenhSuPaginator') BenhSuPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public BenhSuService: BenhSuService,
  ) { }

  ngOnInit(): void {
    this.BenhSuSearch();
  }

  BenhSuSearch() {
    this.BenhSuService.SearchAll(this.BenhSuSort, this.BenhSuPaginator);
  }
  BenhSuSave(element: BenhSu) {
    this.BenhSuService.FormData = element;
    this.NotificationService.warn(this.BenhSuService.ComponentSaveAll(this.BenhSuSort, this.BenhSuPaginator));
  }
  BenhSuDelete(element: BenhSu) {
    this.BenhSuService.FormData = element;
    this.NotificationService.warn(this.BenhSuService.ComponentDeleteAll(this.BenhSuSort, this.BenhSuPaginator));
  }
}
