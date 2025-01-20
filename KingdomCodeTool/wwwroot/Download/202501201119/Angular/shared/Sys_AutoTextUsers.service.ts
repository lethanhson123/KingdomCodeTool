import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_AutoTextUsers } from './Sys_AutoTextUsers.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_AutoTextUsersService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'AutoText_Id', 'User_Id'];

    List: Sys_AutoTextUsers[] | undefined;
    ListFilter: Sys_AutoTextUsers[] | undefined;
    FormData!: Sys_AutoTextUsers;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_AutoTextUsers";
    }
}

