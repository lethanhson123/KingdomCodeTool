import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { NoiTru_LuuTru_Trace } from 'src/app/shared/eHospital_DongNai_A/NoiTru_LuuTru_Trace.model';
import { NoiTru_LuuTru_TraceService } from 'src/app/shared/eHospital_DongNai_A/NoiTru_LuuTru_Trace.service';

@Component({
  selector: 'app-NoiTru_LuuTru_Trace',
  templateUrl: './NoiTru_LuuTru_Trace.component.html',
  styleUrls: ['./NoiTru_LuuTru_Trace.component.css']
})
export class NoiTru_LuuTru_TraceComponent implements OnInit {

  @ViewChild('NoiTru_LuuTru_TraceSort') NoiTru_LuuTru_TraceSort: MatSort;
  @ViewChild('NoiTru_LuuTru_TracePaginator') NoiTru_LuuTru_TracePaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public NoiTru_LuuTru_TraceService: NoiTru_LuuTru_TraceService,
  ) { }

  ngOnInit(): void {
    this.NoiTru_LuuTru_TraceSearch();
  }

  NoiTru_LuuTru_TraceSearch() {
    this.NoiTru_LuuTru_TraceService.SearchAll(this.NoiTru_LuuTru_TraceSort, this.NoiTru_LuuTru_TracePaginator);
  }
  NoiTru_LuuTru_TraceSave(element: NoiTru_LuuTru_Trace) {
    this.NoiTru_LuuTru_TraceService.FormData = element;
    this.NotificationService.warn(this.NoiTru_LuuTru_TraceService.ComponentSaveAll(this.NoiTru_LuuTru_TraceSort, this.NoiTru_LuuTru_TracePaginator));
  }
  NoiTru_LuuTru_TraceDelete(element: NoiTru_LuuTru_Trace) {
    this.NoiTru_LuuTru_TraceService.FormData = element;
    this.NotificationService.warn(this.NoiTru_LuuTru_TraceService.ComponentDeleteAll(this.NoiTru_LuuTru_TraceSort, this.NoiTru_LuuTru_TracePaginator));
  }
}
