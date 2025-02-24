import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML13_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML13_CV130.model';
import { XML13_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML13_CV130.service';

@Component({
  selector: 'app-XML13_CV130',
  templateUrl: './XML13_CV130.component.html',
  styleUrls: ['./XML13_CV130.component.css']
})
export class XML13_CV130Component implements OnInit {

  @ViewChild('XML13_CV130Sort') XML13_CV130Sort: MatSort;
  @ViewChild('XML13_CV130Paginator') XML13_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML13_CV130Service: XML13_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML13_CV130Search();
  }

  XML13_CV130Search() {
    this.XML13_CV130Service.SearchAll(this.XML13_CV130Sort, this.XML13_CV130Paginator);
  }
  XML13_CV130Save(element: XML13_CV130) {
    this.XML13_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML13_CV130Service.ComponentSaveAll(this.XML13_CV130Sort, this.XML13_CV130Paginator));
  }
  XML13_CV130Delete(element: XML13_CV130) {
    this.XML13_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML13_CV130Service.ComponentDeleteAll(this.XML13_CV130Sort, this.XML13_CV130Paginator));
  }
}
