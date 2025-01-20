import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_GroupCommands } from './Sys_GroupCommands.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_GroupCommandsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Group_Id', 'Command_Id', 'Function_Id', 'Menu_Id'];

    List: Sys_GroupCommands[] | undefined;
    ListFilter: Sys_GroupCommands[] | undefined;
    FormData!: Sys_GroupCommands;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_GroupCommands";
    }
}

