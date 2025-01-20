import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_ControlTypes } from './Sys_ControlTypes.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ControlTypesService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ControlType_Id', 'GroupCode', 'ControlType_Code', 'ControlType_Name', 'Description'];

    List: Sys_ControlTypes[] | undefined;
    ListFilter: Sys_ControlTypes[] | undefined;
    FormData!: Sys_ControlTypes;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_ControlTypes";
    }
}

