import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Images } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Images.model';
import { Sys_ImagesService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Images.service';

@Component({
  selector: 'app-Sys_Images',
  templateUrl: './Sys_Images.component.html',
  styleUrls: ['./Sys_Images.component.css']
})
export class Sys_ImagesComponent implements OnInit {

  @ViewChild('Sys_ImagesSort') Sys_ImagesSort: MatSort;
  @ViewChild('Sys_ImagesPaginator') Sys_ImagesPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ImagesService: Sys_ImagesService,
  ) { }

  ngOnInit(): void {
    this.Sys_ImagesSearch();
  }

  Sys_ImagesSearch() {
    this.Sys_ImagesService.SearchAll(this.Sys_ImagesSort, this.Sys_ImagesPaginator);
  }
  Sys_ImagesSave(element: Sys_Images) {
    this.Sys_ImagesService.FormData = element;
    this.NotificationService.warn(this.Sys_ImagesService.ComponentSaveAll(this.Sys_ImagesSort, this.Sys_ImagesPaginator));
  }
  Sys_ImagesDelete(element: Sys_Images) {
    this.Sys_ImagesService.FormData = element;
    this.NotificationService.warn(this.Sys_ImagesService.ComponentDeleteAll(this.Sys_ImagesSort, this.Sys_ImagesPaginator));
  }
}
