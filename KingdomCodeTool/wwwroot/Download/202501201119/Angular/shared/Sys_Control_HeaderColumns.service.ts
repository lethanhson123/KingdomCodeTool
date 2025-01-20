﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Control_HeaderColumns } from './Sys_Control_HeaderColumns.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_Control_HeaderColumnsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Control_HeaderColumn_Id', 'Control_Id', 'Language_Id', 'Column_Index', 'Column_Header', 'Column_Align', 'Updating'];

    List: Sys_Control_HeaderColumns[] | undefined;
    ListFilter: Sys_Control_HeaderColumns[] | undefined;
    FormData!: Sys_Control_HeaderColumns;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Control_HeaderColumns";
    }
}

