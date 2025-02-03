import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Operators } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_Operators.model';
import { Sys_OperatorsService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_Operators.service';

@Component({
  selector: 'app-Sys_Operators',
  templateUrl: './Sys_Operators.component.html',
  styleUrls: ['./Sys_Operators.component.css']
})
export class Sys_OperatorsComponent implements OnInit {

  @ViewChild('Sys_OperatorsSort') Sys_OperatorsSort: MatSort;
  @ViewChild('Sys_OperatorsPaginator') Sys_OperatorsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_OperatorsService: Sys_OperatorsService,
  ) { }

  ngOnInit(): void {
    this.Sys_OperatorsSearch();
  }

  Sys_OperatorsSearch() {
    this.Sys_OperatorsService.SearchAll(this.Sys_OperatorsSort, this.Sys_OperatorsPaginator);
  }
  Sys_OperatorsSave(element: Sys_Operators) {
    this.Sys_OperatorsService.FormData = element;
    this.NotificationService.warn(this.Sys_OperatorsService.ComponentSaveAll(this.Sys_OperatorsSort, this.Sys_OperatorsPaginator));
  }
  Sys_OperatorsDelete(element: Sys_Operators) {
    this.Sys_OperatorsService.FormData = element;
    this.NotificationService.warn(this.Sys_OperatorsService.ComponentDeleteAll(this.Sys_OperatorsSort, this.Sys_OperatorsPaginator));
  }
}
