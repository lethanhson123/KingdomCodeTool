import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_AppPrivateSettings } from './Sys_AppPrivateSettings.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_AppPrivateSettingsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Setting_Id', 'Group_Code', 'Code', 'User_Id', 'Computer', 'Value', 'Description', 'CreationDate', 'CreatedBy', 'LastUpdateDate', 'LastUpdatedBy'];

    List: Sys_AppPrivateSettings[] | undefined;
    ListFilter: Sys_AppPrivateSettings[] | undefined;
    FormData!: Sys_AppPrivateSettings;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_AppPrivateSettings";
    }
}

