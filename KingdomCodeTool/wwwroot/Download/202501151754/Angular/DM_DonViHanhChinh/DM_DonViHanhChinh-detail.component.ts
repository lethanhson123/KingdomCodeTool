import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_DonViHanhChinh } from 'src/app/shared/DM_DonViHanhChinh.model';
import { DM_DonViHanhChinhService } from 'src/app/shared/DM_DonViHanhChinh.service';

@Component({
  selector: 'app-DM_DonViHanhChinh-detail',
  templateUrl: './DM_DonViHanhChinh-detail.component.html',
  styleUrls: ['./DM_DonViHanhChinh-detail.component.css']
})
export class DM_DonViHanhChinhDetailComponent implements OnInit {

  constructor(
    private Dialog: MatDialog,
    public DialogRef: MatDialogRef<DM_DonViHanhChinhDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_DonViHanhChinhService: DM_DonViHanhChinhService,

    ) { }

    ngOnInit(): void {
    
    }
    Close() {
    this.DialogRef.close();
    }

    
    DM_DonViHanhChinhSave() {
    this.DM_DonViHanhChinhService.IsShowLoading = true;
    this.DM_DonViHanhChinhService.SaveAsync().subscribe(
    res => {
    this.DM_DonViHanhChinhService.FormData = res as DM_DonViHanhChinh;   

    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.DM_DonViHanhChinhService.IsShowLoading = false;
    }
    );
    }

    }

