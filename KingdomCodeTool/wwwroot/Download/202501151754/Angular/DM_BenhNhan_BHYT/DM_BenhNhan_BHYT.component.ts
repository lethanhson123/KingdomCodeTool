import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_BenhNhan_BHYT } from 'src/app/shared/DM_BenhNhan_BHYT.model';
import { DM_BenhNhan_BHYTService } from 'src/app/shared/DM_BenhNhan_BHYT.service';
import { DM_BenhNhan_BHYTComponent } from './DM_BenhNhan_BHYT-detail/DM_BenhNhan_BHYT-detail.component';


@Component({
  selector: 'app-DM_BenhNhan_BHYT',
  templateUrl: './DM_BenhNhan_BHYT.component.html',
  styleUrls: ['./DM_BenhNhan_BHYT.component.css']
})
export class DM_BenhNhan_BHYTComponent implements OnInit {

@ViewChild('DM_BenhNhan_BHYTSort') DM_BenhNhan_BHYTSort: MatSort;
  @ViewChild('DM_BenhNhan_BHYTPaginator') DM_BenhNhan_BHYTPaginator: MatPaginator;

constructor(
    private Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_BenhNhan_BHYTService: DM_BenhNhan_BHYTService,
  ) { }

ngOnInit(): void {
    this.DM_BenhNhan_BHYTSearch();
  }
  DM_BenhNhan_BHYTSearch() {
    this.DM_BenhNhan_BHYTService.SearchAllNotEmpty(this.DM_BenhNhan_BHYTSort, this.DM_BenhNhan_BHYTPaginator);
  }

DM_BenhNhan_BHYTAdd(element: DM_BenhNhan_BHYT) {
    this.DM_BenhNhan_BHYTService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(DM_BenhNhan_BHYTDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.DM_BenhNhan_BHYTSearch();
    });
  }

    }

