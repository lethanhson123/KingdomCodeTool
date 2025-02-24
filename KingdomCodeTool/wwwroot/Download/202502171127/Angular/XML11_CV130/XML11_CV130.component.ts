import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML11_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML11_CV130.model';
import { XML11_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML11_CV130.service';

@Component({
  selector: 'app-XML11_CV130',
  templateUrl: './XML11_CV130.component.html',
  styleUrls: ['./XML11_CV130.component.css']
})
export class XML11_CV130Component implements OnInit {

  @ViewChild('XML11_CV130Sort') XML11_CV130Sort: MatSort;
  @ViewChild('XML11_CV130Paginator') XML11_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML11_CV130Service: XML11_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML11_CV130Search();
  }

  XML11_CV130Search() {
    this.XML11_CV130Service.SearchAll(this.XML11_CV130Sort, this.XML11_CV130Paginator);
  }
  XML11_CV130Save(element: XML11_CV130) {
    this.XML11_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML11_CV130Service.ComponentSaveAll(this.XML11_CV130Sort, this.XML11_CV130Paginator));
  }
  XML11_CV130Delete(element: XML11_CV130) {
    this.XML11_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML11_CV130Service.ComponentDeleteAll(this.XML11_CV130Sort, this.XML11_CV130Paginator));
  }
}
