import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_UserMenus } from './Sys_UserMenus.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_UserMenusService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'User_Id', 'Menu_Id'];

    List: Sys_UserMenus[] | undefined;
    ListFilter: Sys_UserMenus[] | undefined;
    FormData!: Sys_UserMenus;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_UserMenus";
    }
}

