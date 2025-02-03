import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { test } from 'src/app/shared/eHospital_DongNai_A_Config/test.model';
import { testService } from 'src/app/shared/eHospital_DongNai_A_Config/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class testComponent implements OnInit {

  @ViewChild('testSort') testSort: MatSort;
  @ViewChild('testPaginator') testPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public testService: testService,
  ) { }

  ngOnInit(): void {
    this.testSearch();
  }

  testSearch() {
    this.testService.SearchAll(this.testSort, this.testPaginator);
  }
  testSave(element: test) {
    this.testService.FormData = element;
    this.NotificationService.warn(this.testService.ComponentSaveAll(this.testSort, this.testPaginator));
  }
  testDelete(element: test) {
    this.testService.FormData = element;
    this.NotificationService.warn(this.testService.ComponentDeleteAll(this.testSort, this.testPaginator));
  }
}
