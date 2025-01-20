import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Functions } from './Sys_Functions.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_FunctionsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Function_Id', 'Function_Name', 'Function_Class', 'Module_Id', 'System_Function', 'Report_Function', 'Description', 'Enabled', 'Creation_Date', 'Created_By', 'Last_Update_Date', 'Last_Updated_By'];

    List: Sys_Functions[] | undefined;
    ListFilter: Sys_Functions[] | undefined;
    FormData!: Sys_Functions;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Functions";
    }
}

