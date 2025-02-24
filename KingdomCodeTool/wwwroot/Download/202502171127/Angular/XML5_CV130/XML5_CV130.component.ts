import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML5_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML5_CV130.model';
import { XML5_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML5_CV130.service';

@Component({
  selector: 'app-XML5_CV130',
  templateUrl: './XML5_CV130.component.html',
  styleUrls: ['./XML5_CV130.component.css']
})
export class XML5_CV130Component implements OnInit {

  @ViewChild('XML5_CV130Sort') XML5_CV130Sort: MatSort;
  @ViewChild('XML5_CV130Paginator') XML5_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML5_CV130Service: XML5_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML5_CV130Search();
  }

  XML5_CV130Search() {
    this.XML5_CV130Service.SearchAll(this.XML5_CV130Sort, this.XML5_CV130Paginator);
  }
  XML5_CV130Save(element: XML5_CV130) {
    this.XML5_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML5_CV130Service.ComponentSaveAll(this.XML5_CV130Sort, this.XML5_CV130Paginator));
  }
  XML5_CV130Delete(element: XML5_CV130) {
    this.XML5_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML5_CV130Service.ComponentDeleteAll(this.XML5_CV130Sort, this.XML5_CV130Paginator));
  }
}
