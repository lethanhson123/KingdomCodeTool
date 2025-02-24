import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML8_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML8_CV130.model';
import { XML8_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML8_CV130.service';

@Component({
  selector: 'app-XML8_CV130',
  templateUrl: './XML8_CV130.component.html',
  styleUrls: ['./XML8_CV130.component.css']
})
export class XML8_CV130Component implements OnInit {

  @ViewChild('XML8_CV130Sort') XML8_CV130Sort: MatSort;
  @ViewChild('XML8_CV130Paginator') XML8_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML8_CV130Service: XML8_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML8_CV130Search();
  }

  XML8_CV130Search() {
    this.XML8_CV130Service.SearchAll(this.XML8_CV130Sort, this.XML8_CV130Paginator);
  }
  XML8_CV130Save(element: XML8_CV130) {
    this.XML8_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML8_CV130Service.ComponentSaveAll(this.XML8_CV130Sort, this.XML8_CV130Paginator));
  }
  XML8_CV130Delete(element: XML8_CV130) {
    this.XML8_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML8_CV130Service.ComponentDeleteAll(this.XML8_CV130Sort, this.XML8_CV130Paginator));
  }
}
