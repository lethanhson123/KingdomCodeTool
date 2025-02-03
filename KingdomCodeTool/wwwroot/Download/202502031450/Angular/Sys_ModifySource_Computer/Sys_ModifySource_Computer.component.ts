import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_ModifySource_Computer } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ModifySource_Computer.model';
import { Sys_ModifySource_ComputerService } from 'src/app/shared/eHospital_DongNai_A_Config/Sys_ModifySource_Computer.service';

@Component({
  selector: 'app-Sys_ModifySource_Computer',
  templateUrl: './Sys_ModifySource_Computer.component.html',
  styleUrls: ['./Sys_ModifySource_Computer.component.css']
})
export class Sys_ModifySource_ComputerComponent implements OnInit {

  @ViewChild('Sys_ModifySource_ComputerSort') Sys_ModifySource_ComputerSort: MatSort;
  @ViewChild('Sys_ModifySource_ComputerPaginator') Sys_ModifySource_ComputerPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ModifySource_ComputerService: Sys_ModifySource_ComputerService,
  ) { }

  ngOnInit(): void {
    this.Sys_ModifySource_ComputerSearch();
  }

  Sys_ModifySource_ComputerSearch() {
    this.Sys_ModifySource_ComputerService.SearchAll(this.Sys_ModifySource_ComputerSort, this.Sys_ModifySource_ComputerPaginator);
  }
  Sys_ModifySource_ComputerSave(element: Sys_ModifySource_Computer) {
    this.Sys_ModifySource_ComputerService.FormData = element;
    this.NotificationService.warn(this.Sys_ModifySource_ComputerService.ComponentSaveAll(this.Sys_ModifySource_ComputerSort, this.Sys_ModifySource_ComputerPaginator));
  }
  Sys_ModifySource_ComputerDelete(element: Sys_ModifySource_Computer) {
    this.Sys_ModifySource_ComputerService.FormData = element;
    this.NotificationService.warn(this.Sys_ModifySource_ComputerService.ComponentDeleteAll(this.Sys_ModifySource_ComputerSort, this.Sys_ModifySource_ComputerPaginator));
  }
}
