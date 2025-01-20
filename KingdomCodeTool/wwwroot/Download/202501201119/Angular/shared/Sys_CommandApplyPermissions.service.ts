import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_CommandApplyPermissions } from './Sys_CommandApplyPermissions.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_CommandApplyPermissionsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Command_Id', 'Function_Id', 'Menu_Id'];

    List: Sys_CommandApplyPermissions[] | undefined;
    ListFilter: Sys_CommandApplyPermissions[] | undefined;
    FormData!: Sys_CommandApplyPermissions;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_CommandApplyPermissions";
    }
}

