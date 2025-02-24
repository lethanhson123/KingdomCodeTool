import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML4_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML4_CV130.model';
import { XML4_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML4_CV130.service';

@Component({
  selector: 'app-XML4_CV130',
  templateUrl: './XML4_CV130.component.html',
  styleUrls: ['./XML4_CV130.component.css']
})
export class XML4_CV130Component implements OnInit {

  @ViewChild('XML4_CV130Sort') XML4_CV130Sort: MatSort;
  @ViewChild('XML4_CV130Paginator') XML4_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML4_CV130Service: XML4_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML4_CV130Search();
  }

  XML4_CV130Search() {
    this.XML4_CV130Service.SearchAll(this.XML4_CV130Sort, this.XML4_CV130Paginator);
  }
  XML4_CV130Save(element: XML4_CV130) {
    this.XML4_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML4_CV130Service.ComponentSaveAll(this.XML4_CV130Sort, this.XML4_CV130Paginator));
  }
  XML4_CV130Delete(element: XML4_CV130) {
    this.XML4_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML4_CV130Service.ComponentDeleteAll(this.XML4_CV130Sort, this.XML4_CV130Paginator));
  }
}
