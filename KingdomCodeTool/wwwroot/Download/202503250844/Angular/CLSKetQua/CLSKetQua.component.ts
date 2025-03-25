import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';


import { CLSKetQua } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua.model';
import { CLSKetQuaService } from 'src/app/shared/eHospital_DongNai_A/CLSKetQua.service';

@Component({
  selector: 'app-CLSKetQua',
  templateUrl: './CLSKetQua.component.html',
  styleUrls: ['./CLSKetQua.component.css']
})
export class CLSKetQuaComponent implements OnInit {

  @ViewChild('CLSKetQuaSort') CLSKetQuaSort: MatSort;
  @ViewChild('CLSKetQuaPaginator') CLSKetQuaPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CLSKetQuaService: CLSKetQuaService,
  ) { }

  ngOnInit(): void {
    this.CLSKetQuaSearch();
  }

  CLSKetQuaSearch() {
    this.CLSKetQuaService.SearchAll(this.CLSKetQuaSort, this.CLSKetQuaPaginator);
  }
  CLSKetQuaSave(element: CLSKetQua) {
    this.CLSKetQuaService.FormData = element;
    this.NotificationService.warn(this.CLSKetQuaService.ComponentSaveAll(this.CLSKetQuaSort, this.CLSKetQuaPaginator));
  }
  CLSKetQuaDelete(element: CLSKetQua) {
    this.CLSKetQuaService.FormData = element;
    this.NotificationService.warn(this.CLSKetQuaService.ComponentDeleteAll(this.CLSKetQuaSort, this.CLSKetQuaPaginator));
  }
}
