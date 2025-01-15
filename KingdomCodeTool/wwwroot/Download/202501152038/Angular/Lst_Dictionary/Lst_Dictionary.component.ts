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

@Component({
  selector: 'app-Lst_Dictionary',
  templateUrl: './Lst_Dictionary.component.html',
  styleUrls: ['./Lst_Dictionary.component.css']
})
export class Lst_DictionaryComponent implements OnInit {

  @ViewChild('Lst_DictionarySort') Lst_DictionarySort: MatSort;
  @ViewChild('Lst_DictionaryPaginator') Lst_DictionaryPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Lst_DictionaryService: Lst_DictionaryService,
  ) { }

  ngOnInit(): void {
    this.Lst_DictionarySearch();
  }

  Lst_DictionarySearch() {
    this.Lst_DictionaryService.SearchAll(this.Lst_DictionarySort, this.Lst_DictionaryPaginator);
  }
  Lst_DictionarySave(element: Lst_Dictionary) {
    this.Lst_DictionaryService.FormData = element;
    this.NotificationService.warn(this.Lst_DictionaryService.ComponentSaveAll(this.Lst_DictionarySort, this.Lst_DictionaryPaginator));
  }
  Lst_DictionaryDelete(element: Lst_Dictionary) {
    this.Lst_DictionaryService.FormData = element;
    this.NotificationService.warn(this.Lst_DictionaryService.ComponentDeleteAll(this.Lst_DictionarySort, this.Lst_DictionaryPaginator));
  }
}
