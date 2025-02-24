import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML12_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML12_CV130.model';
import { XML12_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML12_CV130.service';

@Component({
  selector: 'app-XML12_CV130',
  templateUrl: './XML12_CV130.component.html',
  styleUrls: ['./XML12_CV130.component.css']
})
export class XML12_CV130Component implements OnInit {

  @ViewChild('XML12_CV130Sort') XML12_CV130Sort: MatSort;
  @ViewChild('XML12_CV130Paginator') XML12_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML12_CV130Service: XML12_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML12_CV130Search();
  }

  XML12_CV130Search() {
    this.XML12_CV130Service.SearchAll(this.XML12_CV130Sort, this.XML12_CV130Paginator);
  }
  XML12_CV130Save(element: XML12_CV130) {
    this.XML12_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML12_CV130Service.ComponentSaveAll(this.XML12_CV130Sort, this.XML12_CV130Paginator));
  }
  XML12_CV130Delete(element: XML12_CV130) {
    this.XML12_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML12_CV130Service.ComponentDeleteAll(this.XML12_CV130Sort, this.XML12_CV130Paginator));
  }
}
