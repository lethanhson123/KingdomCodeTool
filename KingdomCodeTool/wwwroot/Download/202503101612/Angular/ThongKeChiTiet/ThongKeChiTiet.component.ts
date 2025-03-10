import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { ThongKeChiTiet } from 'src/app/shared/ThongKeChiTiet.model';
import { ThongKeChiTietService } from 'src/app/shared/ThongKeChiTiet.service';

@Component({
  selector: 'app-ThongKeChiTiet',
  templateUrl: './ThongKeChiTiet.component.html',
  styleUrls: ['./ThongKeChiTiet.component.css']
})
export class ThongKeChiTietComponent implements OnInit {

  @ViewChild('ThongKeChiTietSort') ThongKeChiTietSort: MatSort;
  @ViewChild('ThongKeChiTietPaginator') ThongKeChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ThongKeChiTietService: ThongKeChiTietService,
  ) { }

  ngOnInit(): void {
    this.ThongKeChiTietSearch();
  }

  ThongKeChiTietSearch() {
    this.ThongKeChiTietService.SearchAll(this.ThongKeChiTietSort, this.ThongKeChiTietPaginator);
  }
  ThongKeChiTietSave(element: ThongKeChiTiet) {
    this.ThongKeChiTietService.FormData = element;
    this.NotificationService.warn(this.ThongKeChiTietService.ComponentSaveAll(this.ThongKeChiTietSort, this.ThongKeChiTietPaginator));
  }
  ThongKeChiTietDelete(element: ThongKeChiTiet) {
    this.ThongKeChiTietService.FormData = element;
    this.NotificationService.warn(this.ThongKeChiTietService.ComponentDeleteAll(this.ThongKeChiTietSort, this.ThongKeChiTietPaginator));
  }
}
