import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_BenhNhan_BHYT } from 'src/app/shared/DM_BenhNhan_BHYT.model';
import { DM_BenhNhan_BHYTService } from 'src/app/shared/DM_BenhNhan_BHYT.service';

@Component({
  selector: 'app-DM_BenhNhan_BHYT-detail',
  templateUrl: './DM_BenhNhan_BHYT-detail.component.html',
  styleUrls: ['./DM_BenhNhan_BHYT-detail.component.css']
})
export class DM_BenhNhan_BHYTDetailComponent implements OnInit {

  constructor(
    private Dialog: MatDialog,
    public DialogRef: MatDialogRef<DM_BenhNhan_BHYTDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_BenhNhan_BHYTService: DM_BenhNhan_BHYTService,

    ) { }

    ngOnInit(): void {
    
    }
    Close() {
    this.DialogRef.close();
    }

    
    DM_BenhNhan_BHYTSave() {
    this.DM_BenhNhan_BHYTService.IsShowLoading = true;
    this.DM_BenhNhan_BHYTService.SaveAsync().subscribe(
    res => {
    this.DM_BenhNhan_BHYTService.FormData = res as DM_BenhNhan_BHYT;   

    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.DM_BenhNhan_BHYTService.IsShowLoading = false;
    }
    );
    }

    }

