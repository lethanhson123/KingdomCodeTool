import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_LoginSessions } from './Sys_LoginSessions.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_LoginSessionsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'LoginSession_Id', 'User_Id', 'HostName', 'IPAddress', 'NOS_UserName', 'NOS_DomainName', 'ProcessId', 'LoginTime', 'LogoutTime'];

    List: Sys_LoginSessions[] | undefined;
    ListFilter: Sys_LoginSessions[] | undefined;
    FormData!: Sys_LoginSessions;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_LoginSessions";
    }
}

