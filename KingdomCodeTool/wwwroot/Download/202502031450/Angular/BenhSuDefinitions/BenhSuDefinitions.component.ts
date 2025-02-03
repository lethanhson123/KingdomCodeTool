import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { BenhSuDefinitions } from 'src/app/shared/eHospital_DongNai_A_Config/BenhSuDefinitions.model';
import { BenhSuDefinitionsService } from 'src/app/shared/eHospital_DongNai_A_Config/BenhSuDefinitions.service';

@Component({
  selector: 'app-BenhSuDefinitions',
  templateUrl: './BenhSuDefinitions.component.html',
  styleUrls: ['./BenhSuDefinitions.component.css']
})
export class BenhSuDefinitionsComponent implements OnInit {

  @ViewChild('BenhSuDefinitionsSort') BenhSuDefinitionsSort: MatSort;
  @ViewChild('BenhSuDefinitionsPaginator') BenhSuDefinitionsPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public BenhSuDefinitionsService: BenhSuDefinitionsService,
  ) { }

  ngOnInit(): void {
    this.BenhSuDefinitionsSearch();
  }

  BenhSuDefinitionsSearch() {
    this.BenhSuDefinitionsService.SearchAll(this.BenhSuDefinitionsSort, this.BenhSuDefinitionsPaginator);
  }
  BenhSuDefinitionsSave(element: BenhSuDefinitions) {
    this.BenhSuDefinitionsService.FormData = element;
    this.NotificationService.warn(this.BenhSuDefinitionsService.ComponentSaveAll(this.BenhSuDefinitionsSort, this.BenhSuDefinitionsPaginator));
  }
  BenhSuDefinitionsDelete(element: BenhSuDefinitions) {
    this.BenhSuDefinitionsService.FormData = element;
    this.NotificationService.warn(this.BenhSuDefinitionsService.ComponentDeleteAll(this.BenhSuDefinitionsSort, this.BenhSuDefinitionsPaginator));
  }
}
