import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML2_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML2_CV130.model';
import { XML2_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML2_CV130.service';

@Component({
  selector: 'app-XML2_CV130',
  templateUrl: './XML2_CV130.component.html',
  styleUrls: ['./XML2_CV130.component.css']
})
export class XML2_CV130Component implements OnInit {

  @ViewChild('XML2_CV130Sort') XML2_CV130Sort: MatSort;
  @ViewChild('XML2_CV130Paginator') XML2_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML2_CV130Service: XML2_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML2_CV130Search();
  }

  XML2_CV130Search() {
    this.XML2_CV130Service.SearchAll(this.XML2_CV130Sort, this.XML2_CV130Paginator);
  }
  XML2_CV130Save(element: XML2_CV130) {
    this.XML2_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML2_CV130Service.ComponentSaveAll(this.XML2_CV130Sort, this.XML2_CV130Paginator));
  }
  XML2_CV130Delete(element: XML2_CV130) {
    this.XML2_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML2_CV130Service.ComponentDeleteAll(this.XML2_CV130Sort, this.XML2_CV130Paginator));
  }
}
