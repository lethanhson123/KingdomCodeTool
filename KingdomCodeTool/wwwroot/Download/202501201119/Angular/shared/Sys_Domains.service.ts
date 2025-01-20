import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Domains } from './Sys_Domains.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_DomainsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Domain_Id', 'Domain_Code', 'Domain_Name', 'Parent_Id', 'Enabled', 'Description'];

    List: Sys_Domains[] | undefined;
    ListFilter: Sys_Domains[] | undefined;
    FormData!: Sys_Domains;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Domains";
    }
}

