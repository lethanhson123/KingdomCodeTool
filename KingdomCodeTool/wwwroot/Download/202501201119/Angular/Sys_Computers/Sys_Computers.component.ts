import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { Sys_Computers } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Computers.model';
import { Sys_ComputersService } from 'src/app/shared/_eHospital_DongNai_A_System/Sys_Computers.service';

@Component({
  selector: 'app-Sys_Computers',
  templateUrl: './Sys_Computers.component.html',
  styleUrls: ['./Sys_Computers.component.css']
})
export class Sys_ComputersComponent implements OnInit {

  @ViewChild('Sys_ComputersSort') Sys_ComputersSort: MatSort;
  @ViewChild('Sys_ComputersPaginator') Sys_ComputersPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Sys_ComputersService: Sys_ComputersService,
  ) { }

  ngOnInit(): void {
    this.Sys_ComputersSearch();
  }

  Sys_ComputersSearch() {
    this.Sys_ComputersService.SearchAll(this.Sys_ComputersSort, this.Sys_ComputersPaginator);
  }
  Sys_ComputersSave(element: Sys_Computers) {
    this.Sys_ComputersService.FormData = element;
    this.NotificationService.warn(this.Sys_ComputersService.ComponentSaveAll(this.Sys_ComputersSort, this.Sys_ComputersPaginator));
  }
  Sys_ComputersDelete(element: Sys_Computers) {
    this.Sys_ComputersService.FormData = element;
    this.NotificationService.warn(this.Sys_ComputersService.ComponentDeleteAll(this.Sys_ComputersSort, this.Sys_ComputersPaginator));
  }
}
