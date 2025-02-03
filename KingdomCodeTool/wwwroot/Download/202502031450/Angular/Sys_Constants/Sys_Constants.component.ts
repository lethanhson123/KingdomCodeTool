import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Constants } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_Constants.model';
import { Sys_ConstantsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_Constants.service';

@Component({
  selector: 'app-Sys_Constants',
  templateUrl: './Sys_Constants.component.html',
  styleUrls: ['./Sys_Constants.component.css']
})
export class Sys_ConstantsComponent implements OnInit {

  @ViewChild('Sys_ConstantsSort') Sys_ConstantsSort: MatSort;
  @ViewChild('Sys_ConstantsPaginator') Sys_ConstantsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ConstantsService: Sys_ConstantsService,
  ) { }

  ngOnInit(): void {
    this.Sys_ConstantsSearch();
  }

  Sys_ConstantsSearch() {
    this.Sys_ConstantsService.SearchAll(this.Sys_ConstantsSort, this.Sys_ConstantsPaginator);
  }
  Sys_ConstantsSave(element: Sys_Constants) {
    this.Sys_ConstantsService.FormData = element;
    this.NotificationService.warn(this.Sys_ConstantsService.ComponentSaveAll(this.Sys_ConstantsSort, this.Sys_ConstantsPaginator));
  }
  Sys_ConstantsDelete(element: Sys_Constants) {
    this.Sys_ConstantsService.FormData = element;
    this.NotificationService.warn(this.Sys_ConstantsService.ComponentDeleteAll(this.Sys_ConstantsSort, this.Sys_ConstantsPaginator));
  }
}
