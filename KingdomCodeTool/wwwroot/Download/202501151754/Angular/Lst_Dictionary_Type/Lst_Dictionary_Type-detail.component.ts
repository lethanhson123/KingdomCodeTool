import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { Lst_Dictionary_Type } from 'src/app/shared/Lst_Dictionary_Type.model';
import { Lst_Dictionary_TypeService } from 'src/app/shared/Lst_Dictionary_Type.service';

@Component({
  selector: 'app-Lst_Dictionary_Type-detail',
  templateUrl: './Lst_Dictionary_Type-detail.component.html',
  styleUrls: ['./Lst_Dictionary_Type-detail.component.css']
})
export class Lst_Dictionary_TypeDetailComponent implements OnInit {

  constructor(
    private Dialog: MatDialog,
    public DialogRef: MatDialogRef<Lst_Dictionary_TypeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Lst_Dictionary_TypeService: Lst_Dictionary_TypeService,

    ) { }

    ngOnInit(): void {
    
    }
    Close() {
    this.DialogRef.close();
    }

    
    Lst_Dictionary_TypeSave() {
    this.Lst_Dictionary_TypeService.IsShowLoading = true;
    this.Lst_Dictionary_TypeService.SaveAsync().subscribe(
    res => {
    this.Lst_Dictionary_TypeService.FormData = res as Lst_Dictionary_Type;   

    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.Lst_Dictionary_TypeService.IsShowLoading = false;
    }
    );
    }

    }

