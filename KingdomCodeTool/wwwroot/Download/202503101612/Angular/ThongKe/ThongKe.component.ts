import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { ThongKe } from 'src/app/shared/ThongKe.model';
import { ThongKeService } from 'src/app/shared/ThongKe.service';

@Component({
  selector: 'app-ThongKe',
  templateUrl: './ThongKe.component.html',
  styleUrls: ['./ThongKe.component.css']
})
export class ThongKeComponent implements OnInit {

  @ViewChild('ThongKeSort') ThongKeSort: MatSort;
  @ViewChild('ThongKePaginator') ThongKePaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ThongKeService: ThongKeService,
  ) { }

  ngOnInit(): void {
    this.ThongKeSearch();
  }

  ThongKeSearch() {
    this.ThongKeService.SearchAll(this.ThongKeSort, this.ThongKePaginator);
  }
  ThongKeSave(element: ThongKe) {
    this.ThongKeService.FormData = element;
    this.NotificationService.warn(this.ThongKeService.ComponentSaveAll(this.ThongKeSort, this.ThongKePaginator));
  }
  ThongKeDelete(element: ThongKe) {
    this.ThongKeService.FormData = element;
    this.NotificationService.warn(this.ThongKeService.ComponentDeleteAll(this.ThongKeSort, this.ThongKePaginator));
  }
}
