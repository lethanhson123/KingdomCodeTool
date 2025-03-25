import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_LuuTru } from 'src/app/shared/eHospital_DongNai_A/NoiTru_LuuTru.model';
import { NoiTru_LuuTruService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_LuuTru.service';

@Component({
  selector: 'app-NoiTru_LuuTru',
  templateUrl: './NoiTru_LuuTru.component.html',
  styleUrls: ['./NoiTru_LuuTru.component.css']
})
export class NoiTru_LuuTruComponent implements OnInit {

  @ViewChild('NoiTru_LuuTruSort') NoiTru_LuuTruSort: MatSort;
  @ViewChild('NoiTru_LuuTruPaginator') NoiTru_LuuTruPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_LuuTruService: NoiTru_LuuTruService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_LuuTruSearch();
  }

  NoiTru_LuuTruSearch() {
    this.NoiTru_LuuTruService.SearchAll(this.NoiTru_LuuTruSort, this.NoiTru_LuuTruPaginator);
  }
  NoiTru_LuuTruSave(element: NoiTru_LuuTru) {
    this.NoiTru_LuuTruService.FormData = element;
    this.NotificationService.warn(this.NoiTru_LuuTruService.ComponentSaveAll(this.NoiTru_LuuTruSort, this.NoiTru_LuuTruPaginator));
  }
  NoiTru_LuuTruDelete(element: NoiTru_LuuTru) {
    this.NoiTru_LuuTruService.FormData = element;
    this.NotificationService.warn(this.NoiTru_LuuTruService.ComponentDeleteAll(this.NoiTru_LuuTruSort, this.NoiTru_LuuTruPaginator));
  }
}
