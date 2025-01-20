import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_AutoTextGroups } from './Sys_AutoTextGroups.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_AutoTextGroupsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'AutoText_Id', 'Group_Id'];

    List: Sys_AutoTextGroups[] | undefined;
    ListFilter: Sys_AutoTextGroups[] | undefined;
    FormData!: Sys_AutoTextGroups;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_AutoTextGroups";
    }
}

