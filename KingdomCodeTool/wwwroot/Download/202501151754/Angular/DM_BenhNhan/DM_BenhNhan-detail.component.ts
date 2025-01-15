import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_BenhNhan } from 'src/app/shared/DM_BenhNhan.model';
import { DM_BenhNhanService } from 'src/app/shared/DM_BenhNhan.service';

@Component({
  selector: 'app-DM_BenhNhan-detail',
  templateUrl: './DM_BenhNhan-detail.component.html',
  styleUrls: ['./DM_BenhNhan-detail.component.css']
})
export class DM_BenhNhanDetailComponent implements OnInit {

  constructor(
    private Dialog: MatDialog,
    public DialogRef: MatDialogRef<DM_BenhNhanDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_BenhNhanService: DM_BenhNhanService,

    ) { }

    ngOnInit(): void {
    
    }
    Close() {
    this.DialogRef.close();
    }

    
    DM_BenhNhanSave() {
    this.DM_BenhNhanService.IsShowLoading = true;
    this.DM_BenhNhanService.SaveAsync().subscribe(
    res => {
    this.DM_BenhNhanService.FormData = res as DM_BenhNhan;   

    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.DM_BenhNhanService.IsShowLoading = false;
    }
    );
    }

    }

