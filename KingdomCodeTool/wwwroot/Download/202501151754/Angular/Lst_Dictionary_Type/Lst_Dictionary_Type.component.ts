import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { Lst_Dictionary_Type } from 'src/app/shared/Lst_Dictionary_Type.model';
import { Lst_Dictionary_TypeService } from 'src/app/shared/Lst_Dictionary_Type.service';
import { Lst_Dictionary_TypeComponent } from './Lst_Dictionary_Type-detail/Lst_Dictionary_Type-detail.component';


@Component({
  selector: 'app-Lst_Dictionary_Type',
  templateUrl: './Lst_Dictionary_Type.component.html',
  styleUrls: ['./Lst_Dictionary_Type.component.css']
})
export class Lst_Dictionary_TypeComponent implements OnInit {

@ViewChild('Lst_Dictionary_TypeSort') Lst_Dictionary_TypeSort: MatSort;
  @ViewChild('Lst_Dictionary_TypePaginator') Lst_Dictionary_TypePaginator: MatPaginator;

constructor(
    private Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public Lst_Dictionary_TypeService: Lst_Dictionary_TypeService,
  ) { }

ngOnInit(): void {
    this.Lst_Dictionary_TypeSearch();
  }
  Lst_Dictionary_TypeSearch() {
    this.Lst_Dictionary_TypeService.SearchAllNotEmpty(this.Lst_Dictionary_TypeSort, this.Lst_Dictionary_TypePaginator);
  }

Lst_Dictionary_TypeAdd(element: Lst_Dictionary_Type) {
    this.Lst_Dictionary_TypeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(Lst_Dictionary_TypeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.Lst_Dictionary_TypeSearch();
    });
  }

    }

