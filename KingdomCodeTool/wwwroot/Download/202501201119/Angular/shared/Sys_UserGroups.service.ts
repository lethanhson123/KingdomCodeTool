import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_UserGroups } from './Sys_UserGroups.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_UserGroupsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'User_Id', 'Group_Id'];

    List: Sys_UserGroups[] | undefined;
    ListFilter: Sys_UserGroups[] | undefined;
    FormData!: Sys_UserGroups;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_UserGroups";
    }
}

