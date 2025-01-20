import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_UserCommands } from './Sys_UserCommands.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_UserCommandsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'User_Id', 'Command_Id', 'Function_Id', 'Menu_Id'];

    List: Sys_UserCommands[] | undefined;
    ListFilter: Sys_UserCommands[] | undefined;
    FormData!: Sys_UserCommands;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_UserCommands";
    }
}

