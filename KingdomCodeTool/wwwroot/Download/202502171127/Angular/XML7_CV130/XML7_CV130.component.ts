import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML7_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML7_CV130.model';
import { XML7_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML7_CV130.service';

@Component({
  selector: 'app-XML7_CV130',
  templateUrl: './XML7_CV130.component.html',
  styleUrls: ['./XML7_CV130.component.css']
})
export class XML7_CV130Component implements OnInit {

  @ViewChild('XML7_CV130Sort') XML7_CV130Sort: MatSort;
  @ViewChild('XML7_CV130Paginator') XML7_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML7_CV130Service: XML7_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML7_CV130Search();
  }

  XML7_CV130Search() {
    this.XML7_CV130Service.SearchAll(this.XML7_CV130Sort, this.XML7_CV130Paginator);
  }
  XML7_CV130Save(element: XML7_CV130) {
    this.XML7_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML7_CV130Service.ComponentSaveAll(this.XML7_CV130Sort, this.XML7_CV130Paginator));
  }
  XML7_CV130Delete(element: XML7_CV130) {
    this.XML7_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML7_CV130Service.ComponentDeleteAll(this.XML7_CV130Sort, this.XML7_CV130Paginator));
  }
}
