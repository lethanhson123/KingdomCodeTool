import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NhanVien_User_Mapping } from 'src/app/shared/eHospital_DongNai_A_Dictionary/NhanVien_User_Mapping.model';
import { NhanVien_User_MappingService } from 'src/app/shared/eHospital_DongNai_A_Dictionary/NhanVien_User_Mapping.service';

@Component({
  selector: 'app-NhanVien_User_Mapping',
  templateUrl: './NhanVien_User_Mapping.component.html',
  styleUrls: ['./NhanVien_User_Mapping.component.css']
})
export class NhanVien_User_MappingComponent implements OnInit {

  @ViewChild('NhanVien_User_MappingSort') NhanVien_User_MappingSort: MatSort;
  @ViewChild('NhanVien_User_MappingPaginator') NhanVien_User_MappingPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NhanVien_User_MappingService: NhanVien_User_MappingService,
  ) { }

  ngOnInit(): void {
    this.NhanVien_User_MappingSearch();
  }

  NhanVien_User_MappingSearch() {
    this.NhanVien_User_MappingService.SearchAll(this.NhanVien_User_MappingSort, this.NhanVien_User_MappingPaginator);
  }
  NhanVien_User_MappingSave(element: NhanVien_User_Mapping) {
    this.NhanVien_User_MappingService.FormData = element;
    this.NotificationService.warn(this.NhanVien_User_MappingService.ComponentSaveAll(this.NhanVien_User_MappingSort, this.NhanVien_User_MappingPaginator));
  }
  NhanVien_User_MappingDelete(element: NhanVien_User_Mapping) {
    this.NhanVien_User_MappingService.FormData = element;
    this.NotificationService.warn(this.NhanVien_User_MappingService.ComponentDeleteAll(this.NhanVien_User_MappingSort, this.NhanVien_User_MappingPaginator));
  }
}
