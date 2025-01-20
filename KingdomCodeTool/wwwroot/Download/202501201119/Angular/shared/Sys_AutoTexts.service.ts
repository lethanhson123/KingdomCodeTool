import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_AutoTexts } from './Sys_AutoTexts.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_AutoTextsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'AutoText_Id', 'Definer_Id', 'OriginString', 'ReplaceString', 'IsAutoCorrect', 'ApplyToEveryone', 'Enabled', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By'];

    List: Sys_AutoTexts[] | undefined;
    ListFilter: Sys_AutoTexts[] | undefined;
    FormData!: Sys_AutoTexts;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_AutoTexts";
    }
}

