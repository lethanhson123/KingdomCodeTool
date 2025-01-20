import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Groups } from './Sys_Groups.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_GroupsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Group_Id', 'Group_Code', 'Group_Name', 'Language_Id', 'Domain_Id', 'Admin', 'DefaultGroup', 'Member', 'Description', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By', 'Latin_Name'];

    List: Sys_Groups[] | undefined;
    ListFilter: Sys_Groups[] | undefined;
    FormData!: Sys_Groups;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Groups";
    }
}

