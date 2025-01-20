import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_SiteDatabaseConnections } from './Sys_SiteDatabaseConnections.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_SiteDatabaseConnectionsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'SiteCode', 'SiteName', 'SiteConnectionCode', 'Enabled'];

    List: Sys_SiteDatabaseConnections[] | undefined;
    ListFilter: Sys_SiteDatabaseConnections[] | undefined;
    FormData!: Sys_SiteDatabaseConnections;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_SiteDatabaseConnections";
    }
}

