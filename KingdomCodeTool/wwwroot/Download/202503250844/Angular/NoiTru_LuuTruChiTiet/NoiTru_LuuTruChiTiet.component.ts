import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_LuuTruChiTiet } from 'src/app/shared/eHospital_DongNai_A/NoiTru_LuuTruChiTiet.model';
import { NoiTru_LuuTruChiTietService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_LuuTruChiTiet.service';

@Component({
  selector: 'app-NoiTru_LuuTruChiTiet',
  templateUrl: './NoiTru_LuuTruChiTiet.component.html',
  styleUrls: ['./NoiTru_LuuTruChiTiet.component.css']
})
export class NoiTru_LuuTruChiTietComponent implements OnInit {

  @ViewChild('NoiTru_LuuTruChiTietSort') NoiTru_LuuTruChiTietSort: MatSort;
  @ViewChild('NoiTru_LuuTruChiTietPaginator') NoiTru_LuuTruChiTietPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_LuuTruChiTietService: NoiTru_LuuTruChiTietService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_LuuTruChiTietSearch();
  }

  NoiTru_LuuTruChiTietSearch() {
    this.NoiTru_LuuTruChiTietService.SearchAll(this.NoiTru_LuuTruChiTietSort, this.NoiTru_LuuTruChiTietPaginator);
  }
  NoiTru_LuuTruChiTietSave(element: NoiTru_LuuTruChiTiet) {
    this.NoiTru_LuuTruChiTietService.FormData = element;
    this.NotificationService.warn(this.NoiTru_LuuTruChiTietService.ComponentSaveAll(this.NoiTru_LuuTruChiTietSort, this.NoiTru_LuuTruChiTietPaginator));
  }
  NoiTru_LuuTruChiTietDelete(element: NoiTru_LuuTruChiTiet) {
    this.NoiTru_LuuTruChiTietService.FormData = element;
    this.NotificationService.warn(this.NoiTru_LuuTruChiTietService.ComponentDeleteAll(this.NoiTru_LuuTruChiTietSort, this.NoiTru_LuuTruChiTietPaginator));
  }
}
