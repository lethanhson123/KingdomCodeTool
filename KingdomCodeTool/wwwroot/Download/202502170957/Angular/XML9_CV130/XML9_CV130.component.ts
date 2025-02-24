import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML9_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML9_CV130.model';
import { XML9_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML9_CV130.service';

@Component({
  selector: 'app-XML9_CV130',
  templateUrl: './XML9_CV130.component.html',
  styleUrls: ['./XML9_CV130.component.css']
})
export class XML9_CV130Component implements OnInit {

  @ViewChild('XML9_CV130Sort') XML9_CV130Sort: MatSort;
  @ViewChild('XML9_CV130Paginator') XML9_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML9_CV130Service: XML9_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML9_CV130Search();
  }

  XML9_CV130Search() {
    this.XML9_CV130Service.SearchAll(this.XML9_CV130Sort, this.XML9_CV130Paginator);
  }
  XML9_CV130Save(element: XML9_CV130) {
    this.XML9_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML9_CV130Service.ComponentSaveAll(this.XML9_CV130Sort, this.XML9_CV130Paginator));
  }
  XML9_CV130Delete(element: XML9_CV130) {
    this.XML9_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML9_CV130Service.ComponentDeleteAll(this.XML9_CV130Sort, this.XML9_CV130Paginator));
  }
}
