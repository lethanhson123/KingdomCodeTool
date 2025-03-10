import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { HRLichCongTac } from 'src/app/shared/HRLichCongTac.model';
import { HRLichCongTacService } from 'src/app/shared/HRLichCongTac.service';

@Component({
  selector: 'app-HRLichCongTac',
  templateUrl: './HRLichCongTac.component.html',
  styleUrls: ['./HRLichCongTac.component.css']
})
export class HRLichCongTacComponent implements OnInit {

  @ViewChild('HRLichCongTacSort') HRLichCongTacSort: MatSort;
  @ViewChild('HRLichCongTacPaginator') HRLichCongTacPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public HRLichCongTacService: HRLichCongTacService,
  ) { }

  ngOnInit(): void {
    this.HRLichCongTacSearch();
  }

  HRLichCongTacSearch() {
    this.HRLichCongTacService.SearchAll(this.HRLichCongTacSort, this.HRLichCongTacPaginator);
  }
  HRLichCongTacSave(element: HRLichCongTac) {
    this.HRLichCongTacService.FormData = element;
    this.NotificationService.warn(this.HRLichCongTacService.ComponentSaveAll(this.HRLichCongTacSort, this.HRLichCongTacPaginator));
  }
  HRLichCongTacDelete(element: HRLichCongTac) {
    this.HRLichCongTacService.FormData = element;
    this.NotificationService.warn(this.HRLichCongTacService.ComponentDeleteAll(this.HRLichCongTacSort, this.HRLichCongTacPaginator));
  }
}
