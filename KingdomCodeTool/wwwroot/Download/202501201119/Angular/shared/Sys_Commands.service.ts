import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Commands } from './Sys_Commands.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_CommandsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Command_Id', 'Command_Name', 'Command_Text', 'Function_Id', 'IsCommandButton', 'IsCommandMenu', 'IsCommandBar', 'DefaultRight', 'Enabled', 'SetPermission'];

    List: Sys_Commands[] | undefined;
    ListFilter: Sys_Commands[] | undefined;
    FormData!: Sys_Commands;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Commands";
    }
}

