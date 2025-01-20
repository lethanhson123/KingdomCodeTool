import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_UserPasswordHistory } from './Sys_UserPasswordHistory.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_UserPasswordHistoryService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'User_Id', 'ChangedDate', 'ChangedDateTime', 'ExpirationDate', 'User_Password'];

    List: Sys_UserPasswordHistory[] | undefined;
    ListFilter: Sys_UserPasswordHistory[] | undefined;
    FormData!: Sys_UserPasswordHistory;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_UserPasswordHistory";
    }
}

