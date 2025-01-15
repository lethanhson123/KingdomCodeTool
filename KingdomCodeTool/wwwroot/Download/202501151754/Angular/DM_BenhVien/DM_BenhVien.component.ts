import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_BenhVien } from 'src/app/shared/DM_BenhVien.model';
import { DM_BenhVienService } from 'src/app/shared/DM_BenhVien.service';
import { DM_BenhVienComponent } from './DM_BenhVien-detail/DM_BenhVien-detail.component';


@Component({
  selector: 'app-DM_BenhVien',
  templateUrl: './DM_BenhVien.component.html',
  styleUrls: ['./DM_BenhVien.component.css']
})
export class DM_BenhVienComponent implements OnInit {

@ViewChild('DM_BenhVienSort') DM_BenhVienSort: MatSort;
  @ViewChild('DM_BenhVienPaginator') DM_BenhVienPaginator: MatPaginator;

constructor(
    private Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_BenhVienService: DM_BenhVienService,
  ) { }

ngOnInit(): void {
    this.DM_BenhVienSearch();
  }
  DM_BenhVienSearch() {
    this.DM_BenhVienService.SearchAllNotEmpty(this.DM_BenhVienSort, this.DM_BenhVienPaginator);
  }

DM_BenhVienAdd(element: DM_BenhVien) {
    this.DM_BenhVienService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(DM_BenhVienDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.DM_BenhVienSearch();
    });
  }

    }

