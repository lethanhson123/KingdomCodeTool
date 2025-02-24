import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML14_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML14_CV130.model';
import { XML14_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML14_CV130.service';

@Component({
  selector: 'app-XML14_CV130',
  templateUrl: './XML14_CV130.component.html',
  styleUrls: ['./XML14_CV130.component.css']
})
export class XML14_CV130Component implements OnInit {

  @ViewChild('XML14_CV130Sort') XML14_CV130Sort: MatSort;
  @ViewChild('XML14_CV130Paginator') XML14_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML14_CV130Service: XML14_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML14_CV130Search();
  }

  XML14_CV130Search() {
    this.XML14_CV130Service.SearchAll(this.XML14_CV130Sort, this.XML14_CV130Paginator);
  }
  XML14_CV130Save(element: XML14_CV130) {
    this.XML14_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML14_CV130Service.ComponentSaveAll(this.XML14_CV130Sort, this.XML14_CV130Paginator));
  }
  XML14_CV130Delete(element: XML14_CV130) {
    this.XML14_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML14_CV130Service.ComponentDeleteAll(this.XML14_CV130Sort, this.XML14_CV130Paginator));
  }
}
