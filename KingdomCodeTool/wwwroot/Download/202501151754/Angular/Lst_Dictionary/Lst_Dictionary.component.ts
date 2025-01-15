import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { Lst_Dictionary } from 'src/app/shared/Lst_Dictionary.model';
import { Lst_DictionaryService } from 'src/app/shared/Lst_Dictionary.service';
import { Lst_DictionaryComponent } from './Lst_Dictionary-detail/Lst_Dictionary-detail.component';


@Component({
  selector: 'app-Lst_Dictionary',
  templateUrl: './Lst_Dictionary.component.html',
  styleUrls: ['./Lst_Dictionary.component.css']
})
export class Lst_DictionaryComponent implements OnInit {

@ViewChild('Lst_DictionarySort') Lst_DictionarySort: MatSort;
  @ViewChild('Lst_DictionaryPaginator') Lst_DictionaryPaginator: MatPaginator;

constructor(
    private Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Lst_DictionaryService: Lst_DictionaryService,
  ) { }

ngOnInit(): void {
    this.Lst_DictionarySearch();
  }
  Lst_DictionarySearch() {
    this.Lst_DictionaryService.SearchAllNotEmpty(this.Lst_DictionarySort, this.Lst_DictionaryPaginator);
  }

Lst_DictionaryAdd(element: Lst_Dictionary) {
    this.Lst_DictionaryService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(Lst_DictionaryDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.Lst_DictionarySearch();
    });
  }

    }

