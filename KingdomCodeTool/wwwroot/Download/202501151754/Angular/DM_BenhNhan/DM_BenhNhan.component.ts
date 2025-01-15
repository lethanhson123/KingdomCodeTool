import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_BenhNhan } from 'src/app/shared/DM_BenhNhan.model';
import { DM_BenhNhanService } from 'src/app/shared/DM_BenhNhan.service';
import { DM_BenhNhanComponent } from './DM_BenhNhan-detail/DM_BenhNhan-detail.component';


@Component({
  selector: 'app-DM_BenhNhan',
  templateUrl: './DM_BenhNhan.component.html',
  styleUrls: ['./DM_BenhNhan.component.css']
})
export class DM_BenhNhanComponent implements OnInit {

@ViewChild('DM_BenhNhanSort') DM_BenhNhanSort: MatSort;
  @ViewChild('DM_BenhNhanPaginator') DM_BenhNhanPaginator: MatPaginator;

constructor(
    private Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_BenhNhanService: DM_BenhNhanService,
  ) { }

ngOnInit(): void {
    this.DM_BenhNhanSearch();
  }
  DM_BenhNhanSearch() {
    this.DM_BenhNhanService.SearchAllNotEmpty(this.DM_BenhNhanSort, this.DM_BenhNhanPaginator);
  }

DM_BenhNhanAdd(element: DM_BenhNhan) {
    this.DM_BenhNhanService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(DM_BenhNhanDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.DM_BenhNhanSearch();
    });
  }

    }

