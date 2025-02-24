import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { XML1_CV130 } from 'src/app/shared/eHospital_DongNai_A/XML1_CV130.model';
import { XML1_CV130Service } from 'src/app/shared/eHospital_DongNai_A/XML1_CV130.service';

@Component({
  selector: 'app-XML1_CV130',
  templateUrl: './XML1_CV130.component.html',
  styleUrls: ['./XML1_CV130.component.css']
})
export class XML1_CV130Component implements OnInit {

  @ViewChild('XML1_CV130Sort') XML1_CV130Sort: MatSort;
  @ViewChild('XML1_CV130Paginator') XML1_CV130Paginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public XML1_CV130Service: XML1_CV130Service,
  ) { }

  ngOnInit(): void {
    this.XML1_CV130Search();
  }

  XML1_CV130Search() {
    this.XML1_CV130Service.SearchAll(this.XML1_CV130Sort, this.XML1_CV130Paginator);
  }
  XML1_CV130Save(element: XML1_CV130) {
    this.XML1_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML1_CV130Service.ComponentSaveAll(this.XML1_CV130Sort, this.XML1_CV130Paginator));
  }
  XML1_CV130Delete(element: XML1_CV130) {
    this.XML1_CV130Service.FormData = element;
    this.NotificationService.warn(this.XML1_CV130Service.ComponentDeleteAll(this.XML1_CV130Sort, this.XML1_CV130Paginator));
  }
}
