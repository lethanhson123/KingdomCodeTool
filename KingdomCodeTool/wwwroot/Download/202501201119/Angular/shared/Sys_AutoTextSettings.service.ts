import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_AutoTextSettings } from './Sys_AutoTextSettings.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_AutoTextSettingsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'AutoTextSetting_Id', 'FormFullName', 'ListOfControlName', 'Enabled', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By'];

    List: Sys_AutoTextSettings[] | undefined;
    ListFilter: Sys_AutoTextSettings[] | undefined;
    FormData!: Sys_AutoTextSettings;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_AutoTextSettings";
    }
}

