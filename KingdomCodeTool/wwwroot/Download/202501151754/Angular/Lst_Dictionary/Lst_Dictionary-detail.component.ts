import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { Lst_Dictionary } from 'src/app/shared/Lst_Dictionary.model';
import { Lst_DictionaryService } from 'src/app/shared/Lst_Dictionary.service';

@Component({
  selector: 'app-Lst_Dictionary-detail',
  templateUrl: './Lst_Dictionary-detail.component.html',
  styleUrls: ['./Lst_Dictionary-detail.component.css']
})
export class Lst_DictionaryDetailComponent implements OnInit {

  constructor(
    private Dialog: MatDialog,
    public DialogRef: MatDialogRef<Lst_DictionaryDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Lst_DictionaryService: Lst_DictionaryService,

    ) { }

    ngOnInit(): void {
    
    }
    Close() {
    this.DialogRef.close();
    }

    
    Lst_DictionarySave() {
    this.Lst_DictionaryService.IsShowLoading = true;
    this.Lst_DictionaryService.SaveAsync().subscribe(
    res => {
    this.Lst_DictionaryService.FormData = res as Lst_Dictionary;   

    this.NotificationService.warn(environment.SaveSuccess);
    },
    err => {
    this.NotificationService.warn(environment.SaveNotSuccess);
    },
    () => {
    this.Lst_DictionaryService.IsShowLoading = false;
    }
    );
    }

    }

