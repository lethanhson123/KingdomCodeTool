import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Control_Details } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Control_Details.model';
import { Sys_Control_DetailsService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Control_Details.service';

@Component({
  selector: 'app-Sys_Control_Details',
  templateUrl: './Sys_Control_Details.component.html',
  styleUrls: ['./Sys_Control_Details.component.css']
})
export class Sys_Control_DetailsComponent implements OnInit {

  @ViewChild('Sys_Control_DetailsSort') Sys_Control_DetailsSort: MatSort;
  @ViewChild('Sys_Control_DetailsPaginator') Sys_Control_DetailsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_Control_DetailsService: Sys_Control_DetailsService,
  ) { }

  ngOnInit(): void {
    this.Sys_Control_DetailsSearch();
  }

  Sys_Control_DetailsSearch() {
    this.Sys_Control_DetailsService.SearchAll(this.Sys_Control_DetailsSort, this.Sys_Control_DetailsPaginator);
  }
  Sys_Control_DetailsSave(element: Sys_Control_Details) {
    this.Sys_Control_DetailsService.FormData = element;
    this.NotificationService.warn(this.Sys_Control_DetailsService.ComponentSaveAll(this.Sys_Control_DetailsSort, this.Sys_Control_DetailsPaginator));
  }
  Sys_Control_DetailsDelete(element: Sys_Control_Details) {
    this.Sys_Control_DetailsService.FormData = element;
    this.NotificationService.warn(this.Sys_Control_DetailsService.ComponentDeleteAll(this.Sys_Control_DetailsSort, this.Sys_Control_DetailsPaginator));
  }
}
