import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DM_BenhVien } from 'src/app/shared/DM_BenhVien.model';
import { DM_BenhVienService } from 'src/app/shared/DM_BenhVien.service';

@Component({
  selector: 'app-DM_BenhVien-detail',
  templateUrl: './DM_BenhVien-detail.component.html',
  styleUrls: ['./DM_BenhVien-detail.component.css']
})
export class DM_BenhVienDetailComponent implements OnInit {

  constructor(
    private Dialog: MatDialog,
    public DialogRef: MatDialogRef<DM_BenhVienDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DM_BenhVienService: DM_BenhVienService,

    ) { }

    ngOnInit(): void {
    
    }
    Close() {
    this.DialogRef.close();
    }

    
    DM_BenhVienSave() {
    this.DM_BenhVienService.IsShowLoading = true;
    this.DM_BenhVienService.SaveAsync().subscribe(
    res => {
    this.DM_BenhVienService.FormData = res as DM_BenhVien;   

    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.DM_BenhVienService.IsShowLoading = false;
    }
    );
    }

    }

