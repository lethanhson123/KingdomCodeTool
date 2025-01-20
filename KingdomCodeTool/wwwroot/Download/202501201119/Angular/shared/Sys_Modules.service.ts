import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Modules } from './Sys_Modules.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ModulesService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Module_Id', 'Module_Code', 'Module_Name', 'Namespace', 'Module_File', 'Description', 'Enabled', 'Total_Function', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By'];

    List: Sys_Modules[] | undefined;
    ListFilter: Sys_Modules[] | undefined;
    FormData!: Sys_Modules;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Modules";
    }
}

