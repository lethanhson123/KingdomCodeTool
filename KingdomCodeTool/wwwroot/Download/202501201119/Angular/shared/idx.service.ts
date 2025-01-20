import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { idx } from './idx.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class idxService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Menu_Code', 'Menu_Name', 'idx'];

    List: idx[] | undefined;
    ListFilter: idx[] | undefined;
    FormData!: idx;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "idx";
    }
}

