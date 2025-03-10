import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRChamCong } from 'src/app/shared/HRChamCong.model';
import { HRChamCongService } from 'src/app/shared/HRChamCong.service';

@Component({
  selector: 'app-HRChamCong',
  templateUrl: './HRChamCong.component.html',
  styleUrls: ['./HRChamCong.component.css']
})
export class HRChamCongComponent implements OnInit {

  @ViewChild('HRChamCongSort') HRChamCongSort: MatSort;
  @ViewChild('HRChamCongPaginator') HRChamCongPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRChamCongService: HRChamCongService,
  ) { }

  ngOnInit(): void {
    this.HRChamCongSearch();
  }

  HRChamCongSearch() {
    this.HRChamCongService.SearchAll(this.HRChamCongSort, this.HRChamCongPaginator);
  }
  HRChamCongSave(element: HRChamCong) {
    this.HRChamCongService.FormData = element;
    this.NotificationService.warn(this.HRChamCongService.ComponentSaveAll(this.HRChamCongSort, this.HRChamCongPaginator));
  }
  HRChamCongDelete(element: HRChamCong) {
    this.HRChamCongService.FormData = element;
    this.NotificationService.warn(this.HRChamCongService.ComponentDeleteAll(this.HRChamCongSort, this.HRChamCongPaginator));
  }
}
