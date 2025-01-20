import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Control_Details } from './Sys_Control_Details.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_Control_DetailsService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Control_Detail_Id', 'Control_Id', 'Language_Id', 'PropertyName', 'PropertyValue', 'Origin_PropertyValue', 'User_Id', 'Group_Id', 'Updating'];

    List: Sys_Control_Details[] | undefined;
    ListFilter: Sys_Control_Details[] | undefined;
    FormData!: Sys_Control_Details;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Control_Details";
    }
}

