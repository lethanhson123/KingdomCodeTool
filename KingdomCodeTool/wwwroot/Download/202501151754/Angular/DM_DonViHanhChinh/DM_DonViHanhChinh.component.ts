import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_DonViHanhChinh } from 'src/app/shared/DM_DonViHanhChinh.model';
import { DM_DonViHanhChinhService } from 'src/app/shared/DM_DonViHanhChinh.service';
import { DM_DonViHanhChinhComponent } from './DM_DonViHanhChinh-detail/DM_DonViHanhChinh-detail.component';


@Component({
  selector: 'app-DM_DonViHanhChinh',
  templateUrl: './DM_DonViHanhChinh.component.html',
  styleUrls: ['./DM_DonViHanhChinh.component.css']
})
export class DM_DonViHanhChinhComponent implements OnInit {

@ViewChild('DM_DonViHanhChinhSort') DM_DonViHanhChinhSort: MatSort;
  @ViewChild('DM_DonViHanhChinhPaginator') DM_DonViHanhChinhPaginator: MatPaginator;

constructor(
    private Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_DonViHanhChinhService: DM_DonViHanhChinhService,
  ) { }

ngOnInit(): void {
    this.DM_DonViHanhChinhSearch();
  }
  DM_DonViHanhChinhSearch() {
    this.DM_DonViHanhChinhService.SearchAllNotEmpty(this.DM_DonViHanhChinhSort, this.DM_DonViHanhChinhPaginator);
  }

DM_DonViHanhChinhAdd(element: DM_DonViHanhChinh) {
    this.DM_DonViHanhChinhService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(DM_DonViHanhChinhDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.DM_DonViHanhChinhSearch();
    });
  }

    }

